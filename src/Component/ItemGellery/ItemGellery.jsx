import React from "react";
import "./ItemGellery.css";
import { useMyContext } from "../../Context/MyContext";
import { Link } from "react-router-dom";

function ItemGellery() {
  const { GalleryData } = useMyContext();

  return (
    <div className="ItemGellery bg-blue-100">
      <div className="ItemGellery-wrapper">
        {GalleryData.map((item, index) => (
          <Link to={`/explore/${item.slug}`} key={index} className="gallery-card">
            <div className="G-card_overlay"></div>
            <img className="gallery-card-img" src={item.image} alt={item.title} />
            <div className="gallery-item-con">
              <h1 className="gallery-card-text">{item.title}</h1>
              <div className="G-card-Explore-btn">Explore</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ItemGellery;
