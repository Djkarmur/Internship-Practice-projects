import React, { useState } from 'react'
import Parent1 from './Parent1';

const Child2 = ({setState}) => {
    const [count,setCount] = useState(0);

    const handleClick = () =>{
        setCount(count+1);
        console.log(count)
        setState(count+1);
    }
  return (
    <div>
      
      <h1>inner child of Child1</h1>
      <button onClick={()=> handleClick()}>Click child</button>
    </div>
  )
}

export default Child2
