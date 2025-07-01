"use client";
import { useState } from "react";
import { motion, AnimatePresence, px } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; 
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const menuVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: "-100%", transition: { duration: 0.3 } },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-16 bg-white shadow-md dark:bg-darkBlue md:h-20">
      <div className="flex items-center justify-between h-full px-6 py-2 mx-auto md:py-4 max-w-7xl md:px-10">
        {/* Logo with larger image but fixed header height */}
        <a href="#" className="flex items-center h-full text-2xl font-bold text-lightBlue dark:text-white">
          <div className="relative h-full w-[80px] md:w-[100px]">
            <Image
              src={"/logo.png"}
              alt="Barco Logo"
              width={64}
              height={64}
              className="object-contain w-full h-full"
              priority={true}
              
            />
          </div>
            
        </a>

        {/* Hamburger Menu Button for mobile */}
        <button
          className="text-3xl text-darkBlue md:hidden dark:text-lightBlue"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <FiMenu />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-lg text-darkBlue hover:text-lightBlue dark:text-lightBlue dark:hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu - Slide Down */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="absolute left-0 w-full bg-white shadow-md top-full dark:bg-darkBlue md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-end p-4">
              <button
                className="text-3xl text-darkBlue dark:text-lightBlue"
                onClick={closeMenu}
                aria-label="Close Menu"
              >
                <FiX />
              </button>
            </div>
            <ul className="flex flex-col items-center gap-6 pb-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-xl text-darkBlue hover:text-lightBlue dark:text-lightBlue dark:hover:text-white"
                    onClick={closeMenu} // close menu when link clicked
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
