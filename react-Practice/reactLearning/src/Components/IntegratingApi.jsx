
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const IntegratingApi = () => {

    const [data,setData] = useState([]); //empty array ka data


    const getData =  async ()=>{
        // console.log('hello');
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
        // console.log(response.data); //promise ke form me milega

        // const data = response.data; //array of object
        setData(response.data);
    }

    useEffect(()=>{
        getData()
    },[])
  return (
    <div className='p-10'>
        <div className='p-5 mt-5 bg-gray-950 '>
            {data.map(function(elem,indx){
                return <div key ={indx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
                    <img className='h-40' src={elem.download_url} alt="" />
                    <h1>{elem.author}</h1>
                </div>
            })}
        </div>
    </div>
  )
}

export default IntegratingApi