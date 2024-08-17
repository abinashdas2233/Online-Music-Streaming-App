// Admincomplaint.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Adminnavbar from './Adminnavbar';
import './Admincmp.css'

function Admincomplaint() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getcmp');
      setComplaints(response.data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  const handleDelete = async (ticketId) => {
    try {
      await axios.post('http://localhost:8080/delcmp', { ticketid: ticketId });
      // Filter out the deleted complaint from the state
      setComplaints(complaints.filter(complaint => complaint.ticketid !== ticketId));
    } catch (error) {
      console.error('Error deleting complaint:', error);
    }
  };
  
  

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
              <th>Ticket ID</th>
              <th>Email</th>
              <th>Feedback</th>
              <th>Name</th>
              <th>Contact Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map(complaint => (
              <tr key={complaint.ticketid}>
                <td>{complaint.ticketid}</td>
                <td>{complaint.email}</td>
                <td>{complaint.feedback}</td>
                <td>{complaint.name}</td>
                <td>{complaint.num}</td>
                <td>
                  <button id='btnst' onClick={() => handleDelete(complaint.ticketid)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
       
      </div>
    </>
  );
}

export default Admincomplaint;
