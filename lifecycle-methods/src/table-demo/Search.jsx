import React, { useState } from 'react'
import { Users } from './Users'
import Table from './Table';
import useDebounce from './UseDebounce';

const Search = () => {


    const [query,setquery]= useState("");
    
    console.log(query);
    const keys=['first_name','last_name','email'];

    const search =(Users)=>{
   
        return Users.filter((user)=> keys.some(key => user[key].toLowerCase().includes(query.toLowerCase())))
    }
    const debounceValue = useDebounce(search(Users))

  return (
    <div>
      <input type="text" placeholder='search' value={query} onChange={(e)=> setquery(e.target.value) }/>

      <Table data={debounceValue}/>
    </div>
  )
}

export default Search
