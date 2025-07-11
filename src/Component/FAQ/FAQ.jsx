import React, { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const FAQData = [
    {
      Question: "What services does Jagsom Electrical Pvt Ltd offer?",
      Answer:
        "We specialize in the design, fabrication, and commissioning of high-quality electrical panels for industrial, commercial, and infrastructure applications. Additionally, we undertake HT (High Tension) overhead line installation with all required materials.",
    },
    {
      Question: "Are your electrical panels compliant with safety standards?",
      Answer:
        "Yes, all our electrical panels are engineered for safety and built according to national and international standards. We prioritize performance, durability, and compliance in every product we manufacture.",
    },
    {
      Question: "Do you provide solar-related services?",
      Answer:
        "Yes. Under our Top Solar Services, we offer complete solar energy solutions including consultation, system design, installation, and after-sales support. Our goal is to help clients achieve energy independence with sustainable solutions.",
    },
    {
      Question: "What makes your company different from others?",
      Answer:
        "Jagsom Electrical Pvt Ltd is driven by innovation, safety, and performance. With years of experience, a skilled workforce, and a commitment to quality, we deliver reliable electrical and solar solutions tailored to your needs.",
    },
    {
      Question: "Can you handle large infrastructure and commercial projects?",
      Answer:
        "Absolutely. We have successfully executed a wide range of projects in industrial zones, commercial hubs, and large-scale infrastructure developments. Our team is well-equipped to handle both standard and custom requirements.",
    },
    {
      Question:
        "Do you supply the materials for HT overhead line installations?",
      Answer:
        "Yes, we not only undertake the installation but also supply all necessary high-quality materials, ensuring a seamless and efficient project execution from start to finish.",
    },
    {
      Question: "Where can I view examples of your past work?",
      Answer:
        "You can explore our portfolio in the Gallery section of our website. It showcases images (like GallerImg0 to GallerImg5) of completed projects across various sectors.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="FAQ-main">
        <h2 className="FAQ-title">FAQ</h2>
      <ul className="FAQ-wrapper">
        {FAQData.map((item, index) => (
          <li key={index} className="FAQ-item">
            <p onClick={() => toggleFAQ(index)} className="FAQ-question">
              {item.Question}
              <i
                className={`fa-solid  ${
                  activeIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </p>
            {activeIndex === index && (
              <span className="FAQ-answer">{item.Answer}</span>
            )}
          </li>
        ))}
      </ul>
      <hr className="faq-bottom" />
    </div>
  );
}

export default FAQ;
