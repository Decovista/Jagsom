import React from "react";
import { Link } from "react-router-dom";
import resourse from "../../../public/assets/resourse";

function Footer() {
  return (
    <footer className="Footer bg-[#21467d] text-white py-8 px-4">
      <div className="footer-wrapper max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <ul className="fc1 space-y-4">
          <li className="logo-container">
            <img
              src={resourse.transparentSiteLogo}
              alt="site-logo"
              className="w-32"
              loading="lazy"
            />
          </li>
          <li className="flex items-start gap-2">
            <i className="fa-solid fa-location-dot mt-1"></i>
            <p>
              Registered Address: Shop-i-413, Saurav Vihar, Hari Nagar Ext,
              Badarpur (South Delhi), New Delhi - 110044
            </p>
          </li>
          <li className="flex items-start gap-2">
            <i className="fa-solid fa-location-dot mt-1"></i>
            <p>Corporate Address: Vipul Business Park.</p>
          </li>
        </ul>

        <ul className="fc2 flex gap-12">
          <li>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/info/products-services">Products & Services</Link>
              </li>
              <li>
                <Link to="/info/specialized-services">
                  Specialized Services
                </Link>
              </li>
              <li>
                <Link to="/info/why-choose-us">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/info/projects">Projects</Link>
              </li>
            </ul>
          </li>

          <li>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/info/leadership">About Us</Link>
              </li>
              <li>
                <Link to="/info/culture">Culture</Link>
              </li>
              <li>
                <Link to="/info/material">Material</Link>
              </li>
              <li>
                <Link to="/info/contact">Contact</Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className="flex flex-col items-start gap-2">
          <h4 className="font-semibold">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-400">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-500">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
