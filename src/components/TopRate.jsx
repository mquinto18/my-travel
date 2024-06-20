import React, { useState } from 'react'
import { rateList } from './Data'
const TopRate = () => {
    const [index, setIndex] = useState(0);
    const hasNext =  index < rateList.length - 1;
    let rate = rateList[index]
    const handleClick = () => {
        hasNext ? setIndex(index + 1) : setIndex(0);
    }

  return (
    <div className='max-w-[1000px] h-[450px] lg:h-[280px] m-auto mt-20 '>
        <div className='lg:flex justify-between gap-20'>
            <div className=' lg:flex flex-col'>
                <div className='flex justify-center items-center gap-4'>
                    <img className='w-[100px] h-[100px] object-cover rounded-full' src={rate.img} alt="" />
                    <h1 className='font-roboto font-bold text-[20px]'>{rate.name}</h1>
                </div>
                <div >
                    <button onClick={handleClick} className='ml-16 border border-black px-8 py-1 mt-3 rounded-[20px]'><i className="fa-solid fa-arrow-right text-[25px]"></i></button>
                </div>
            </div>
            <div className='w-[100%] text-[19px] px-10 mt-10 lg:w-[60%] lg:text-[25px] lg:mt-0 font-lato'>
                <p>{rate.message}</p>
            </div>
        </div>
    </div>
  )
}

export default TopRate
