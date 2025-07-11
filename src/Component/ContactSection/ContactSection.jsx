import React, { useState } from "react";
import "./ContactSection.css";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Allow only numbers
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

    const scriptURL = "https://jagsom-sheet.onrender.com/api/c";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.message === "Contact saved successfully") {
        setStatus("Submitted successfully!");
        setFormData({ name: "", phone: "", email: "" });
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
    <div className="ContactSection bg-blue-100 py-10">
      <div className="ContactSection-wrapper max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 px-4">
        <form
          className="c-popup bg-white shadow-md rounded p-6 w-full lg:w-1/2"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-[#173c73]">Contact Us</h2>
          <div className="cpop-up-wrapper flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-[#173c73] rounded px-4 py-2 text-blue-800"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-[#173c73] rounded px-4 py-2 text-blue-800"
              pattern="[0-9]{10}"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-[#173c73] rounded px-4 py-2 text-blue-800"
              required
            />

            <button
              type="submit"
              className={`bg-[#173c73] hover:bg-cyan-700 text-white font-semibold py-2 rounded ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {status && (
              <p
                className={`text-sm mt-2 ${
                  status.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>

        <div className="map-container w-full lg:w-1/2">
          <iframe
            title="Gurgaon Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7755551779515!2d77.03394127531891!3d28.42295457577496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d187579660c63%3A0x674a84fc35ac4661!2sVIPUL%20BUSINESS%20PARK%2C%20Central%20Park%20II%2C%20Sector%2048%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1720500381779!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
