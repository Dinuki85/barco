import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen px-4 text-center text-white bg-lightBlue"
      >
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">Welcome to Logistica</h1>
        <p className="max-w-xl text-base md:text-lg">
          Your trusted partner for global logistics and supply chain solutions.
        </p>
      </section>
      <section
        id="about"
        className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen px-4 text-center bg-white text-darkBlue"
      >
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">About Us</h2>
        <p className="max-w-xl text-base md:text-lg">
          We provide reliable, efficient, and secure logistics services worldwide.
        </p>
      </section>
      <section
        id="services"
        className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen px-4 text-center text-white bg-lightBlue"
      >
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Our Services</h2>
        <p className="max-w-xl text-base md:text-lg">
          Freight forwarding, warehousing, customs clearance, and more.
        </p>
      </section>
      <section
        id="contact"
        className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen px-4 text-center bg-white text-darkBlue"
      >
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Contact Us</h2>
        <p className="max-w-xl text-base md:text-lg">
          Reach out for a quote or to learn more about our logistics solutions.
        </p>
      </section>
    </>
  );
}