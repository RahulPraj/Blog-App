
import React from 'react'

const Card = ({username, age, image, city, prof,}) => {
  return (
    <div className='mr-7 mb-3 bg-white text-black inline-block p-6 text-center rounded'>
        <img className='ml-8 h-32 w-32 rounded-full mb-3' src={image} alt="" />
        <h1 className='text-2xl font-semibold mb-4'>{username}</h1>
        <h4 className='text-blue-400'>{prof}</h4>
        <h2>{city}, {age}</h2>
        <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add friend</button>
    </div>
  )
}

export default Card