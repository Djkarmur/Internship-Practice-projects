import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage';

const LocalStorageHook = () => {
    const [value,setvalue] = useLocalStorage('name','')
    
  function handlesubmit(e){
    e.preventDefault();
   console.log('hello')

  }

  return (
    <div>
      <input type="text" placeholder='enter text'  value={value} onChange={(e)=> setvalue(e.target.value)} />   
      <button type='submit' onSubmit={handlesubmit}>submit</button>

    </div>
  )
}

export default LocalStorageHook
