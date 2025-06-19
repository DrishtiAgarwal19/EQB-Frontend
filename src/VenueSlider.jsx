import React from 'react';
import { Link } from 'react-router-dom';

const venues = [
  { id: 1, name: "Venue 1", description: "Special offer for Venue 1", imageUrl: "https://via.placeholder.com/300x150?text=Venue+1", location: "City A", type: "Wedding", capacity: 200, amenities: ["Parking", "Catering"] },
  { id: 2, name: "Venue 2", description: "Special offer for Venue 2", imageUrl: "https://via.placeholder.com/300x150?text=Venue+2", location: "City B", type: "Conference", capacity: 500, amenities: ["Wifi", "Projector"] },
  { id: 3, name: "Venue 3", description: "Special offer for Venue 3", imageUrl: "https://via.placeholder.com/300x150?text=Venue+3", location: "City C", type: "Party", capacity: 100, amenities: ["Bar", "Dance Floor"] },
];

function VenueSlider() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Venue Special Offers</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide p-2">
        {venues.map((venue) => (
          <div key={venue.id} className="min-w-[300px] bg-white rounded shadow p-4 flex-shrink-0">
            <Link to={`/venue/${venue.id}`} state={{ venue }}>
              <img src={venue.imageUrl} alt={venue.name} className="rounded mb-2 w-full h-36 object-cover" />
              <h3 className="text-lg font-semibold">{venue.name}</h3>
              <p className="text-gray-600">{venue.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VenueSlider;
