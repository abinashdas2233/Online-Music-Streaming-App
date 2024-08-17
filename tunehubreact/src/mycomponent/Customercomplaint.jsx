import React, { useState } from 'react';
import axios from 'axios';
import Customernavbar from './Customernavbar';
import './Cc.css'

function Customercomplaint() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [num, setnum] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/pcom", {
        name: name,
        email: email,
        num: num,
        feedback: feedback
      });
      console.log('Response:', response.data);
     
      setName('');
      setEmail('');
      setnum('');
      setFeedback('');
      alert('Complaint submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit complaint due to server error. Please try again later.');
    }
  };
  
  return (
    <>
      <Customernavbar />
     <div id="mnc">
      
      <div id="img1">
        <img src='nw8.png'></img>
      </div>
      <div id="tlc">
        <h1>Complaint Form</h1>
      <form onSubmit={handleSubmit}>
  <label>
    
    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value) } placeholder='Enter Name' />
  </label>
  <br /><br />
  <label>
    
    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Email'/>
  </label>
  <br /><br />
  <label>
    
    <input type="tel" name="contact" value={num} onChange={(e) => setnum(e.target.value)} placeholder='Contact No' />
  </label>
  <br /><br />
  <label>
    
    <textarea
      name="complaint"
      placeholder="We would love to hear your valuable feedback"
      value={feedback}
      onChange={(e) => setFeedback(e.target.value)}
    ></textarea>
  </label>
  <br /><br />
  <input type="submit" name="submit" />
</form>

      </div>
      <div id="img2">
        <div id="sub1"><img src='nw9.png' ></img><img src='nw11.png'></img></div>
        
      </div>
     </div>

    </>
  );
}

export default Customercomplaint;
