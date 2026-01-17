import React from "react";
import Navbar from "../components/Navbar.jsx";
import PropertyCard from "../components/PropertyCard.jsx";
import "../styling/Home.css";

export default function Home() {
  return (
    <div className="home-container">

      {/* Search Bar Section */}
      <section className="search-section">
        <div className="search-bar">
          <input type="text" placeholder="Search locations..." />
          <button>Search</button>
        </div>
        <div className="filter-buttons">
          <button>Buy</button>
          <button>Rent</button>
          <button>Price Range</button>
          <button>Beds & Baths</button>
          <button>Home Type</button>
          <button>Filters</button>
        </div>
      </section>

      {/* Main Layout Section */}
      <section className="main-layout">
        {/* Map Section */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.646040949852!2d-79.09376568450208!3d43.089557979145116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d344529b5b5b15%3A0x4d1e3d8e5b5e5e3!2sNiagara%20Falls!5e0!3m2!1sen!2sca!4v1617722957757!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Property Listings Section */}
        <div className="listings-container">
          <h2>Viewing 6 Homes for Sale</h2>
          <div className="listings-grid">
            <PropertyCard 
              image="/Images/house1.jpg" 
              title="472 Gage St" 
              location="Niagara On The Lake, ON, L0S 1J0 Canada" 
              price="$6,942,991" 
              details="5 Bedrooms • 9 Bathrooms" 
            />
            <PropertyCard 
              image="/Images/house2.jpg" 
              title="N/A Dorchester Road" 
              location="Niagara Falls, ON, L2G 7W7 Canada" 
              price="$2,232,922" 
            />
            <PropertyCard 
              image="/Images/house3.jpg" 
              title="Luxury Villa" 
              location="Toronto, ON, Canada" 
              price="$4,500,000" 
              details="4 Bedrooms • 6 Bathrooms" 
            />
            <PropertyCard 
              image="/Images/house4.jpg" 
              title="Beachfront Estate" 
              location="Vancouver, BC, Canada" 
              price="$7,800,000" 
              details="6 Bedrooms • 7 Bathrooms" 
            />
            <PropertyCard 
              image="/Images/house5.jpg" 
              title="Downtown Penthouse" 
              location="Montreal, QC, Canada" 
              price="$3,200,000" 
              details="3 Bedrooms • 4 Bathrooms" 
            />
            <PropertyCard 
              image="/Images/house6.jpg" 
              title="Mountain Retreat" 
              location="Whistler, BC, Canada" 
              price="$5,600,000" 
              details="4 Bedrooms • 5 Bathrooms" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
