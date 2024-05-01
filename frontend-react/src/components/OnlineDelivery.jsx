import React, { useState, useEffect } from 'react'
import Card from './Card'

const OnlineDelivery = () => {
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
            <div className='text[25px] font-bold'>Restaurants With Food Delivery in Delhi</div>
        </div>
        <div className='grid grid-cols-4 gap-3'>
            {
             data.map((d,index)=>{
                return <Card {...d} key={index}/>
              })
            }
        </div>
    </div>
  )
}

export default OnlineDelivery