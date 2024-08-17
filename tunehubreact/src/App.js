import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './mycomponent/Index';
import Mapregister from './mycomponent/Mapregister';
import Maplogin from './mycomponent/Maplogin';
import Customerhome from './mycomponent/Customerhome';
import Payment from './mycomponent/Payment';
import Adminhome from './mycomponent/Adminhome';
import Aaddsongs from './mycomponent/Aaddsongs';
import Aviewsongs from './mycomponent/Aviewsongs';
import Customerdetails from './mycomponent/Customerdetails';
import Customerviewsongs from './mycomponent/Customerviewsongs';
import Customercomplaint from './mycomponent/Customercomplaint';
import Admincomplaint from './mycomponent/Admincomplaint';
import Password from './mycomponent/Password';


function App() {
  const [email, Setemail] = useState('');

  useEffect(() => {
    // Retrieve email from localStorage if available
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      Setemail(storedEmail);
    }
  }, []);

  const handleEmailChange = (newEmail) => {
    Setemail(newEmail);
    localStorage.setItem('email', newEmail);
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<Index Setinputemail={handleEmailChange} />} />
        <Route path='/register' element={<Mapregister />} />
        <Route path='/login' element={<Maplogin />} />
        <Route path='/ds' element={<Customerhome idata={email} />} />
        <Route path='/py' element={<Payment />} />
        <Route path='/ah' element={<Adminhome idata={email}/>} />
        <Route path='/redirectToPage' element={<Payment />} />
        <Route path='/ass' element={<Aaddsongs />} />
        <Route path='/vss' element={<Aviewsongs />} />
        <Route path='/vcd' element={<Customerdetails />} />
        <Route path='/cps' element={<Customercomplaint />} />
        <Route path='/fcc' element={<Admincomplaint />} />
        <Route path='/cvs' element={<Customerviewsongs />} />
        <Route path='/Password' element={<Password/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
