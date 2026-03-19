"use client"
import TeamMember from "./TeamMember";
import { motion } from "framer-motion";

const teamMembers = [
  {
    image: "/assets/barco1.jpg",
    name: "Marcus Thorne",
    position: "Founder & CEO",
    company: "Nexa Global",
    email: "marcus@nexaglobal.io"
  },
  {
    image: "/assets/barco2.jpg",
    name: "Elena Vance",
    position: "Head of Global Operations",
    company: "Nexa Global",
    email: "elena@nexaglobal.io"
  },
  {
    image: "/assets/barco2.jpg",
    name: "David Chen",
    position: "Chief Technology Officer",
    company: "Nexa Global",
    email: "david@nexaglobal.io"
  },
];

const heading = "Strategic Leadership";

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
          className="font-sans text-3xl font-black tracking-tighter leading-tight sm:text-4xl md:text-5xl lg:text-8xl text-slate-900"
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
