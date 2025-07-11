import React, { useState } from "react";
import { useMyContext } from "../../Context/MyContext";

function GetQoutePopup({ onClose }) {
  const { GalleryData, setShowPopup } = useMyContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, ""); 
      setFormData((prev) => ({ ...prev, phone: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    setLoading(true);

    const scriptURL = "https://jagsom-sheet.onrender.com/api/popup";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.message === "Contact saved successfully") {
        setStatus("Submitted successfully!");
        setFormData({ name: "", email: "", phone: "", service: "" });
      } else {
        setStatus(result.error || "Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Submission failed. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="GetQoutePopup fixed inset-0  flex items-center justify-center z-50">
      <div className="GetQoutePopup-wrapper relative border-2 shadow-lg shadow-blue-200 p-6 max-w-md w-full bg-white rounded-lg">
        
        <button
          onClick={onClose}
          aria-label="Close popup"
          className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-2xl"
        >
          <i className="fa-solid fa-xmark cursor-pointer" onClick={() => setShowPopup(false)}></i>
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-blue-800 text-center">
          Get a Quote
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full h-10 px-3 rounded border-2 border-blue-800 bg-white text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full h-10 px-3 rounded border-2 border-blue-800 bg-white text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              maxLength={10}
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full h-10 px-3 rounded border-2 border-blue-800 bg-white text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Service
            </label>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full h-10 px-3 rounded border-2 border-blue-800 bg-white text-gray-800"
            >
              <option value="">-- Select a service --</option>
              {GalleryData.map((item, index) => (
                <option key={index} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-gradient-to-t from-[#00154c] via-[#12376e] to-[#23487f] text-white px-6 py-2 rounded hover:opacity-90 transition ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {status && (
              <p className={`text-sm mt-2 ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default GetQoutePopup;
