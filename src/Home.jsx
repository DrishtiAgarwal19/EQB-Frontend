import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="body bg-gray-50 min-h-screen w-screen">
        <Navbar />

      {/* Hero Section */}
      <section style={{ backgroundImage: `url("/Wedding In Rajasthan.jpeg")`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="h-96 py-24 w-4/5 mx-auto">
        <div className="px-4 text-center">
          <h3 className="text-3xl font-semibold mb-4 text-white">Destination Wedding</h3>
          <p className="text-lg text-white max-w-3xl mx-auto">
            EventQuickBook helps you discover and book the perfect venue for weddings and events.
          </p>
        </div>
      </section>

      {/* Search Filters Bar */}
      <section className="px-4 w-4/5 mx-auto mt-4">
        <div className="grid grid-cols-6 gap-2 mb-6">
          <input type="text" placeholder="City" className="p-2 border rounded placeholder-gray-700" />
          <input type="date" placeholder="Start Date" className="p-2 border rounded placeholder-gray-700" />
          <input type="date" placeholder="End Date" className="p-2 border rounded placeholder-gray-700" />
          <input type="number" placeholder="Price" className="p-2 border rounded placeholder-gray-700" />
          <input type="text" placeholder="Event Type" className="p-2 border rounded placeholder-gray-700" />
<button className="royal-blue-button text-white px-4 py-2 rounded shadow" style={{ backgroundColor: 'royal blur' }}>Search</button>
        </div>
      </section>

      {/* Filters Sidebar & Venues Section */}
      <section className="px-4 grid grid-cols-12 gap-6">
        {/* Filters Sidebar */}
<aside className="col-span-3 bg-white p-4 rounded shadow overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <ul className="space-y-2">
            <li><label><input type="checkbox" className="mr-2" /> Rooftop</label></li>
            <li><label><input type="checkbox" className="mr-2" /> Closed Area</label></li>
            <li><label><input type="checkbox" className="mr-2" /> Open Area</label></li>
            <li><label><input type="checkbox" className="mr-2" /> Garden</label></li>
            <li><label><input type="checkbox" className="mr-2" /> Beachside</label></li>
            <li><label><input type="checkbox" className="mr-2" /> Banquet Hall</label></li>
            <li><label><input type="checkbox" className="mr-2" /> Pet Friendly</label></li>
          </ul>
        </aside>

        {/* Venues Section */}
        <main className="col-span-9">
          {/* Popular Venues */}
          <h2 className="text-2xl font-semibold mb-4">Popular Venues</h2>
          <div className="flex overflow-x-auto space-x-6">
            {/* Example Venue Card */}
            <Link to="/venue/1" className="bg-white rounded-xl shadow p-4 w-64 h-64">
              <img src="https://via.placeholder.com/300x200" alt="Venue" className="rounded-md mb-2 object-cover h-32 w-full" />
              <h3 className="text-md font-semibold">Venue Name</h3>
              <p className="text-gray-600">Location</p>
              <p className="text-gray-700">$Price</p>
              <div className="flex items-center mt-2">
                <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 1l2.939 4.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <span>4.5</span>
              </div>
            </Link>
            {/* End Example Venue Card */}
            {/* Example Venue Card */}
            <div className="bg-white rounded-xl shadow p-4 w-64 h-64">
              <img src="https://via.placeholder.com/300x200" alt="Venue" className="rounded-md mb-2" />
              <h3 className="text-md font-semibold">Venue Name</h3>
              <p className="text-gray-600">Location</p>
              <p className="text-gray-700">$Price</p>
              <div className="flex items-center mt-2">
                <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 1l2.939 4.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <span>4.5</span>
              </div>
            </div>
            {/* End Example Venue Card */}
            {/* Example Venue Card */}
            <div className="bg-white rounded shadow p-4 w-64">
              <img src="https://via.placeholder.com/300x200" alt="Venue" className="rounded-md mb-2" />
              <h3 className="text-md font-semibold">Venue Name</h3>
              <p className="text-gray-600">Location</p>
              <p className="text-gray-700">$Price</p>
              <div className="flex items-center mt-2">
                <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 1l2.939 4.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <span>4.5</span>
              </div>
            </div>
             {/* Example Venue Card */}
             <div className="bg-white rounded shadow p-4 w-64">
              <img src="https://via.placeholder.com/300x200" alt="Venue" className="rounded-md mb-2" />
              <h3 className="text-md font-semibold">Venue Name</h3>
              <p className="text-gray-600">Location</p>
              <p className="text-gray-700">$Price</p>
              <div className="flex items-center mt-2">
                <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 1l2.939 4.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <span>4.5</span>
              </div>
            </div>
            {/* End Example Venue Card */}
<button className="flex items-center justify-center royal-blue-button text-white px-4 py-2 rounded shadow hover:from-pink-500 hover:to-yellow-500 w-32 h-12 self-center" style={{whiteSpace: 'nowrap'}}>Explore More<span style={{color: 'white'}}>→</span></button>
          </div>
          {/* Special Offers Section */}
          <section className="px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">Special Offers</h2>
            <div className="flex overflow-x-auto space-x-4 items-center">
              {/* Example Offer Card */}
              <div className="bg-white rounded-xl shadow p-4 w-64 h-64">
                <img src="https://via.placeholder.com/200x100" alt="Offer" className="rounded-md mb-2 object-cover h-32 w-full" />
                <h3 className="text-md font-semibold">Offer Title</h3>
                <p className="text-gray-600">Description</p>
              </div>
              {/* End Example Offer Card */}
              {/* Example Offer Card */}
              <div className="bg-white rounded-xl shadow p-4 w-64 h-64">
                <img src="https://via.placeholder.com/200x100" alt="Offer" className="rounded-md mb-2 object-cover h-32 w-full" />
                <h3 className="text-md font-semibold">Offer Title</h3>
                <p className="text-gray-600">Description</p>
              </div>
              {/* End Example Offer Card */}
              {/* Example Offer Card */}
              <div className="bg-white rounded-xl shadow p-4 w-64 h-64">
                <img src="https://via.placeholder.com/200x100" alt="Offer" className="rounded-md mb-2 object-cover h-32 w-full" />
                <h3 className="text-md font-semibold">Offer Title</h3>
                <p className="text-gray-600">Description</p>
              </div>
               {/* Example Offer Card */}
               <div className="bg-white rounded-xl shadow p-4 w-64 h-64">
                <img src="https://via.placeholder.com/200x100" alt="Offer" className="rounded-md mb-2 object-cover h-32 w-full" />
                <h3 className="text-md font-semibold">Offer Title</h3>
                <p className="text-gray-600">Description</p>
              </div>
<button className="flex items-center justify-center royal-blue-button text-white px-4 py-2 rounded shadow hover:from-pink-500 hover:to-yellow-500 w-32 h-12" style={{whiteSpace: 'nowrap'}}>Explore More<span style={{color: 'white'}}>→</span></button>
              {/* End Example Offer Card */}
            </div>
          </section>
        </main>
       
      </section>

      {/* How It Works */}
      <section className="px-4 py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <svg className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-6a7 7 0 10-14 0 7 7 0 0014 0z" /></svg>
            <h3 className="text-md font-semibold mt-2">Search Venue</h3>
          </div>
          <div>
            <svg className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            <h3 className="text-md font-semibold mt-2">Compare</h3>
          </div>
          <div>
            <svg className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <h3 className="text-md font-semibold mt-2">Book</h3>
          </div>
          <div>
            <svg className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg>
            <h3 className="text-md font-semibold mt-2">Celebrate</h3>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-4 py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-600">EventQuickBook is your go-to platform for discovering and booking the perfect venue for weddings and events. Our mission is to simplify the venue selection process and provide you with a seamless booking experience.</p>
      </section>
    </div>
  );
};

export default Home;
