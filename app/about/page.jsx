import Footer from "../components/Footer";

export default function AboutPage() {
  return (
<main className="min-h-screen px-4 pt-24 pb-12 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">      <section className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-blue-900">About Barco Global Logistics</h1>
        <p className="text-lg text-blue-800">
          Barco Global Logistics (PVT) LTD is a leading provider of global logistics and supply chain solutions, delivering reliability, speed, and transparency for businesses worldwide.
        </p>
      </section>

      <section className="grid max-w-4xl gap-8 mx-auto mb-12 md:grid-cols-3">
        <div className="p-6 bg-white shadow-md bg-opacity-90 rounded-xl">
          <h2 className="mb-2 text-xl font-semibold text-blue-900">Vision</h2>
          <p className="text-blue-800">To be the most trusted logistics partner, enabling seamless global trade and growth for our clients.</p>
        </div>
        <div className="p-6 bg-white shadow-md bg-opacity-90 rounded-xl">
          <h2 className="mb-2 text-xl font-semibold text-blue-900">Mission</h2>
          <p className="text-blue-800">Deliver innovative, efficient, and transparent logistics solutions that empower businesses to thrive in a connected world.</p>
        </div>
        <div className="p-6 bg-white shadow-md bg-opacity-90 rounded-xl">
          <h2 className="mb-2 text-xl font-semibold text-blue-900">Core Values</h2>
          <ul className="text-blue-800 list-disc list-inside">
            <li>Integrity & Trust</li>
            <li>Customer Focus</li>
            <li>Innovation</li>
            <li>Reliability</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="mb-4 text-2xl font-bold text-blue-900">Why Choose Us?</h2>
        <ul className="space-y-2 text-blue-800 list-disc list-inside">
          <li>Global network and expertise</li>
          <li>Transparent and competitive pricing</li>
          <li>Personalized customer service</li>
          <li>Advanced technology and tracking</li>
          <li>Proven track record of reliability</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="mb-4 text-2xl font-bold text-blue-900">Meet the Team</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Example team members, replace with your real data */}
          <div className="flex flex-col items-center p-6 bg-white shadow bg-opacity-90 rounded-xl">
            <img src="/assets/team1.jpg" alt="CEO" className="object-cover w-24 h-24 mb-3 rounded-full" />
            <h3 className="font-semibold text-blue-900">Jane Fernando</h3>
            <p className="text-blue-700">Chief Executive Officer</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white shadow bg-opacity-90 rounded-xl">
            <img src="/assets/team2.jpg" alt="COO" className="object-cover w-24 h-24 mb-3 rounded-full" />
            <h3 className="font-semibold text-blue-900">Ruwan Perera</h3>
            <p className="text-blue-700">Chief Operations Officer</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white shadow bg-opacity-90 rounded-xl">
            <img src="/assets/team3.jpg" alt="Head of Logistics" className="object-cover w-24 h-24 mb-3 rounded-full" />
            <h3 className="font-semibold text-blue-900">Samantha Silva</h3>
            <p className="text-blue-700">Head of Logistics</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}