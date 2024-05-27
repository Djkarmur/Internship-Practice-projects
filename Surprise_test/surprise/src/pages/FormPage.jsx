// FormPage.js
import React from 'react';
import Form from '../components/Form';

const FormPage = ({ onSubmit }) => {
  return (
    <div>
      <h2>Form Page</h2>
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default FormPage;
