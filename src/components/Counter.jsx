import React, { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(1)

    const val = ()=>{
        setValue(value+1)
    }
  return (
    <div>
        <h1>Counter :{value}</h1>
      <button onClick={Counter}>Increment</button>
    </div>
  )
}

export default Counter
