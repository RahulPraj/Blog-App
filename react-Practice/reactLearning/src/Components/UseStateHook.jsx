import React, { useState } from 'react'

const UseStateHook = () => {
  let[counter , setCounter] =   useState(0);

  let increaseValue = ()=>{
    setCounter(counter++);
  }
  return (
    <div>
        <h1>Counter App</h1>
        <h2>counter :{counter} </h2>
        <button onClick={increaseValue}>Inc value </button>
    </div>
  )
}

export default UseStateHook
