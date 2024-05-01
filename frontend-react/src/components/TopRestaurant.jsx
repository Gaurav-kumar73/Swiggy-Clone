import React, { useState, useEffect } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6"
import Card from './Card'

const TopRestaurant = () => {
  const [data, setData] = useState([])

  const fetchTopRestaurant = async () => {
    const response = await fetch('http://localhost:5000/top-restaurant-chains')
    const apidata = await response.json()
    setData(apidata)
  }

  useEffect(()=>{
    fetchTopRestaurant()
},[])

  


  return (
    <div className='max-w-[1200px] mx-auto'>

        {/* layer 1 */}
        <div className='flex my-3 items-center justify-between'>
            <div className='text[25px] font-bold'>Top Restaurant Chains in Delhi</div>
            <div className='flex'>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                    <FaArrowLeft />
                </div>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                    <FaArrowRight />
                </div>
            </div>
        </div>
        
        <div className='flex gap-5 overflow-hidden'>
          {
            data.map((d,index)=>{
              return <Card {...d} key={index}/>
            })
          }
        </div>

        <hr className='my-6 border-[1px]' />
    </div>
  )
}

export default TopRestaurant