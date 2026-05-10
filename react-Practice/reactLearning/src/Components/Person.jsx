
import React from 'react'

const Person = ({userName, age , favColor}) => {
  return (
    <div>
        <h1>Person details</h1>
        <h3>userName : {userName}</h3>
        <h4>age : {age}</h4>
        <h4>fav color : {favColor}</h4>
    </div>
  )
}

export default Person