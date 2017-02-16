import React from 'react';
import Form from './Form';
import axios from 'axios';
import {api} from './config';

class Table extends React.Component{
  constructor(){
    super();
    this.state={
      data: [],
      // type 状态用来控制表单具体是新增还是修改，0是新增，其他均为_id
      type: null
    }
  }
  handleRemove(_id){
    var r=confirm("确定要删除该人员信息吗？");
    if(r){
      axios.delete(`${api}/del/${_id}`)
        .then( res => {
          alert(res.data.status);
          var newList = this.state.data.filter(function (person) {
            return person._id !== _id
          })
          this.setState({data:newList})
        })
        .catch( err => alert('删除失败') )
    }else {
      alert('取消删除')
    }
  }
  handleShow(num){
    this.setState({type: num})
    this.refs.form.handleShow();
  }
  componentDidMount(){
    axios.get(`${api}/all`)
      .then( res => this.setState({data: res.data.people}) )
      .catch( err => alert(err) )
  }
  editPerson(data,type){
    if (type===0) {
      axios.post(`${api}/new`,data)
        .then( res => {
          this.setState({data: [...this.state.data,res.data.person]})
          this.refs.form.handleShow()
        })
    }else {
      axios.put(`${api}/edit/${type}`,data)
        .then( res => {
          let index = this.state.data.findIndex(function (person) {
            return person._id === type;
          })
          // console.log(res.data.person);
          this.setState({data: [
            ...this.state.data.slice(0,index),
            Object.assign({}, res.data.person, data),
            ...this.state.data.slice(index+1)]});
          this.refs.form.handleShow();
        })
    }
  }
  render(){
    let styles = {
      maxWidth: '760px',
      margin: '10px auto'
    }
    return(
      <div style={styles}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>姓名</th>
              <th>年龄</th>
              <th>性别</th>
              <th>E-mail</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map( item =>
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.male===0 ? '男' : '女'}</td>
                <td>{item.email}</td>
                <td>
                  <div className='action'>
                    <button className='btn btn-default' onClick={this.handleShow.bind(this,item._id)}>修改</button>
                    <button className='btn btn-default' onClick={this.handleRemove.bind(this,item._id)}>删除</button>
                  </div>
                </td>
              </tr>
             ) }
          </tbody>
        </table>
        <div className='clearfix'>
          <button className='pull-right btn btn-default' onClick={this.handleShow.bind(this,0)}>添加新成员</button>
        </div>
        <Form ref='form' type={this.state.type} action={this.editPerson.bind(this)}/>
      </div>
    )
  }
}

export default Table;
