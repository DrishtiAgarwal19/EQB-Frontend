import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home2 = () => {
  return (
    <div className="body bg-gray-50 min-h-screen w-screen">
        <Navbar />

      {/* Hero Section */}
      <section style={{ backgroundImage: `url("/download.jpeg")`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="h-96 py-24 w-4/5 mx-auto flex items-center justify-center">
        <div className="px-4 text-center">
          <h3 className="text-5xl font-semibold mb-4 text-white">Destination Weddings</h3>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Find the perfect venue for your dream wedding.
          </p>
          <Link to="/explore-destinations" className="bg-blue-500 text-white px-6 py-3 rounded-md mt-4 hover:bg-blue-600">Explore Destinations</Link>
        </div>
      </section>

      {/* Filters Sidebar & Venues Section */}
      <section className="px-4 grid grid-cols-12 gap-6 mt-8">
        {/* Filters Sidebar */}
        <aside className="col-span-3 bg-white p-4 rounded shadow overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="location">
                <option>Anywhere</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="capacity">
              Capacity
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="capacity">
                <option>Any</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventType">
              Event Type
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="eventType">
                <option>Any</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow w-full hover:bg-blue-600">Apply Filters</button>
        </aside>

        {/* Venues Section */}
        <main className="col-span-9">
          {/* Popular Venues */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Popular Venues</h2>
            <button className="flex items-center justify-center royal-blue-button text-white px-4 py-2 rounded shadow hover:from-pink-500 hover:to-yellow-500 w-32 h-12" style={{whiteSpace: 'nowrap'}}>Explore More<span style={{color: 'white'}}>→</span></button>
          </div>
          <div className="flex overflow-x-auto space-x-6">
            {/* Example Venue Card */}
            <Link to="/venue/1" className="bg-white rounded-xl shadow p-4 w-64 h-64">
              <img src="https://via.placeholder.com/300x200" alt="Venue" className="rounded-md mb-2 object-cover h-32 w-full" />
              <h3 className="text-md font-semibold">The Grand Ballroom</h3>
              <p className="text-gray-600">Elegant ballroom with city views</p>
            </Link>
            {/* End Example Venue Card */}
            {/* Example Venue Card */}
            <div className="bg-white rounded-xl shadow p-4 w-64 h-64">
              <img src="https://via.placeholder.com/300x200" alt="Venue" className="rounded-md mb-2" />
              <h3 className="text-md font-semibold">The Lakeside Manor</h3>
              <p className="text-gray-600">Picturesque manor by the lake</p>
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
          </div>
          {/* Special Offers Section */}
          <section className="px-4 py-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Special Offers</h2>
              <button className="flex items-center justify-center royal-blue-button text-white px-4 py-2 rounded shadow hover:from-pink-500 hover:to-yellow-500 w-32 h-12" style={{whiteSpace: 'nowrap'}}>Explore More<span style={{color: 'white'}}>→</span></button>
            </div>
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

export default Home2;
