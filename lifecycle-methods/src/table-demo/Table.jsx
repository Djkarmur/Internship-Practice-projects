import React from 'react'

const Table = ({data}) => {
  return (
    <div>
      <table>
        <tbody>
        <tr>
        <th>ID</th>
        <th>FirstName</th>
        <th>Lastname</th>
        <th>Email</th>
        </tr>
        
            { data.map((data)=> {
                return(
                    <>
                    <tr>
                    <td>{data.id}</td>
                    <td>{data.first_name}</td>
                    <td>{data.last_name}</td>
                    <td>{data.email}</td>
                    </tr>
                    </>
            
                )
            }
            
            ) }
        
        </tbody>
        
        
      </table>
    </div>
  )
}

export default Table
