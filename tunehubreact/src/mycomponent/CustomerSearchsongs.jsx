import React, { useState } from 'react';
import Customernavbar from './Customernavbar';
import './Customersearch.css';

const CustomerSearchsongs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Customernavbar />
      <div id="searchmaind">
        <div id="subsearch">
          <div id="searchbar">
          <input
            type="text"
           
            placeholder="Search songs..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSearchsongs;
