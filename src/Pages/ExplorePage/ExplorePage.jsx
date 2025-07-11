import React from "react";
import { useParams } from "react-router-dom";
import { useMyContext } from "../../Context/MyContext";
import GetQoute from "../../Component/GetQoute/GetQoute";

function ExplorePage() {
  const { slug } = useParams();
  const { GalleryData } = useMyContext();

  const item = GalleryData.find((entry) => entry.slug === slug);

  if (!item) {
    return <div className="text-center p-10">No item found for "{slug}"</div>;
  }

  return (
    <div className="ExplorePage p-6">
      <h1 className="text-2xl font-bold mt-24 text-[#1f447b] text-[27px]">{item.title}</h1>
      <img src={item.image} alt={item.title} className="my-4 w-full h-auto min-h-[300px] max-h-[400px] object-cover" />
      <p className="text-gray-700">{item.description}</p>

      <h2 className=" mt-6 text-[#1f447b] font-bold">Installation Process:</h2>
      <ul className="list-disc pl-5">
        {item.process.map((step, i) => <li key={i}>{step}</li>)}
      </ul>

      <h2 className="font-bold mt-6 text-[#1f447b]">Features:</h2>
      <ul className="list-disc pl-5">
        {item.subItems.map((feature, i) => <li key={i}>{feature}</li>)}
      </ul>

      <p className="mt-4 text-sm text-gray-600">Estimated time: {item.time}</p>
      <GetQoute/>
    </div>
  );
}

export default ExplorePage;
