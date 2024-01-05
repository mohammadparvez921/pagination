import React, { Component } from 'react';
// import getUserData from '../api/user';

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    const {userData}=this.props
    console.log(userData);
    return (
      <div>
       {userData.map((user) => (
           <img src={user.url} alt="hiii" />
          ))}
    </div>
    );
  }
}

export default UserTable;
