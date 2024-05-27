import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul style={{listStyleType:'none',display:'flex',justifyContent:'space-between'}}>
        <li style={{border:'1px solid blue',padding:'5px',borderRadius:'10px'}}><Link to="/form">Form</Link></li>
        <li style={{border:'1px solid blue',padding:'5px',borderRadius:'10px'}}><Link to="/table">Table</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;