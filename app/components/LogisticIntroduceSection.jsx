"use client";
import { Grandstander } from 'next/font/google';
import { useEffect, useState } from 'react'
import { CgAdd } from "react-icons/cg";
import Counter from './Counter';
import Link from 'next/link';
import WaterMarkSlider from './WaterMarkSlider';

const LogisticIntroduceSection = () => {


    return (
        <section className='relative grid w-full min-h-screen grid-cols-2 justfy-center item-s-center bg:light-blue-100 md:items-center sm:items-center'>
            <div className='absolute  grid-cols-2 place-items-start w-full h-full inset-1 bg:light-blue-500 sm:w-full sm:h-full md:w-full md:h-full *:'>

                <h1 className='flex flex-col items-center w-full px-[15%] py-10 scroll-mt-20 font-bold text-4xl  font-serif' >

                    Logistics Capabilities
                </h1><hr className='border-4 border-light-blue-300' />

                <h2 className='flex flex-col items-baseline font-serif py-3 px-2 text-2xl font-thin sm:text-1xl md:*'> Delivering Posibilities, On Time</h2>
                
                <p className='flex flex-col items-center px-5 py-4 font-serif text-lg text-justify sm:text-base md:text-lg text-mono'>
                    At Barco Logistics, we specialize in
                    providing comprehensive logistics
                    solutions tailored to meet the
                    unique needs of our clients.
                    Our expertise spans across
                    various sectors, ensuring that
                    we deliver efficient, reliable,
                    and cost-effective services.
                    Whether you require warehousing,
                    distribution, or specialized
                    logistics support, we have the
                    capabilities to handle it all.
                </p>
                
                <ul className='grid grid-cols-3 gap-4 px-3 py-3 font-serif text-lg list-none sm:text-base md:text-lg text-mono overflow-clip'>
                    <li className='flex px-2 py-1 flex-center'>  <CgAdd />    Warehousing and Distribution</li>
                    <li className='flex px-2 py-1 flex-center'>  <CgAdd /> Freight Forwarding</li>
                    <li className='flex px-2 py-1 flex-center'> <CgAdd /> Supply Chain Management</li>
                    <li className='flex px-2 py-1 flex-center'> <CgAdd /> E commerce Logistics</li>
                    <li className='flex px-2 py-1 flex-center'> <CgAdd />  Last-Mile Delivery</li>
                    <li className='flex px-2 py-1 flex-center'>  <CgAdd />    Warehousing and Distribution</li>
                    <li className='flex px-2 py-1 flex-center'>  <CgAdd /> Freight Forwarding</li>
                    <li className='flex px-2 py-1 flex-center'> <CgAdd /> Supply Chain Management</li>
                    <li className='flex px-2 py-1 flex-center'> <CgAdd /> E commerce Logistics</li>
                    <li className='flex px-2 py-1 flex-center'> <CgAdd />  Last-Mile Delivery</li>
                </ul>

                <button className='block px-4 py-2 mx-auto text-center text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-double focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75'>
                    <Link href="/services">
                        Explore Our services
                    </Link>
                </button>


            </div>

            {/*<div className="flex w-full px-10 py-10 gid-rows-2 h -screen jstify-center i2tems-center inset- flex-center bg-light-blue-100 sm:w-full bottom-9">
        <button className='border rounborder-spacing-1 border-darkBlue '><Counter targetNumber={1000} /></button>  
        </div>
            */}
        </section>


    )
}

export default LogisticIntroduceSection
