"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow">
      <nav className="container flex items-center justify-between px-4 py-4 mx-auto md:px-6">
        <div className="flex items-center gap-2 text-2xl font-bold text-blue-900">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Barco Logo" width={40} height={40} />
            <span>Barco Logistics</span>
          </Link>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden gap-6 font-medium text-gray-700 md:flex">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="flex flex-col items-center justify-center md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-blue-900 mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-blue-900 mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-blue-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute left-0 z-50 flex flex-col items-center w-full gap-4 py-4 bg-white shadow-md top-16 md:hidden">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="#about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}