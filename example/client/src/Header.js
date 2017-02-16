import React from 'react';

class Header extends React.Component{
  render(){
    let styles = {
      fontSize: '28px',
      color: '#fff',
      backgroundColor: '#00bcd4',
      fontWeight: 'bold',
      padding: '20px 10px'
    }
    return(
      <div style={styles}>
        人员列表页面
      </div>
    )
  }
}

export default Header;
