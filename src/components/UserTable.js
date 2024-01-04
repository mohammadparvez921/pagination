import React, { Component } from 'react';
import getUserData from '../api/user'; // Adjust the path accordingly

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
      <h2>User Data Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP Address</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.ip_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  }
}

export default UserTable;
