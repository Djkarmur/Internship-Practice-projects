import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { addUser,remove } from './Actions';

function Login() {
  const [data, setData] = useState({
    firstname: '',
    email: '',
    id:'',
  });

  const dispatch  = useDispatch()
  
  const usersdetail = useSelector((state)=>state.usersData);
  
  function handlechange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handlesubmit(e) {
    e.preventDefault();
    console.log(e.target);
    
    dispatch(addUser(data))
    setData({
      firstname: '',
      email: '',
      id: '',
    });

  }

   function handleremove(id){
     dispatch(remove(id))
   }

  return (
    <>
    <form onSubmit={handlesubmit}>
    <input type="number" value={data.id} placeholder='enter id' name='id' onChange={handlechange}/>
      <input
        type="text"
        value={data.name}
        name="firstname"
        placeholder="Name"
        onChange={handlechange}
      />
      <input
        type="text"
        value={data.email}
        name="email"
        placeholder="Email"
        onChange={handlechange}
      />

      <button type="submit" >
        submit
      </button>
      </form>
      users are: 
      <ul>
      { usersdetail.map((user)=> {
        return(
        <>
        <li key={user.id}>
        <h2>{user.id}</h2>
        <h2>{user.firstname}</h2>
        <h3>{user.email}</h3>
        
        <button onClick={()=>handleremove(user.id)}>Remove</button>
        </li>
        
        </>
        )
        
      })}
      </ul>
     

    </>
  );
}

export default Login;