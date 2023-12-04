import React  from 'react';
import { useState,useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData()
  // const [data,setData] = useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Vivek-Pandey81307')
  //   .then(res=>res.json())
  //   .then(data=>{console.log(data);setData(data)})
  // },[])
  return (
    <div className='bg-gray-700 flex items-center justify-center text-center text-black text-3xl p-4'>
      <img  src={data.avatar_url} alt="Git picture" width={300}></img>
      <h1>Github : {data.followers}</h1>
    </div>
  )
}

export default Github;
export const githubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/udaykiran1612')
  return response.json()
}