import { useState } from "react"

const Counter = () => {
  const [value, setValue] = useState(1)

  const Increment = () => {
    setValue(value + 1)
    console.log(value)
  }
  const Decrement = () => {
    setValue(value - 1)
    console.log(value)
  }
  const Reset = () => {
    setValue(0)
    console.log(value)
  }

  return (
    <div className="counter">
      <h1>Counter value:{value} </h1>
      <div className="btn">
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter

