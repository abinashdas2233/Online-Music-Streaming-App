import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Adminnavbar from './Adminnavbar';
import './Cd.css'

function Customerdetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/findusers"); 
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Adminnavbar />
      
      <div id='hos'>
        <div id="tl1"><img src='/nw14.png' id='pn'></img>
        <img src='/nw16.png' id='pn'></img>


        </div>
        <div id="pl">
        <table border={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Address</th>
              <th>Email</th>
              <th>Gender</th>
              
              <th>Password</th>
              <th>Role</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
               
                <td>{user.password}</td>
                <td>{user.role}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        
      </div>
    </>
  );
}

export default Customerdetails;
