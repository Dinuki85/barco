import Image from "next/image";

export default function TeamMember({ image, name, position, company, email }) {
  return (
    <div className="relative flex flex-col items-center p-6 m-4 overflow-hidden bg-white shadow-lg rounded-xl w-72 group">
      {/* Animated border */}
      <span className="pointer-events-none absolute inset-0 z-10 rounded-xl border-4 border-transparent group-hover:border-transparent before:absolute before:inset-[-4px] before:rounded-[inherit] before:bg-gradient-to-tr before:from-blue-400 before:via-blue-700 before:to-blue-400 before:animate-border-spin before:z-[-1] before:opacity-100 before:content-['']"></span>
      <div className="relative z-20 mb-4 w-28 h-28">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover border-4 border-blue-200 rounded-full"
        />
      </div>
      <h2 className="z-20 mb-1 text-xl font-bold underline">{name}</h2>
      <p className="z-20 font-semibold text-blue-700">{position}</p>
      <p className="z-20 mb-2 text-gray-500">{company}</p>
      <a href={`mailto:${email}`} className="z-20 text-blue-500 underline break-all">{email}</a>
    </div>
  );
}