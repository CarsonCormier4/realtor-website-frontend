import React, { useState } from "react";
import "../styling/Agents.css";

const agents = [
  { id: 1, name: "James Anderson", agency: "Elite Realty", location: "Toronto, ON", image: "/Images/prof1.jpg", rating: 4.9, specialties: "Downtown, Midtown" },
  { id: 2, name: "Sophia Martinez", agency: "Prestige Properties", location: "Vancouver, BC", image: "/Images/prof2.jpg", rating: 4.7, specialties: "West End, Yaletown" },
  { id: 3, name: "Michael Roberts", agency: "Luxe Homes", location: "Montreal, QC", image: "/Images/prof1.jpg", rating: 4.8, specialties: "Old Montreal, Plateau" },
  { id: 4, name: "Emma Johnson", agency: "Gold Standard Realty", location: "Calgary, AB", image: "/Images/prof2.jpg", rating: 4.5, specialties: "Brentwood, Varsity" },
  { id: 5, name: "Daniel Thompson", agency: "Luxury Estates Group", location: "Niagara Falls, ON", image: "/Images/prof1.jpg", rating: 4.6, specialties: "Niagara-on-the-Lake" },
  { id: 6, name: "Olivia Wilson", agency: "Prime Realty", location: "Edmonton, AB", image: "/Images/prof2.jpg", rating: 4.9, specialties: "Downtown, Southside" },
];

export default function Agents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const filteredAgents = agents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLocation === "" || agent.location.includes(selectedLocation))
  );

  return (
    <div className="agents-page">
      <h2 className="agents-heading">Meet Our Luxury Real Estate Agents</h2>

      {/* Search Bar */}
      <input
        type="text"
        className="agent-search-bar"
        placeholder="Search for agents..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Filters */}
      <div className="agent-filter-btns">
        <button className="agent-filter-btn" onClick={() => setSelectedLocation("")}>
          All Locations
        </button>
        <button className="agent-filter-btn" onClick={() => setSelectedLocation("Toronto")}>
          Toronto
        </button>
        <button className="agent-filter-btn" onClick={() => setSelectedLocation("Vancouver")}>
          Vancouver
        </button>
        <button className="agent-filter-btn" onClick={() => setSelectedLocation("Montreal")}>
          Montreal
        </button>
      </div>

      {/* Agent Listings */}
      <div className="agents-grid">
        {filteredAgents.map((agent) => (
          <div key={agent.id} className="agent-card">
            <img src={agent.image} alt={agent.name} />
            <h3>{agent.name}</h3>
            <p>{agent.agency}</p>
            <p>{agent.location}</p>
            <p>⭐ {agent.rating} | {agent.specialties}</p>
            <button className="contact-btn">Contact</button>
          </div>
        ))}
      </div>
    </div>
  );
}
