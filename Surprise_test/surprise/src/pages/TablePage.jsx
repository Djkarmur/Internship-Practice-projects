// TablePage.js
import React from 'react';
import Table from '../components/Table';

const TablePage = ({ data, onDelete }) => {
  return (
    <div>
      <h2>Table Page</h2>
      <Table data={data} onDelete={onDelete} />
    </div>
  );
};

export default TablePage;
