import React from "react";
import "../styling/Footer.css"; 

export default function Footer() {
  return (
    <footer className="footer">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <span>Canada</span> / <span>Ontario</span> / <span>Niagara</span>
      </div>

      {/* Main Text */}
      <p className="footer-description">
        Search for Niagara luxury homes with the Luxury Estates network, your premier resource for Niagara homes.
        We have <strong>16 luxury homes for sale in Niagara</strong>, and <strong>419 homes in all of Ontario.</strong> 
        Homes listings include vacation homes, apartments, penthouses, luxury retreats, lake homes, ski chalets, villas, and 
        many more lifestyle options. Each sale listing includes detailed descriptions, photos, amenities, and neighborhood information for Niagara.
      </p>

      {/* Popular City Searches */}
      <h3 className="footer-title">Popular City Searches</h3>
      <p className="footer-subtext">Find homes in these popular cities</p>
      
      <div className="city-links">
        <span>New York</span>
        <span>Miami</span>
        <span>Washington</span>
        <span>Sydney</span>
        <span>London</span>
        <span>Los Angeles</span>
      </div>
    </footer>
  );
}
