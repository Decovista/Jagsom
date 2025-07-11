// src/Context/MyContext.jsx
import React, { createContext, useState, useContext } from "react";
import resourse from "../../public/assets/resourse";

const MyContext = createContext();

const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

const MyProvider = ({ children }) => {
  const [toggleSubNav, setToggleSubNav] = useState(false);
  const [toggleSub, setToggleSub] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const teamData = [
    {
      name: "Vishal Kumar Gupta",
      role: "Director",
      phone: "7821939453",
      profile: resourse.menprofile,
    },
    {
      name: "Amrita Kumari",
      role: "Director",
      profile: resourse.womenProfile,
      phone: "7877208087",
    },
    {
      name: "Raman Srivastav",
      role: "HOD",
      profile: resourse.menprofile,
      phone: "8178150910",
    },
  ];

  const contentData = {
    "products-services": {
      title: "Products & Services",
      content: (
        <>
          <p className="mb-3">
            At <strong>Jagsom Electrical Pvt Ltd</strong>, we specialize in the
            design, fabrication, and supply of high-performance electrical
            panels for a wide range of applications — from commercial buildings
            to industrial plants and infrastructure projects.
          </p>
          <p className="mb-2">Our product offerings include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Main LT Panels:</strong> Floor-mounted, front-operated
              panels equipped with copper or aluminium busbars. IP42-rated and
              vermin proof for durability.
            </li>
            <li>
              <strong>Main LT Incomer Panels:</strong> Handle incoming power
              efficiently and safely with maximum protection.
            </li>
            <li>
              <strong>Bus Coupler Panels:</strong> Allow isolation and
              interconnection of busbars, ensuring uninterrupted power
              distribution.
            </li>
            <li>
              <strong>AMF (Auto Mains Failure) Panels:</strong> Seamlessly
              switch between grid and generator supply during outages,
              minimizing downtime.
            </li>
            <li>
              <strong>Distribution Panels:</strong> Reliable power distribution
              to multiple sub-units, with built-in circuit protection.
            </li>
            <li>
              <strong>Star Delta Starter Panels:</strong> Ensure safe starting
              of high-capacity motors with reduced current spikes.
            </li>
            <li>
              <strong>HT Panels:</strong> Engineered for high-tension
              environments in industries, conforming to safety and performance
              norms.
            </li>
          </ul>
        </>
      ),
    },

    "specialized-services": {
      title: "Specialized Services",
      content: (
        <>
          <p className="mb-3">
            In addition to our core product line, Jagsom Electrical offers
            end-to-end specialized services to ensure seamless power system
            performance:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Transformer Dehydration, Testing & Commissioning:</strong>
              We ensure that your transformers are completely moisture-free,
              properly insulated, and tested for performance before integration
              into your network.
            </li>
            <li>
              <strong>HT Overhead Line Installation:</strong>
              We provide comprehensive installation of high-tension (HT)
              overhead lines including supply of poles, insulators, conductors,
              and all related hardware.
            </li>
            <li>
              <strong>Load Flow Analysis & Site Surveys:</strong>
              Before deployment, we perform detailed site assessments and
              technical load studies to ensure optimized design and performance.
            </li>
          </ul>
        </>
      ),
    },

    "why-choose-us": {
      title: "Why Choose Us",
      content: (
        <>
          <p className="mb-3">
            We understand the critical importance of reliable electrical
            infrastructure. Here’s why clients across India trust Jagsom
            Electrical:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Unmatched Quality:</strong> We use CRCA sheets, IP-rated
              enclosures, and branded components to ensure rugged and reliable
              products.
            </li>
            <li>
              <strong>Powder-Coated Panels:</strong> Our panels are
              professionally coated for enhanced longevity, aesthetics, and
              corrosion resistance.
            </li>
            <li>
              <strong>Customization:</strong> Tailored designs to match your
              project specifications — whether residential, commercial, or
              industrial.
            </li>
            <li>
              <strong>On-Time Delivery:</strong> From project planning to final
              commissioning, we follow strict timelines and checklists.
            </li>
            <li>
              <strong>Full Lifecycle Support:</strong> We offer design,
              fabrication, testing, installation, and after-sales support under
              one roof.
            </li>
          </ul>
        </>
      ),
    },

    projects: {
      title: "Projects",
      content: (
        <>
          <p className="mb-3">
            Our portfolio includes a diverse range of projects across sectors
            like manufacturing, real estate, infrastructure, and government.
            We’ve executed:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              HT & LT panel installations in industrial manufacturing plants
            </li>
            <li>
              Solar-compatible electrical panel systems for commercial buildings
            </li>
            <li>Customized distribution panels for real estate projects</li>
            <li>Substation feeder panels for rural electrification</li>
          </ul>
          <p className="mt-3">
            Client testimonials and gallery updates coming soon.
          </p>
        </>
      ),
    },

    leadership: {
      title: "Leadership Team",
      content: (
        <>
          <p className="mb-3">
            Jagsom Electrical is powered by an experienced team of industry
            professionals:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Vishal Kumar Gupta</strong> – Director –{" "}
              <a href="tel:7821939453" className="underline">
                7821939453
              </a>
            </li>
            <li>
              <strong>Amrita Kumari</strong> – Director –{" "}
              <a href="tel:7877208087" className="underline">
                7877208087
              </a>
            </li>
            <li>
              <strong>Raman Srivastav</strong> – HOD (Head of Department) –{" "}
              <a href="tel:8178150910" className="underline">
                8178150910
              </a>
            </li>
          </ul>
          <p className="mt-2">
            We are committed to technical excellence, project integrity, and
            customer satisfaction.
          </p>
        </>
      ),
    },

    culture: {
      title: "Our Culture",
      content: (
        <>
          <p>
            At Jagsom Electrical, we foster a culture of continuous learning,
            safety-first execution, and integrity in every task we undertake.
            Our work environment encourages innovation, team collaboration, and
            commitment to sustainable practices. We believe in nurturing talent
            and empowering our workforce to grow with the company.
          </p>
        </>
      ),
    },

    material: {
      title: "Material Standards",
      content: (
        <>
          <p>
            All our panels are constructed using high-grade Cold Rolled Close
            Annealed (CRCA) steel sheets, fitted with copper/aluminium busbars,
            and powder-coated for weather and corrosion resistance. Our sourcing
            is compliant with ISO standards, and we only use components from
            certified manufacturers to ensure performance, safety, and
            efficiency.
          </p>
        </>
      ),
    },

    contact: {
      title: "Contact Us",
      content: (
        <>
          <p className="mb-2">
            We'd love to hear from you. Reach out for project inquiries,
            support, or product consultation.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:Jagsom.electrical.01@gmail.com"
                className="underline"
              >
                Jagsom.electrical.01@gmail.com
              </a>
            </li>
            <li>
              Registered Address: Shop-i-413, Saurav Vihar, Hari Nagar Ext,
              Badarpur (South Delhi), New Delhi - 110044
            </li>
            <li>
              Corporate Address: Unit no 417, 4th Floor, Vipul Business Park,
              Sector 48, Gurugram, Haryana - 122018
            </li>
          </ul>
          <p className="mt-2">
            We typically respond within 24 hours on business days.
          </p>
        </>
      ),
    },
  };
  const NavListItem = [
    {
      Title: "Categories",
      SubTitle: [
        { label: "Solar Panel System" },
        { label: "Solar Panel Installation" },
        { label: "Residential Solar Setup" },
        { label: "Commercial Solar Panel" },
        { label: "Solar Inverter Connection" },
        { label: "Solar Maintenance Service" },
      ],
    },
    {
      Title: "About",
      SubTitle: [
        { label: "Company" },
        { label: "Management" },
        { label: "Experience" },
        { label: "Availability" },
      ],
    },
    {
      Title: "Companies",
      SubTitle: [
        { label: "Tata Power Solar" },
        { label: "Waaree Energies" },
        { label: "Vikram Solar" },
        { label: "Adani Solar" },
        { label: "RenewSys" },
      ],
    },
  ];

  const rawGallery = [
    {
      title: "Solar Panel System",
      image: resourse.SolarPanelSystem,
      description:
        "An efficient solar panel system converts sunlight into usable electricity, reducing reliance on grid power.",
      process: [
        "Site assessment",
        "System design",
        "Installation",
        "Activation",
      ],
      time: "3-5 days",
      subItems: [
        "Mono/Polycrystalline panels",
        "Mounting structures",
        "Net metering setup",
        "Performance warranty",
      ],
    },
    {
      title: "Solar Panel Installation",
      image: resourse.SolarPanelInstallation,
      description:
        "Professional solar system installation with secure mounting and electrical integration.",
      process: [
        "Roof analysis",
        "Mounting setup",
        "Wiring & testing",
        "Handover",
      ],
      time: "2-3 days",
      subItems: [
        "Certified installers",
        "Safe electrical connections",
        "Structural integrity checks",
        "On-site performance test",
      ],
    },
    {
      title: "Residential Solar Setup",
      image: resourse.ResidentialSolarSetup,
      description:
        "Custom solar for homes with optimized energy usage and ROI.",
      process: [
        "Load calculation",
        "Design approval",
        "Installation",
        "Monitoring setup",
      ],
      time: "4-6 days",
      subItems: [
        "Customized for rooftops",
        "Inverter + Battery",
        "Energy savings estimation",
        "Remote monitoring app",
      ],
    },
    {
      title: "Commercial Solar Panel",
      image: resourse.CommercialSolarPanel,
      description:
        "Solar power for offices and industries with large-scale savings.",
      process: [
        "Energy audit",
        "Proposal",
        "High-capacity installation",
        "Commissioning",
      ],
      time: "7-10 days",
      subItems: [
        "50kW to 1MW+ capacity",
        "ROI-based design",
        "Compliance with DISCOM norms",
        "24x7 support",
      ],
    },
    {
      title: "Solar Inverter Connection",
      image: resourse.SolarInverterConnection,
      description:
        "Stable inverter connection for efficient DC to AC conversion.",
      process: ["Panel matching", "Wiring & setup", "Grid sync", "Test run"],
      time: "1 day",
      subItems: [
        "MPPT/Hybrid inverters",
        "Smart metering compatibility",
        "Efficiency testing",
        "Warranty-backed install",
      ],
    },
    {
      title: "Solar Maintenance Service",
      image: resourse.SolarMaintenanceService,
      description: "Preventive and on-demand solar maintenance services.",
      process: ["Inspection", "Cleaning", "Issue fix", "Report"],
      time: "1-2 days",
      subItems: [
        "Panel wash",
        "Cable check",
        "Inverter diagnostics",
        "AMC available",
      ],
    },
  ];

  const GalleryData = rawGallery.map((item, i) => ({
    ...item,
    id: i + 1,
    slug: slugify(item.title),
  }));

  return (
    <MyContext.Provider
      value={{
        toggleSubNav,
        setToggleSubNav,
        toggleSub,
        setToggleSub,
        GalleryData,
        NavListItem,
        showPopup,
        setShowPopup,
        contentData,
        teamData
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => useContext(MyContext);
export { MyProvider, useMyContext, MyContext };
