import React from 'react'

const Offers = () => {

    const myShadow = {
        WebkitBoxShadow: '-0.5px 4px 10.5px -6px #000000',
        MozBoxShadow: '-0.5px 4px 10.5px -6px #000000',
        boxShadow: '-0.5px 4px 10.5px -6px #000000'
    }
  return (
    <div className='max-w-[1000px] m-auto lg:flex object-cover px-5 justify-between items-center mt-20 gap-10'>
        <div>
            <h1 className='opacity-60 font-sanchez text-2xl'>How it works</h1>
            <h1 className='font-sanchez text-5xl'>Travel Packages</h1>
            <div data-aos="fade-right" className='flex justify-center items-center gap-3 mt-10'>
                <div className=''>
                    <i className="fa-solid fa-ticket bg-[#626460] px-[10px] py-[5px] text-2xl rounded-[10px]" style={{color: '#ffffff'}}></i>
                </div>
                <div className='w-[450px]'>
                    <h1 className='font-poppins text-black font-bold'>Flight Booking Ticket</h1>
                    <h1 className='font-lato text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sed</h1>
                </div>
            </div>
            <div data-aos="fade-right" className='flex justify-center items-center gap-3 mt-10'>
                <div className=''>
                    <i className="fa-solid fa-ticket bg-[#626460] px-[10px] py-[5px] text-2xl rounded-[10px]" style={{color: '#ffffff'}}></i>
                </div>
                <div className='w-[450px]'>
                    <h1 className='font-poppins text-black font-bold'>Flight Booking Ticket</h1>
                    <h1 className='font-lato text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sed</h1>
                </div>
            </div>
            <div data-aos="fade-right" className='flex justify-center items-center gap-3 mt-10'>
                <div className=''>
                    <i className="fa-solid fa-ticket bg-[#626460] px-[10px] py-[5px] text-2xl rounded-[10px]" style={{color: '#ffffff'}}></i>
                </div>
                <div className='w-[450px]'>
                    <h1 className='font-poppins text-black font-bold'>Flight Booking Ticket</h1>
                    <h1 className='font-lato text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sed</h1>
                </div>
            </div>
            <div data-aos="fade-right" className='flex justify-center items-center gap-3 mt-10'>
                <div className=''>
                    <i className="fa-solid fa-ticket bg-[#626460] px-[10px] py-[5px] text-2xl rounded-[10px]" style={{color: '#ffffff'}}></i>
                </div>
                <div className='w-[450px]'>
                    <h1 className='font-poppins text-black font-bold'>Flight Booking Ticket</h1>
                    <h1 className='font-lato text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sed</h1>
                </div>
            </div>
        </div>
        <div className='relative  mt-10 sm:mt-0'>
            <img 
            style={myShadow}
            className='w-full h-[550px] rounded-[40px]' src="https://images.unsplash.com/photo-1500762880816-90413abf38df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
            <div className='absolute top-0 text-white m-8 font-lato'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                <button className='bg-white text-black px-5 py-2 text-[12px] rounded-full font-poppins mt-4'>Visit Now</button>
            </div>
        </div>
    </div>
  )
}

export default Offers
