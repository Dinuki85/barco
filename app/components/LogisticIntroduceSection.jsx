"use client";
import { Grandstander } from 'next/font/google';
import { useEffect, useState } from 'react'
import { MdWarehouse, MdOutlineLocalShipping, MdOutlineSupportAgent } from "react-icons/md";
import Counter from './Counter';
import Link from 'next/link';
import { FaShippingFast } from "react-icons/fa";
import { GiCargoCrate } from "react-icons/gi";
import { motion } from "framer-motion";

//import WaterMarkSlider from './WaterMarkSlider';

const heading = "Logistics Capabilities";

const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06
        }
    }
};

const LogisticIntroduceSection = () => {


    return (
        <section className='relative grid w-full min-h-screen grid-cols-2 justfy-center item-s-center bg:light-blue-100 md:items-center sm:items-center'>
            <div className='absolute  grid-cols-2 place-items-start w-full h-full inset-1 bg:light-blue-500 sm:w-full sm:h-full md:w-full md:h-full *:'>

                <motion.h1
                    className='flex flex-row flex-wrap items-left w-full px-[15%] py-10 scroll-mt-20 font-bold text-7xl font-serif'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.7 }}
                >
                    {heading.split("").map((char, idx) => (
                        <motion.span
                            key={idx}
                            variants={letterVariants}
                            className={char === " " ? "mx-2" : ""}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>
                <hr className='border-4 border-light-blue-300' />

                <h2 className='flex flex-col items-baseline font-serif py-3 px-7 text-2xl font-thin sm:text-1xl md:*'>
                    Delivering Posibilities, On Time
                </h2>


                <ul className="grid max-w-4xl grid-cols-3 gap-6 py-3 mx-auto font-serif text-lg list-none ">
                    <li className="flex items-center gap-2">
                        <MdWarehouse className="text-xl text-blue-700" />
                        Warehousing and Distribution
                    </li>
                    <li className="flex items-center gap-2">
                        <FaShippingFast className="text-xl text-blue-700" />
                        Freight Forwarding
                    </li>
                    <li className="flex items-center gap-2">
                        <GiCargoCrate className="text-xl text-blue-700" />
                        Supply Chain Management
                    </li>
                    <li className="flex items-center gap-2">
                        <MdOutlineLocalShipping className="text-xl text-blue-700" />
                        E-commerce Logistics
                    </li>
                    <li className="flex items-center gap-2">
                        <MdOutlineSupportAgent className="text-xl text-blue-700" />
                        Last-Mile Delivery
                    </li>
                    <li className="flex items-center gap-2">
                        <MdWarehouse className="text-xl text-blue-700" />
                        Inventory Management
                    </li>
                    <li className="flex items-center gap-2">
                        <FaShippingFast className="text-xl text-blue-700" />
                        Customs Clearance
                    </li>
                    <li className="flex items-center gap-2">
                        <GiCargoCrate className="text-xl text-blue-700" />
                        Packaging Solutions
                    </li>
                    <li className="flex items-center gap-2">
                        <MdOutlineLocalShipping className="text-xl text-blue-700" />
                        Express Delivery
                    </li>
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
