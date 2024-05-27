import React from 'react'
import Child2 from './Child2'

const Child1 = ({setState}) => {
  return (
    <div>
        <h1>child of parent1</h1>
      <Child2 setState = {setState}/>
    </div>
  )
}

export default Child1
