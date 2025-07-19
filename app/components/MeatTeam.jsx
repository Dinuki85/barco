"use client"
import TeamMember from "./TeamMember";
import { motion } from "framer-motion";

const teamMembers = [
  {
    image: "/assets/barco1.jpg",
    name: "Alice Johnson",
    position: "CEO",
    company: "Barco Logistics",
    email: "alice@barco.com"
  },
  {
    image: "/assets/barco2.jpg",
    name: "Bob Smith",
    position: "Operations Manager",
    company: "Barco Logistics",
    email: "bob@barco.com"
  },
  {
    image: "/assets/barco2.jpg",
    name: "Carol Lee",
    position: "Logistics Specialist",
    company: "Barco Logistics",
    email: "carol@barco.com"
  },
  // Add more members as needed
];

const heading = "Meet the team";

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export default function MeatTeam() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="flex items-center justify-center px-4 mb-12 text-center">
        <motion.h1
          className="font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl text-slate-800"
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
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {teamMembers.map((member, idx) => (
          <TeamMember key={idx} {...member} />
        ))}
      </div>
    </section>
  );
}
