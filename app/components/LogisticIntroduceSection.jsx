"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grandstander } from 'next/font/google';
import React from 'react'
import { CgAdd } from "react-icons/cg";

const LogisticIntroduceSection = () => {
    return (
        <section className='relative flex items-center justify-center w-full min-h-screen bg:light-blue-100 md:items-center sm:items-center'>
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
                <ul className='px-3 py-3 font-serif text-lg sm:text-base md:text-lg text-mono'>
                        <li > Warehousing and Distribution</li>
                    <CgAdd className='absolute grid gap-x-8 gap-y-2'/>   <li> Freight Forwarding</li>
                    <CgAdd className='absolute grid gap-x-8 gap-y-2'/>    <li>Supply Chain Management</li>
                    <CgAdd className='absolute grid gap-x-8 gap-y-2'/>   <li>E commerce Logistics</li>
                    <CgAdd className='absolute grid gap-x-8 gap-y-2'/>  <li> Last-Mile Delivery</li>
                   
                </ul>



            </div>
        </section>

    )
}

export default LogisticIntroduceSection
