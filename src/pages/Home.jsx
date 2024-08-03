import React, { useState } from 'react';
import FilterBar from '../components/FilterBar/FilterBar';
import PropertyCard from '../components/PropertyCard/PropertyCard';
import properties from '../utils/properties.json';
import './Home.css';

const Home = ({ onBook }) => {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilter = (filters) => {
    const { location, priceRange, bedrooms, amenities } = filters;

    const filtered = properties.filter(property => {
      const locationMatch = location ? property.location === location : true;
      const priceMatch = property.price >= priceRange[0] && property.price <= priceRange[1];
      const bedroomsMatch = bedrooms ? property.bedrooms === parseInt(bedrooms, 10) : true;
      const amenitiesMatch = amenities.length > 0 ? amenities.every(amenity => property.amenities.includes(amenity)) : true;

      return locationMatch && priceMatch && bedroomsMatch && amenitiesMatch;
    });

    setFilteredProperties(filtered);
  };

  return (
    <div>
      <h1>PROPERTY RENTAL PLATFORM</h1>
      <FilterBar onFilter={handleFilter} />
      <div className="property-list">
        {filteredProperties.map(property => (
          <PropertyCard
            key={property.id}
            property={property}
            onBook={onBook}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
