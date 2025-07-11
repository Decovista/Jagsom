import React from "react";
import Navigation from "../Navigation/Navigation";
import "./MobileMenu.css";
import { useMyContext } from "../../Context/MyContext";

function MobileMenu() {
  const { setToggleSubNav, toggleSubNav } = useMyContext();

  return (
    <div className="MobileMenu fixed inset-0 z-50 bg-white p-4 overflow-y-auto shadow-lg">
      {/* Close Icon */}
      <div className="flex justify-end">
        <button
          onClick={() => setToggleSubNav(!toggleSubNav)}
          aria-label="Close menu"
          className="text-3xl text-white hover:text-red-600"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      {/* Navigation */}
      <div className="mt-4">
        <Navigation />
      </div>
    </div>
  );
}

export default MobileMenu;
