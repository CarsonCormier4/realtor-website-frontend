import React, { useState } from "react";

function App() {
  const [newProperty, setNewProperty] = useState({
    price: "",
    bed: "",
    bath: "",
    comment: "",
    image: null,
  });

  const [properties, setProperties] = useState([]);

  const handleInputChange = (e) => {
    setNewProperty({ ...newProperty, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNewProperty({ ...newProperty, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProperties([...properties, newProperty]);
    setNewProperty({ price: "", bed: "", bath: "", comment: "", image: null });
  };

  return (
    <div>
      <h1>Property Listings</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="price"
          value={newProperty.price}
          onChange={handleInputChange}
          placeholder="Price"
        />
        <input
          type="number"
          name="bed"
          value={newProperty.bed}
          onChange={handleInputChange}
          placeholder="Beds"
        />
        <input
          type="number"
          name="bath"
          value={newProperty.bath}
          onChange={handleInputChange}
          placeholder="Baths"
        />
        <textarea
          name="comment"
          value={newProperty.comment}
          onChange={handleInputChange}
          placeholder="Add a comment"
        ></textarea>
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Add Property</button>
      </form>
      <div>
        {properties.map((property, index) => (
          <div key={index}>
            {property.image && (
              <img
                src={URL.createObjectURL(property.image)}
                width="200"
                alt="property"
              />
            )}
            <p>
              ${property.price} - {property.bed} Bed, {property.bath} Bath
            </p>
            <p>{property.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
