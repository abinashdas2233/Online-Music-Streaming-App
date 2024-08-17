import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Mapregister.css'

const Mapregister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [address, setAddress] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const resp = await axios.post("http://localhost:8080/register", { username, email, password, gender, role, address });
      console.log(resp.data);
      if (resp.data === "registersucces") {
        console.log("success");
        setResponse("Registration successful!");
      
        navigate('/');
      } else {
        console.log("failed");
        setResponse("E-mail id already exists");
      }
    } catch (error) {
      console.error(error);
      setResponse("Server side error. Unable to send request to backend.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
<>
<div className='maincont'>


  <div className='imgct'>
    
    <p>"One good thing about music, when it hits you, you feel no pain."</p>
    <Link to='/'><button>Login</button></Link>
  </div>
  <div className='formct'>
  <h1>Create Account</h1>
  <div className="data">
  <form onSubmit={handleSubmit}>
    <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='User Name' required></input>
    <br></br>
    <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email id' required></input>
    <br></br>
    <input type='password' placeholder='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
    <br></br>
    <label>Male</label>
    <input type='radio' name='gender' value='male' checked={gender === 'male'} onChange={(e) => setGender(e.target.value)}></input>
    <label>Female</label>
    <input type='radio'  name='gender' value='female' checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} ></input>
    <label>Others</label>

    <input type='radio'  name='gender' value='others' checked={gender === 'others'} onChange={(e) => setGender(e.target.value)} ></input>
    <br></br>
    <br></br>
    <label>Admin</label>
    <input type='radio'  name='role' value='admin' checked={role === 'admin'} onChange={(e) => setRole(e.target.value)} ></input>
    
    <label>User</label>
    <input type='radio' name='role' value='user' checked={role === 'user'} onChange={(e) => setRole(e.target.value)}></input>
    
    <br></br>
    <br></br>
    <input type='text' placeholder='Address' name='address' value={address} onChange={(e) => setAddress(e.target.value)} required></input>
    <br></br>
    <button>Submit</button>
  </form>
  <p>{response}</p>
  </div>
 
  </div>
  
  
</div>
</>
  );
}

export default Mapregister;
