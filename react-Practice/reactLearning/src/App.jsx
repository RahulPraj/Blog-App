import React, { useContext } from 'react'
import Person from './Components/Person'
import UseStateHook from './Components/UseStateHook'
import FormHandle from './Components/FormHandle'
import Card from './Components/Card'
import IntegratingApi from './Components/IntegratingApi'
import {DataContext} from './context/UserContext';
const App = () => {

  // const users = [
  //   {
  //     "username": "john_doe",
  //     "image": "https://example.com/images/john.jpg",
  //     "age": 28,
  //     "city": "New York",
  //     "profession": "Software Engineer"
  //   },
  //   {
  //     "username": "jane_smith",
  //     "image": "https://example.com/images/jane.jpg",
  //     "age": 32,
  //     "city": "Los Angeles",
  //     "profession": "Graphic Designer"
  //   },
  //   {
  //     "username": "sam_wilson",
  //     "image": "https://example.com/images/sam.jpg",
  //     "age": 25,
  //     "city": "Chicago",
  //     "profession": "Data Analyst"
  //   },
  //   {
  //     "username": "emma_brown",
  //     "image": "https://example.com/images/emma.jpg",
  //     "age": 29,
  //     "city": "Houston",
  //     "profession": "Marketing Specialist"
  //   },
  //   {
  //     "username": "mike_davis",
  //     "image": "https://example.com/images/mike.jpg",
  //     "age": 35,
  //     "city": "San Francisco",
  //     "profession": "Product Manager"
  //   }
  // ]

  const data  = useContext(DataContext);
  console.log(data);
  
  return (
    <div>
      <Person userName = "rahul" age = "23" favColor = "white"/>
      {/* <UseStateHook/> */}
      {/* <FormHandle/> */}
      {/* <div className='p-10'>
        {users.map(function(elem, indx){
          return <Card key = {indx} username={elem.username} image = {elem.image} age={elem.age} city={elem.city} prof = {elem.profession}/>
        })}
      </div> */}
      {/* <IntegratingApi/> */}
    </div>
  )
}

export default App