import React from 'react'
import Adminnavbar from './Adminnavbar'
import Chomeextra from './Chomeextra'

import Lastcont from './Lastcont'
import Foot from './Foot'
function Adminhome(props) {
  return (
    <>
      
      <Adminnavbar/>
      <div className="chomemain">
    <div id="head">
      <div id="head1"><h1 className='desg' id='red'>Listen</h1> <h1 className='desg'>Unlimited</h1>
      <br></br>
      <h1 className='desg'>Explore New music ,</h1>
      <br></br>
      <h1 className='desg'> only on T-hub</h1>
      </div>
      <div id="par2">
        <p id='dq'>Music, the universal language of emotions, has the incredible power to touch our souls. Song lyrics, in particular, hold a unique ability to capture the essence of our emotions, thoughts, and feelings, often in just a few lines. So whether you’re searching for the perfect lyrics to express your feelings, impress your friends, or fuel your creativity, our collection of famous song quotes is here to help</p>
        <button id='mot'>Enjoy Unlimited Song</button>
      </div>
      
    </div>
    <div id="subdiv"><img src='nw4.png' alt='error'></img>
   
    </div>

    <Lastcont vdata={props.idata}/>
   
   
   </div>
   <Chomeextra/>
   <Foot/>
      </>
  )
}

export default Adminhome