import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} =useParams();
  return (
    <div className='flex justify-center'>
        <div className='bg-gray-600 text-white text-center p-4 text-3xl w-4/5 '>User:{userId}</div>
    </div>
    
  )
}

export default User