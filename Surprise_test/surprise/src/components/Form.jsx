// Form.js
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName, phoneNo });
    setFirstName('');
    setLastName('');
    setPhoneNo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="text" placeholder="Phone No." value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
