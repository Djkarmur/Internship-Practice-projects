import React, { useState } from 'react'
import Child1 from './Child1'

const Parent1 = () => {
   const [cnt,setCnt] = useState()
    const setState = (cnt) =>{
        setCnt(cnt)
    }

  return (
    <div>
       
        <h1>parent component</h1>
        <h3>{cnt}</h3>
        {/* <button onClick={()=> setState(count+1)}>Click</button> */}
      <Child1 setState = {setState}/>
    </div>
  )
}

export default Parent1
