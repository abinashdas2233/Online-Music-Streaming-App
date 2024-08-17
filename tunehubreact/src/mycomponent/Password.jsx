import React, { useState } from 'react';
import axios from 'axios'; 
import './Index2.css';
import './Password.css';

const Password = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const[action,Setaction]=useState("")
  const[resp,Setresp]=useState('')

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    try {
      if(action=='customer-id'){
      const response = await axios.post("http://localhost:8080/upp", {
        email,
        password,
        role,
      });
      Setresp(response.data); 
      
    }
    else{
      const response = await axios.post("http://localhost:8080/ucp", {
        email,
        password,
        role,
      });
      Setresp(response.data); 
      
    }
     
    } catch (error) {
      
      console.error('There was an error updating the password!', error);
      alert('Failed to update password, check emailid.');
    }
  };

  return (
    <>
      <div className='maincontainer'>
        <div className="formcont">
          <h1 id='joo'>Update Password</h1>
          <p>Don't Share Password with anyone</p>
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email Address'
              name='email'
              required
            />
            <br />
            <select id='nw'
              value={action}
              onChange={(e) => Setaction(e.target.value)}
              required
            > 
              <option value="" disabled>Select</option>
              <option value="previous-password">Previous Password</option>
              <option value="customer-id">Customer ID</option>
            </select>
            <br></br>
            
            <input
              id='gk'
              type='password'
              name='password'
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder='ID or Previous Password'
              required
            />
            <br />
            <input
              id='gk'
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter New Password'
              required
            />
            <br />
        
            <button type='submit'>Submit</button>
            <p>{resp}</p>
          </form>
        </div>
        <div className="imgcont"></div>
      </div>
    </>
  );
};

export default Password;
