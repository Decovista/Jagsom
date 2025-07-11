import React from "react";
import "./AboutPage.css"; 
import resourse from "../../../public/assets/resourse";
import { useMyContext } from "../../Context/MyContext";
import GetQoutePopup from "../../Component/GetQoutePopup/GetQoutePopup";

function AboutPage() {
    const {teamData, setShowPopup, showPopup}  = useMyContext()
  return (
    <div className="AboutPage bg-white text-gray-800 mt-20 ">
        {
            showPopup ?<GetQoutePopup/>  : ''
        }
      <section className="bg-gradient-to-r from-[#00154c] to-[#23487f] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Jagsom Electricals</h1>
          <p className="text-lg md:text-xl opacity-90">
            Powering Innovation. Delivering Excellence.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#173c73] mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Jagsom Electricals is a trusted name in the design, development, and installation of high-quality electrical panels and systems. With a commitment to quality and innovation, we serve industries, infrastructure, and commercial clients across India.
              <br /><br />
              Backed by a team of seasoned engineers, certified technicians, and industry expertise — we ensure every solution is safe, efficient, and built for the future.
            </p>
          </div>
          <img
            src={resourse.jagsomteam}
            alt="Our team"
            className="rounded-lg shadow-lg w-full object-cover h-80"
          />
        </div>
      </section>
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#23487f] mb-2">Our Mission</h3>
            <p>
              To provide reliable, efficient, and sustainable electrical solutions that empower businesses and communities to grow.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#23487f] mb-2">Our Vision</h3>
            <p>
              To be the leading electrical engineering partner known for innovation, quality, and customer satisfaction across India.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#23487f] mb-2">Core Values</h3>
            <ul className="list-disc list-inside text-left mt-2 text-sm leading-relaxed">
              <li>Integrity</li>
              <li>Quality & Safety</li>
              <li>Customer First</li>
              <li>Innovation</li>
              <li>Commitment</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#173c73] text-center mb-10">Leadership Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {teamData.map((member, idx) => (
            <div key={idx} className="bg-white shadow-md p-6 rounded-lg">
              <img
                src={member.profile} 
                alt={member.name}
                className="mx-auto mb-4 w-24 h-24  rounded-full border-4 border-blue-800 object-cover"
              />
              <h4 className="text-lg font-semibold text-[#23487f]">{member.name}</h4>
              <p className="text-sm">{member.role}</p>
              <p className="text-sm text-gray-600 mt-1">📞 {member.phone}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#12376e] to-[#23487f] text-white py-12">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">Looking for a reliable electrical partner?</h3>
          <p className="mb-4">Let us help you power your vision. Contact us today.</p>
          <button
            className="inline-block bg-white text-[#12376e] font-semibold py-2 px-6 rounded hover:bg-blue-100 transition"
            onClick={() => setShowPopup(true)}
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
