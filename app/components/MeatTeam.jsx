import TeamMember from "./TeamMember";

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
    image: "/assets/barco3.jpg",
    name: "Carol Lee",
    position: "Logistics Specialist",
    company: "Barco Logistics",
    email: "carol@barco.com"
  },
  // Add more members as needed
];

export default function MeatTeam() {
  return (
    <section className="py-12 bg-gray-50">
      <h1 className="mb-8 text-3xl font-bold text-center">Meet the Team</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {teamMembers.map((member, idx) => (
          <TeamMember key={idx} {...member} />
        ))}
      </div>
    </section>
  );
}