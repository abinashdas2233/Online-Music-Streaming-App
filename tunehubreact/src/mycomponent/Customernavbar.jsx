import React from 'react'
import { Link } from 'react-router-dom'
import './Customernavbar.css'

function Customernavbar() {
  return (
    <>
    <div className='maincv'>
      <div className="imgcv"><Link to='/ds'><img src='logo.png' width={60} height={60}></img></Link></div>
      <div className="ulcv">
        <ul>
        <Link to='/ds'> <li>Home</li></Link>
        <Link to='/ds'><li>Profile</li></Link>
        <Link to='/cvs'><li>View songs</li></Link>
        <Link to='/'> <li>Logout</li></Link>
        </ul>
        </div>
      <div className="lastcv">
        <ul>
        <Link to='/cps'><li>Do you Need help?</li></Link>
          <li>||</li>
          <Link to='/register'><li>Creat a New Account</li></Link>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Customernavbar