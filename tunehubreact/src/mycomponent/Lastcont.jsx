import React, { useEffect, useState } from 'react';
import './Lastcont.css';
import axios from 'axios';

const Lastcont = (props) => {
  const [profdata, setProfdata] = useState([]);
  const [email, setEmail] = useState(() => localStorage.getItem('email') || props.vdata);

  useEffect(() => {
    if (email) {
      axios.post("http://localhost:8080/ptd", { email })
        .then((resp) => {
          setProfdata(resp.data);
          console.log(resp.data);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });
    }
  }, [email]);

  useEffect(() => {
    localStorage.setItem('email', email);
  }, [email]);

  console.log("datalist-" + profdata);

  return (
    <div id='lastdiv'>
      <div id='profiledata'>
        <div id="phead"><p1>Profile</p1></div>
        <div id="pdata">
          <p2>Name - {profdata.username || 'Loading...'}</p2>
          <p2>Email - {profdata.email || 'Loading...'}</p2>
          <p2>Location - {profdata.address || 'Loading...'}</p2>
        </div>
      </div>
      <div id="ldw"></div>
      <h1>Legendary Singer</h1>
    </div>
  );
}

export default Lastcont;
