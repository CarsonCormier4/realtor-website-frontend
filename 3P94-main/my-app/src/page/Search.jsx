import React, { useState } from "react";
import "../styling/ProductListings.css";
import PropertyCard from "../components/PropertyCard.jsx";

const neighborhoods = [
  { name: "Downtown", crime: "Low", schools: "Excellent", transport: "Good", parks: "Many", walkability: "High" },
  { name: "Suburbia", crime: "Very Low", schools: "Great", transport: "Average", parks: "Several", walkability: "Medium" },
  { name: "Old Town", crime: "Medium", schools: "Average", transport: "Excellent", parks: "Few", walkability: "High" },
];

export default function Search() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("");
  const [filters, setFilters] = useState({ search: "", type: "", priceRange: [0, 5000000] });

  return (
    <div className="search-page">
      <div className="filters-container">
        <h3>Filters</h3>
        <input type="text" placeholder="Search locations..." className="search-input" />
        <button className="filter-btn">For Sale</button>
        <button className="filter-btn">For Rent</button>
        <button className="filter-btn">Price Range</button>
        <button className="filter-btn">Beds & Baths</button>
        <button className="filter-btn">Home Type</button>
        <button className="filter-btn">More Filters</button>

        {/* Neighborhood Insights Section */}
        <h3 className="insights-title">Neighborhood Insights</h3>
        <select className="neighborhood-dropdown" onChange={(e) => setSelectedNeighborhood(e.target.value)}>
          <option value="">Select a Neighborhood</option>
          {neighborhoods.map((hood, index) => (
            <option key={index} value={hood.name}>{hood.name}</option>
          ))}
        </select>

        {selectedNeighborhood && (
          <div className="neighborhood-info">
            {neighborhoods
              .filter((hood) => hood.name === selectedNeighborhood)
              .map((hood, index) => (
                <div key={index} className="neighborhood-details">
                  <p><strong>Crime Rate:</strong> {hood.crime}</p>
                  <p><strong>Schools:</strong> {hood.schools}</p>
                  <p><strong>Public Transport:</strong> {hood.transport}</p>
                  <p><strong>Parks & Amenities:</strong> {hood.parks}</p>
                  <p><strong>Walkability:</strong> {hood.walkability}</p>
                </div>
              ))}
          </div>
        )}

        
      </div>

      {/* Property Listings Section */}
      
      <div className="property-listings">
          <PropertyCard 
                        image="/Images/house1.jpg" 
                        title="472 Gage St" 
                        location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                        price="$6,942,991" 
                        details="5 Bedrooms • 9 Bathrooms" 
                      />
            <PropertyCard 
                          image="/Images/house6.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
            <PropertyCard 
                          image="/Images/house5.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
            <PropertyCard 
                        image="/Images/house4.jpg" 
                        title="472 Gage St" 
                        location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                        price="$6,942,991" 
                        details="5 Bedrooms • 9 Bathrooms" 
                      />
            <PropertyCard 
                          image="/Images/house3.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
            <PropertyCard 
                          image="/Images/house2.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
            <PropertyCard 
                        image="/Images/house1.jpg" 
                        title="472 Gage St" 
                        location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                        price="$6,942,991" 
                        details="5 Bedrooms • 9 Bathrooms" 
                      />
            <PropertyCard 
                          image="/Images/house6.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
            <PropertyCard 
                          image="/Images/house5.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
            <PropertyCard 
                        image="/Images/house4.jpg" 
                        title="472 Gage St" 
                        location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                        price="$6,942,991" 
                        details="5 Bedrooms • 9 Bathrooms" 
                      />
            <PropertyCard 
                          image="/Images/house3.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
            <PropertyCard 
                          image="/Images/house2.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
        </div>

    </div>
  );
}
