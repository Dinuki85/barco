"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamMember({ image, name, position, company, email }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.03 }}
      className="relative w-full max-w-xs overflow-hidden shadow-xl cursor-pointer h-96 rounded-xl group"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, 33vw"
      />

      {/* White overlay on hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-black transition-opacity duration-500 bg-white opacity-0 bg-opacity-90 group-hover:opacity-100">
        <h2 className="mb-1 text-2xl font-bold">{name}</h2>
        <p className="mb-1 font-medium text-blue-800">{position}</p>
        <p className="mb-3 text-gray-700">{company}</p>
        <a href={`mailto:${email}`} className="text-blue-600 underline break-all">
          {email}
        </a>
      </div>
    </motion.div>
  );
}
