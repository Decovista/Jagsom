import React, { useRef } from "react";
import { Link } from "react-router-dom";
import resourse from "../../../public/assets/resourse";
import "./HeroSection.css";

function HeroSection() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="HeroSection relative overflow-hidden">
      {/* Overlay */}
      <div className="header-vid-overlay absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Text Content */}
      <div className="header-vid-text z-20 absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl">
          "Power Your Home or Business with Clean, Reliable Solar Energy"
        </h2>
        <p className="max-w-2xl text-lg mb-6">
          “Save money and reduce your carbon footprint with professional solar
          panel installation tailored to your needs. We handle everything — from
          design to setup.”
        </p>
        <Link to="/about">
          <button className="getQoute bg-white text-[#173c73] font-semibold px-6 py-2 rounded shadow hover:bg-blue-100 transition">
            Know More
          </button>
        </Link>
      </div>

      <video
        ref={videoRef}
        src={resourse.HeroVideo}
        className="w-full h-[100vh] object-cover z-0 pointer-events-auto"
        muted
        playsInline
        onMouseEnter={handlePlay}
        onMouseLeave={handlePause}
      />
    </div>
  );
}

export default HeroSection;
