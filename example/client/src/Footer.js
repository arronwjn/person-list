import React from 'react';

class Footer extends React.Component{
  render(){
    let styles = {
      fontSize: '18px',
      color: '#fff',
      backgroundColor: '#00bcd4',
      fontWeight: 'bold',
      padding: '20px 10px',
      marginTop: '30px',
      textAlign: 'center'
    }
    return(
      <div style={styles}>
        版权所有，盗版必究
      </div>
    )
  }
}

export default Footer;
