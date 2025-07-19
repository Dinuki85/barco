"use client";
import { Grandstander } from 'next/font/google';
import { useEffect, useState } from 'react'
import { MdWarehouse, MdOutlineLocalShipping, MdOutlineSupportAgent } from "react-icons/md";
import Counter from './Counter';
import Link from 'next/link';
import { FaShippingFast } from "react-icons/fa";
import { GiCargoCrate } from "react-icons/gi";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";


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
const ulVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const liVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
};

const h2ContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06
        }
    }
};
const h2LetterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

const LogisticIntroduceSection = () => {


    return (
        <section className='relative grid w-full min-h-screen grid-cols-2 justfy-center item-s-center bg:light-blue-100 md:items-center sm:items-center'>
            <div className='absolute  grid-cols-2 place-items-start w-full h-full inset-1 bg:light-blue-500 sm:w-full sm:h-full md:w-full md:h-full *:'>
    <div className="relative w-full px-[15%] pt-10 pb-0">
               <motion.h1
    className='w-full font-serif font-bold text-7xl'
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
                {/* All Services link at bottom right */}
                <div className="flex justify-end mt-8">
                    <Link href="/services" className="flex flex-col items-end cursor-pointer select-none group">
                        <span className="flex items-center text-xl font-bold transition-colors text-slate-800 group-hover:text-blue-700">
                            All Services
                            <HiArrowUpRight className="ml-2 text-2xl" />
                        </span>
                        <span className="block w-full h-px mt-1 transition-colors bg-slate-400 group-hover:bg-blue-700"></span>
                    </Link>
                </div>
            </div>
                <hr className='border-8 border-light-blue-300' />

                <motion.h2
    className='flex flex-wrap  items-center justify-center font-serif py-3 px-7 text-2xl font-thin sm:text-1xl md:*'
    variants={h2ContainerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.5 }}
>
    {"Delivering Posibilities, On Time".split("").map((word, idx) => (
        <motion.span
            key={idx}
            variants={h2LetterVariants}
            className="mx-2" 
        >
            {word}
        </motion.span>
    ))}
</motion.h2>


                <motion.ul
                    className="grid max-w-4xl grid-cols-3 gap-6 py-3 mx-auto font-serif text-lg list-none "
                    variants={ulVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <motion.li variants={liVariants} className="flex items-center gap-2">
                        <MdWarehouse className="text-xl text-blue-700 " />
                        Warehousing and Distribution
                    </motion.li>
                    <motion.li variants={liVariants} className="flex items-center gap-2">
                        <FaShippingFast className="text-xl text-blue-700" />
                        Freight Forwarding
                    </motion.li>
                    <motion.li variants={liVariants} className="flex items-center gap-2">
                        <GiCargoCrate className="text-xl text-blue-700" />
                        Supply Chain Management
                    </motion.li>
                    <motion.li variants={liVariants} className="flex items-center gap-2">
                        <MdOutlineLocalShipping className="text-xl text-blue-700" />
                        E-commerce Logistics
                    </motion.li>
                    <motion.li variants={liVariants} className="flex items-center gap-2">
                        <MdOutlineSupportAgent className="text-xl text-blue-700" />
                        Last-Mile Delivery
                    </motion.li>
                    <motion.li variants={liVariants} className="flex items-center gap-2">
                        <MdWarehouse className="text-xl text-blue-700" />
                        Inventory Management
                    </motion.li>
                    <motion.li variants={liVariants} className="flex items-center gap-2">
                        <FaShippingFast className="text-xl text-blue-700" />
                        Customs Clearance
                    </motion.li>
                    <motion.li variants={liVariants} className="flex items-center gap-2">
                        <GiCargoCrate className="text-xl text-blue-700" />
                        Packaging Solutions
                    </motion.li>
                    <motion.li variants={liVariants} className="flex items-center gap-2">
                        <MdOutlineLocalShipping className="text-xl text-blue-700" />
                        Express Delivery
                    </motion.li>
                </motion.ul>

                


            </div>

            {/*<div className="flex w-full px-10 py-10 gid-rows-2 h -screen jstify-center i2tems-center inset- flex-center bg-light-blue-100 sm:w-full bottom-9">
        <button className='border rounborder-spacing-1 border-darkBlue '><Counter targetNumber={1000} /></button>  
        </div>
            */}
        </section>


    )
}

export default LogisticIntroduceSection
