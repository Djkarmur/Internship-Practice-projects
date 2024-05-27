import React, { useState,useEffect } from "react";

const Table = ({  onDelete }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data,setData] = useState(JSON.parse(localStorage.getItem('formData')))
  const [sortBy, setSortBy] = useState(null);

  
  
  const handleDeleteIndex = (id) => {
    
    const updatedFormData = data.filter((item, idx) => idx !== id);
    setData(updatedFormData)
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
  }
  
  const filteredData = data.filter((item) =>
    item.firstName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedData = sortBy
    ? filteredData.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
      })
    : filteredData;

  return (
    <>
      <input
        type="text"
        placeholder="Search by First Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort by</option>
        <option value="firstName">First Name</option>
        <option value="lastName">Last Name</option>
        <option value="phoneNo">Phone No.</option>
      </select>
      <button onClick={onDelete}>Delete All</button>
      <table style={{ border: "1px solid black", padding: "3px" }}>
        <thead style={{ border: "1px solid black", padding: "3px" }}>
          <tr style={{ border: "1px solid black", padding: "3px" }}>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone No.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody style={{ border: "1px solid black", padding: "3px" }}>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.phoneNo}</td>
              <td>
                
                <button onClick={() => handleDeleteIndex(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
