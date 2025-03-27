import { FaStar, FaMapMarkerAlt, FaClock, FaPlane, FaUtensils, FaHotel, FaChevronRight } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const EuropeanTourPackage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-sm text-gray-600 mb-6">
        <a href="/" className="hover:text-blue-600 transition">Home</a>
        <IoIosArrowForward className="mx-2 text-xs" />
        <a href="/holiday" className="hover:text-blue-600 transition">Holiday</a>
        <IoIosArrowForward className="mx-2 text-xs" />
        <span className="text-blue-600 font-medium">European Extravaganza</span>
      </nav>

      {/* Package Header */}
      <div className="mb-10">
        <h1 className="text-1xl md:text-1xl lg:text-3xl font-bold  mb-3 leading-tight text-blue-600">
          European Elegance: A Journey Through Paris, Amsterdam, Frankfurt & Zurich
        </h1>
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex items-center text-blue-700">
            <FaMapMarkerAlt className="mr-1.5" />
            <span>Western Europe</span>
          </div>
          <div className="flex items-center text-amber-500">
            <FaStar className="mr-1.5" />
            <span>4.9 (1,400+ Reviews)</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaClock className="mr-1.5" />
            <span>9 Nights | 29 Nov - 02 Dec 2025</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Content Column */}
        <div className="lg:w-2/3">
          {/* Image Gallery */}
          <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden mb-8">
            <img 
              src="/europe-tour-hero.png" 
              alt="European Tour" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
              <span className="text-blue-600">4 Countries</span>
            </div>
          </div>

          {/* Package Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaHotel className="text-blue-600 mr-2" />
                Hotels & Destinations
              </h3>
              <ul className="space-y-3">
                {[
                  "Paris: Hôtel Mercure Paris Centre Tour Eiffel",
                  "Amsterdam: 4-star canal view hotel",
                  "Frankfurt: City center business hotel",
                  "Zurich: Lakeside accommodation with mountain views"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaClock className="text-blue-600 mr-2" />
                Tour Highlights
              </h3>
              <ul className="space-y-3">
                {[
                  "Eiffel Tower 2nd level access",
                  "Seine River cruise in Paris",
                  "Amsterdam canal cruise",
                  "Black Forest scenic drive",
                  "Rhine Falls visit",
                  "Professional English-speaking guide"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed Itinerary */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Detailed Itinerary
            </h2>

            {/* Day 1 */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800">Day 1: Arrival in Paris</h3>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg mb-4">
                <p className="text-gray-700 mb-3">
                  Arrival at Paris Charles de Gaulle Airport. Transfer to your hotel for check-in (on your own). 
                  Free time to relax and explore nearby attractions at your own pace. Overnight in Paris.
                </p>
                <p className="text-sm text-gray-500 italic">
                  Note: The Tour Manager will meet you at the hotel. Standard check-in time is 1500 hrs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <FaPlane className="text-blue-500 mr-2" />
                    Flight Details
                  </h4>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Airline:</span> Emirates EK072</p>
                    <p><span className="font-medium">Class:</span> Economy (A380)</p>
                    <p><span className="font-medium">Route:</span> Dubai (DXB) → Paris (CDG)</p>
                    <p><span className="font-medium">Duration:</span> 6h 35m</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <FaUtensils className="text-blue-500 mr-2" />
                    Meals Included
                  </h4>
                  <p className="text-sm">Packed Indian dinner delivered to the hotel</p>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800">Day 2: Paris - Optional Disneyland</h3>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <p className="text-gray-700 mb-3">
                  Breakfast at the hotel. Optional visit to Disneyland Paris (additional cost). 
                  Explore Disneyland Park or Walt Disney Studios Park with thrilling rides and entertainment.
                </p>
                <p className="text-gray-700">
                  For those not visiting Disneyland: Free day to explore Paris independently. 
                  Dinner at an Indian restaurant. Overnight in Paris.
                </p>
              </div>
            </div>
            
            {/* Additional days would follow the same pattern */}
          </div>

          {/* Pricing & Booking */}
          <div className="bg-blue-50 p-6 rounded-xl mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Package Price</h3>
                <p className="text-gray-600">Per person based on double occupancy</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <span className="text-gray-500 line-through text-lg mr-2">7,456 AED</span>
                <span className="text-3xl font-bold text-blue-600">5,356 AED</span>
                <p className="text-green-600 font-medium">Save 2,100 AED</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition flex-1">
                Book Now
              </button>
              <button className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition flex-1">
                Enquire Now
              </button>
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included</h3>
              <ul className="space-y-3">
                {[
                  "9 nights accommodation in 4-star hotels",
                  "Daily breakfast & Indian dinners",
                  "All transfers & sightseeing in AC coach",
                  "Eiffel Tower 2nd level entrance",
                  "Seine River & Amsterdam canal cruises",
                  "Professional English-speaking guide",
                  "Travel insurance (up to $50,000)",
                  "All applicable taxes"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">What's Not Included</h3>
              <ul className="space-y-3">
                {[
                  "International airfare (can be arranged)",
                  "Optional tours (Disneyland, etc.)",
                  "Visa fees & processing",
                  "Personal expenses & tips",
                  "Travel insurance for pre-existing conditions",
                  "5% GST for payments in INR",
                  "Anything not mentioned in inclusions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Booking Widget */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-xl shadow-lg sticky top-6 border border-gray-200">
            <h3 className="text-xl font-bold text-center mb-6">Book This Package</h3>
            
            <div className="space-y-5">
              {/* Price Summary */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Regular Price:</span>
                  <span className="line-through text-gray-600">7,456 AED</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Offer Price:</span>
                  <span className="font-bold text-blue-600">5,356 AED</span>
                </div>
                <div className="text-green-600 text-sm mt-1 text-right">You save 2,100 AED</div>
              </div>

              {/* Booking Form */}
              <div>
                <label className="block text-gray-700 mb-1 font-medium">Travel Dates</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg mb-4">
                  <option>29 Nov - 02 Dec 2025</option>
                  <option>13 Dec - 16 Dec 2025</option>
                  <option>10 Jan - 13 Jan 2026</option>
                </select>

                <label className="block text-gray-700 mb-1 font-medium">Room Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg mb-4">
                  <option>Double/Triple - 5,356 AED</option>
                  <option>Single - 6,456 AED</option>
                </select>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-1 text-sm">Adults</label>
                    <input type="number" min="1" defaultValue="2" 
                      className="w-full p-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 text-sm">Children (6-11)</label>
                    <input type="number" min="0" 
                      className="w-full p-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 text-sm">Infants (0-5)</label>
                    <input type="number" min="0" 
                      className="w-full p-2 border border-gray-300 rounded-lg" />
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition mb-3">
                  Book Now
                </button>

                <div className="text-center text-sm text-gray-600">
                  <p>Need help? Call +44 114 404 0307</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
          <button className="text-blue-600 font-medium hover:underline">
            View All 1,489 Reviews
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/3">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">4.9</div>
              <div className="flex justify-center text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="text-gray-600">Based on 1,489 reviews</div>
            </div>
          </div>

          <div className="md:w-2/3">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center mb-2">
                <span className="w-12 text-sm">{stars} star</span>
                <div className="flex-1 mx-2 h-2.5 bg-gray-200 rounded-full">
                  <div 
                    className="h-2.5 bg-yellow-400 rounded-full" 
                    style={{ 
                      width: `${(stars === 5 ? 687 : stars === 4 ? 502 : stars === 3 ? 300 : 256) / 1489 * 100}%` 
                    }}
                  ></div>
                </div>
                <span className="w-12 text-sm text-right">
                  {stars === 5 ? 687 : stars === 4 ? 502 : stars === 3 ? 300 : 256}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Form */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-xl font-bold mb-4">Share Your Experience</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Rating</label>
              <div className="flex text-2xl text-gray-300">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button type="button" key={star} className="hover:text-yellow-400 focus:outline-none">
                    <FaStar />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Review</label>
              <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
            </div>
            
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              Submit Review
            </button>
          </form>
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-red-500 font-bold mr-2 mt-1">•</span>
            <span><strong>Booking deposit (1,500 AED)</strong> is non-refundable</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 font-bold mr-2 mt-1">•</span>
            <span><strong>45+ days before departure:</strong> Deposit only</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 font-bold mr-2 mt-1">•</span>
            <span><strong>44-16 days before departure:</strong> 50% of total cost</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 font-bold mr-2 mt-1">•</span>
            <span><strong>15 days or less:</strong> 100% cancellation charges</span>
          </li>
        </ul>
      </div>

      {/* Important Notes */}
      <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Important Notes</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
            <span>Itinerary is subject to change based on local conditions</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
            <span>Standard hotel check-in is 3 PM, check-out is 11 AM</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
            <span>Visa approval is at the discretion of immigration authorities</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
            <span>Minimum 20 passengers required to operate this tour</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EuropeanTourPackage;