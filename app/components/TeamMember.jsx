import Image from "next/image";

export default function TeamMemberCard({ image, name, position, company, email }) {
  return (
    <div className="flex flex-col items-center p-6 m-4 bg-white shadow-lg rounded-xl w-72">
      <div className="relative mb-4 w-28 h-28">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover border-4 border-blue-200 rounded-full"
        />
      </div>
      <h2 className="mb-1 text-xl font-bold underline">{name}</h2>
      <p className="font-semibold text-blue-700">{position}</p>
      <p className="mb-2 text-gray-500">{company}</p>
      <a href={`mailto:${email}`} className="text-blue-500 underline break-all">{email}</a>
    </div>
  );
}