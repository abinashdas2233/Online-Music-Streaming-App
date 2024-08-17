import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Index2.css';

const Index = ({Setinputemail}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const navigate = useNavigate();
  

  const log = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const resp = await axios.post("http://localhost:8080/login", { email, password });
      console.log(resp.data);

      if (resp.data === "adminhome") {
        Setinputemail(email)
        navigate('/ah');
      } else if (resp.data === "displaysongs") {
        Setinputemail(email)
        navigate('/ds');
      } else if (resp.data === "payment") {
        Setinputemail(email)
        navigate('/py');
      } else {
        setResponse('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setResponse('Server-side error or check Email id & password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className='maincontainer'>
      <div className="formcont">
        
     
        <h1>LOGIN</h1>
        <p>Let's start the journey of music</p>
        <form onSubmit={log}>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
          <br />
        
         
          <Link to='/Password' className='navlink'>Forget password?</Link>
          <Link to='/register' className='ui'>
             Create Account
          </Link>
          <br />
          
          <br />
          <button type='submit' disabled={isLoading}>Login Now</button>
          {response && <p>{response}</p>}
        </form>
        
        <br></br>
       
          <br></br>
       
       
      </div>
      <div className="imgcont"></div>
    </div>
    </>
  );
};

export default Index;
