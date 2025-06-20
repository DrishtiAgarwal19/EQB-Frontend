import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import React, { useState } from 'react';

const Navbar = () => {
  const { user } = useAuth();
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <div className="text-xl font-bold">EventQuickBook</div>
      <nav className="space-x-4 flex items-center">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <div
          className="relative"
          onMouseEnter={() => setIsServicesHovered(true)}
          onMouseLeave={() => setIsServicesHovered(false)}
        >
          <Link to="/services" className="hover:text-blue-600 cursor-pointer">Our Services</Link>
          {isServicesHovered && (
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                <p className="block px-4 py-2 text-gray-800 font-bold">Venue Booking Services</p>
                <Link to="/services/wedding-venue-booking" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Wedding Venue Booking</Link>
                <Link to="/services/engagement-reception-halls" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Engagement & Reception Halls</Link>
                <Link to="/services/birthday-party-venues" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Birthday Party Venues (Adults & Kids)</Link>
                <Link to="/services/corporate-event-spaces" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Corporate Event Spaces</Link>
                <Link to="/services/banquet-halls" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Banquet Halls & Marriage Halls</Link>
                <Link to="/services/conference-rooms" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Conference Rooms / Meeting Spaces</Link>
                <Link to="/services/party-lawns" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Party Lawns & Farmhouses</Link>
                <Link to="/services/restaurants-lounges" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Restaurants & Lounges for Private Parties</Link>
                <Link to="/services/hotels-event-packages" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Hotels for Stay + Event Packages</Link>
                <p className="block px-4 py-2 text-gray-800 font-bold mt-2">🎯 Event Planning Assistance</p>
                <Link to="/services/event-planner-recommendations" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Event Planner Recommendations</Link>
                <Link to="/services/theme-decor-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Theme & Decor Services</Link>
                <Link to="/services/catering-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Catering Services</Link>
                <Link to="/services/photography-videography" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Photography & Videography</Link>
                <Link to="/services/entertainment-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Entertainment Services (DJ, Live Music, Anchors)</Link>
                <Link to="/services/lighting-sound-setup" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Lighting & Sound Setup</Link>
              </div>
            </div>
          )}
        </div>
        {user ? (
          <span>{user.name}</span>
        ) : (
          <Link to="/login" className="hover:text-blue-600">Login/Signup</Link>
        )}
        <Link to="/wishlist" className="hover:text-blue-600">Wishlist</Link>
        <Link to="/customer-query" className="hover:text-blue-600">Customer Query</Link>
      </nav>
    </header>
  );
};

export default Navbar;
