"use client"
import TeamMember from "./TeamMember";
import { motion } from "framer-motion";

const teamMembers = [
  {
    image: "/assets/barco1.jpg",
    name: "Alice Johnson",
    position: "CEO",
    company: "Business Artica",
    email: "alice@artica.com"
  },
  {
    image: "/assets/barco2.jpg",
    name: "Bob Smith",
    position: "Operations Manager",
    company: "Business Artica",
    email: "bob@artica.com"
  },
  {
    image: "/assets/barco2.jpg",
    name: "Carol Lee",
    position: "Logistics Specialist",
    company: "Business Artica",
    email: "carol@bartica.com"
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
    <section className="px-4 py-16 bg-gray-50 md:px-0 lg:px-0">
      <div className="flex items-center justify-center px-4 mb-12 text-center">
        <motion.h1
          className="font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-8xl text-slate-800"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
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
