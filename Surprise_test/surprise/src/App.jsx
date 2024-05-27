import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FormPage from './pages/FormPage';
import TablePage from './pages/TablePage';
import './App.css';
import Parent1 from './stateChange/Parent1';

const App = () => {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    setFormData([...formData, data]);
    localStorage.setItem('formData', JSON.stringify([...formData, data]));
  };

  const handleDeleteAll = () => {
    setFormData([]);
    localStorage.removeItem('formData');
  };

  let a=23

  
  console.log('app');
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/form" element={<FormPage onSubmit={handleFormSubmit} />} />
          <Route path="/table" element={<TablePage data={formData} onDelete={handleDeleteAll} />} />
        </Routes>
        <Parent1/>
      </>
    </Router>
  );
};

export default App;
