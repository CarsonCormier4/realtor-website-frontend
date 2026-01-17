import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import "../styling/Profile.css";
import PropertyCard from "../components/PropertyCard.jsx";
import profileImage from "/Images/prof1.jpg";

const savedProperties = [
  { id: 1, image: "/Images/house1.jpg", title: "472 Gage St", location: "Niagara On The Lake, ON", price: "$6,942,991", details: "5 Bedrooms • 9 Bathrooms" },
  { id: 2, image: "/Images/house2.jpg", title: "Luxury Villa", location: "Toronto, ON", price: "$4,500,000", details: "4 Bedrooms • 6 Bathrooms" },
  { id: 3, image: "/Images/house3.jpg", title: "Beachfront Estate", location: "Vancouver, BC", price: "$7,800,000", details: "6 Bedrooms • 7 Bathrooms" },
];

export default function Profile() {
  const [profile] = useState({
    name: "Michael Scott",
    email: "MichaelScott@gmail.com",
    phone: "(519) 456-7235",
    address: "68 Clifton Hill, Niagara Falls, ON",
    bio: "Passionate about real estate investments and rental properties.",
    profileCompletion: 100,
  });

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Profile Section */}
        <div className="profile-info">
          <img src={profileImage} alt="Profile" />
          <h2><FaUser /> {profile.name}</h2>
          <p><FaEnvelope /> <strong>Email:</strong> {profile.email}</p>
          <p><FaPhone /> <strong>Phone:</strong> {profile.phone}</p>
          <p><FaMapMarkerAlt /> <strong>Address:</strong> {profile.address}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>

          <div className="profile-completion">
            <span>Profile Completion: {profile.profileCompletion}%</span>
            <div className="completion-bar">
              <div className="completion-fill" style={{ width: `${profile.profileCompletion}%` }} />
            </div>
          </div>

          <button>Edit Profile</button>
        </div>

        {/* Saved Properties Section */}
        <div className="saved-properties">
          <h2>Saved Properties</h2>
          <div className="property-listings">
            {savedProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
