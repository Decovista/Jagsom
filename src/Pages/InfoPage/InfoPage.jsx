import React from "react";
import { useParams } from "react-router-dom";
import { useMyContext } from "../../Context/MyContext";


function InfoPage() {
  const { slug } = useParams();
  const {contentData} = useMyContext();
  const section = contentData[slug];

  if (!section) {
    return <div className="max-w-4xl mx-auto p-10"><h1 className="text-xl font-bold">Page Not Found</h1></div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#003f63] mt-20 text-center">{section.title}</h1>
      <div className="text-base leading-relaxed text-[#003f63]">{section.content}</div>
    </div>
  );
}

export default InfoPage;
