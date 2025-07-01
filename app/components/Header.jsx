"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 border-b-2 border-black ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      style={{
        backdropFilter: !scrolled ? "blur(2px)" : "none",
        fontFamily: "Calibri, sans-serif"
      }}
    >
      <div className="flex items-center justify-between h-16 px-4 mx-auto md:h-20 md:px-10 max-w-7xl">
        {/* Logo */}
        <a
          href="#"
          className={`flex items-center h-full text-2xl font-bold transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <div className="flex items-center justify-center w-20 h-20 pl-2 pr-3 rounded-lg md:w-24 md:h-24 bg:black/60">
            <Image
              src="/logo.png"
              alt="Barco Logo"
              width={96}
              height={96}
              className="object-contain"
              priority
            />
          </div>
          
        </a>

        {/* Hamburger Menu Button for mobile */}
        <button
          className={`text-3xl md:hidden transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
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
                  className={`text-lg transition-colors duration-300 ${
                    scrolled
                      ? "text-black hover:text-gray-600"
                      : "text-white hover:text-gray-300"
                  }`}
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
            className="absolute left-0 w-full bg-black shadow-md top-full md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-end p-4">
              <button
                className="text-3xl text-white"
                onClick={() => setIsOpen(false)}
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
                    className="text-xl text-white transition hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
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