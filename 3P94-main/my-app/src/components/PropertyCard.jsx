import React from "react";
import "../styling/PropertyCard.css";

export default function PropertyCard({ image, title, location, price, details }) {
  return (
    <div className="property-card">
      <img src={image} alt={title} className="property-image" />
      <div className="property-info">
        <h3>{title}</h3>
        <p>{location}</p>
        <span className="property-price">{price}</span>
        {details && <p className="property-details">{details}</p>}
      </div>
    </div>
  );
}
