
import React from "react";

const offers = [
  { id: 1, title: "20% Off Wedding Venues", description: "Book now and save 20% on select venues!", image: "https://via.placeholder.com/300x150?text=20%25+Off" },
  { id: 2, title: "Free Decoration", description: "Get free decoration services with your booking.", image: "https://via.placeholder.com/300x150?text=Free+Decoration" },
  { id: 3, title: "Complimentary Catering", description: "Enjoy complimentary catering for your event.", image: "https://via.placeholder.com/300x150?text=Complimentary+Catering" },
];

const SpecialOffersSlider = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide p-2">
        {offers.map((offer) => (
          <div key={offer.id} className="min-w-[300px] bg-white rounded shadow p-4 flex-shrink-0">
            <img src={offer.image} alt={offer.title} className="rounded mb-2 w-full h-36 object-cover" />
            <h3 className="text-lg font-semibold">{offer.title}</h3>
<p className="text-gray-600">{offer.description}</p>
            <a href="#" className="text-blue-500 hover:text-blue-700">Explore More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffersSlider;
