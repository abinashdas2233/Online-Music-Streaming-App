import React from 'react';
import './Pay.css'

function Payment() {
  const redirectToPage = () => {
    window.location.href = 'http://localhost:8080/redirectToPage';
  };

  return (
    <>
      <div id='desh'>
<img src='logo.png' height={100} width={120}></img>
<button id='bts' onClick={redirectToPage}>Click here to get  membership</button>
      </div>
      
    </>
  );
}

export default Payment;
