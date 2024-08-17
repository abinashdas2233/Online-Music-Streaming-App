import React from 'react'
import { Link } from 'react-router-dom'


function Adminnavbar() {
  return (
    <>
     <div className='maincv'>
      <div className="imgcv"><Link to='/ah'><img src='logo.png' width={60} height={60}></img></Link></div>
      <div className="ulcv">
        <ul>
        <Link to='/ah'> <li>Home</li></Link>
        <Link to='/ass'><li>Add-Songs</li></Link>
        <Link to='/vss'><li>View songs</li></Link>
        <Link to='/fcc'> <li> FeedBacks</li></Link>
        </ul>
        </div>
      <div className="lastcv">
        <ul>
        <Link to='/vcd'><li>Customer-Profiles</li></Link>
          <li>||</li>
          <Link to='/'><li>Logout</li></Link>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Adminnavbar