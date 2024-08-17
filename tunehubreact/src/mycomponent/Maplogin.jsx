import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Mapregister.css'


function Maplogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const navigate=useNavigate();

  const log = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const resp = await axios.post("http://localhost:8080/login",{ email, password });
      console.log(resp.data);
      if (resp.data === "adminhome") {
        navigate('/ah')
        
      }
      else if(resp.data==="displaysongs"){
        navigate('/ds')
      }
      else if(resp.data==="payment"){
        navigate('/py')
      }
      
      
      
      else {
        setResponse('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setResponse('Server-side error. Unable to send data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='reg'>
      <div className='ims'><img src='logo.png'alt='logo' width={100} height={80}></img></div>
      <form onSubmit={log} className='myt'>
        <label>Email: <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
        <br /><br />
        <label>Password: <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
        <br /><br />
        <button type='submit' disabled={isLoading}>{isLoading ? 'Logging in...' : 'Login'}</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default Maplogin;
