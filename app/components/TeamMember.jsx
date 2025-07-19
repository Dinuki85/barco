"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamMember({ image, name, position, company, email }) {
  return (
    <motion.div
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: 40 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.3 }}
  whileHover={{ scale: 1.07 }} // zoom effect on hover
  className="flex flex-col items-center w-full max-w-xs p-6 shadow-lg cursor-pointer bg-gradient-to-br from-blue-800/70 to-blue-900/80 backdrop-blur-md rounded-xl"
>
      {/* Image Section */}
      <div className="relative w-48 h-48 mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain drop-shadow-xl"
          sizes="192px"
        />
      </div>

      {/* Text Content */}
      <h2 className="mb-1 text-2xl font-bold text-center text-white">{name}</h2>
      <p className="mb-1 font-medium text-center text-blue-200">{position}</p>
      <p className="mb-3 text-center text-gray-300">{company}</p>
      <a href={`mailto:${email}`} className="text-center text-blue-400 underline break-all">
        {email}
      </a>
    </motion.div>
  );
}
