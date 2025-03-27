import { FaStar, FaMapMarkerAlt, FaClock, FaPlane, FaUtensils, FaHotel } from 'react-icons/fa';

const EuropeanTour = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="hover:text-blue-600">Home</span> &gt; 
        <span className="hover:text-blue-600"> Holiday</span> &gt; 
        <span className="text-blue-600"> European Extravaganza</span>
      </div>

      {/* Tour Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          European Elegance: A Journey Through Paris, Amsterdam, Frankfurt & Zurich
        </h1>
        <div className="flex items-center text-blue-600 mb-4">
          <FaMapMarkerAlt className="mr-1" />
          <span>Western Europe</span>
        </div>
        <div className="flex items-center text-yellow-500 mb-4">
          <FaStar className="mr-1" />
          <span>4.9 from 1400+ Reviewers</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaClock className="mr-1" />
          <span>9 Nights in Europe: From Paris to Zurich</span>
          <span className="mx-4">|</span>
          <span>Travel Dates: 29 Nov - 02 Dec 2025</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="lg:w-2/3">
          {/* Image Gallery */}
          <div className="bg-gray-200 h-96 rounded-xl mb-6">
            {/* Replace with actual image carousel */}
            <div className="flex items-center justify-center h-full text-gray-500">
              Tour Image Gallery
            </div>
          </div>

          {/* Tour Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Tour</h2>
            <p className="text-gray-700 mb-6">
              Embark on a captivating 10-day journey through the heart of Europe, where timeless 
              elegance meets modern charm. Begin in the romantic streets of Paris, the City of Light, 
              where iconic landmarks like the Eiffel Tower and Louvre await. Next, explore the vibrant 
              canals and artistic heritage of Amsterdam, a city brimming with culture and history. 
              Continue to Frankfurt, a dynamic blend of towering skyscrapers and medieval old-town charm. 
              Conclude your adventure in Zurich, Switzerland's financial hub, surrounded by stunning 
              alpine landscapes and pristine lakes. This package offers the perfect blend of history, 
              culture, and scenic beauty, creating memories that will last a lifetime.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <FaHotel className="text-blue-500 mr-2" />
                Hotel & Destination
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Paris: Hôtel Mercure Paris Centre Tour Eiffel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Amsterdam: 4-star central hotel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Frankfurt: Modern city center hotel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Zurich: Lakeside accommodation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <FaClock className="text-blue-500 mr-2" />
                Tour Duration
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>10 Days & 9 Nights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>4 Countries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Daily guided tours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Free time for exploration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pricing</h2>
            <div className="flex flex-wrap gap-6 mb-4">
              <div>
                <p className="text-gray-600">Double/Triple</p>
                <p className="text-3xl font-bold text-blue-600">5,356 AED</p>
                <p className="text-gray-500 line-through">7,456 AED</p>
              </div>
              <div>
                <p className="text-gray-600">Single</p>
                <p className="text-3xl font-bold text-blue-600">6,456 AED</p>
                <p className="text-gray-500 line-through">8,456 AED</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
                Book Now
              </button>
              <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
                Enquire Now
              </button>
            </div>
          </div>

          {/* Itinerary */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Itinerary</h2>
            
            {/* Day 1 */}
            <div className="border-l-4 border-blue-500 pl-4 mb-6">
              <h3 className="text-xl font-semibold mb-2">Day 1: Arrival in Paris</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <p className="text-gray-700 mb-2">
                  Arrival at Paris Charles de Gaulle Airport. Transfer to your hotel for check-in (on your own).
                  Free time to relax and explore nearby attractions at your own pace. Overnight in Paris.
                </p>
                <p className="text-sm text-gray-500">
                  Please note: The Tour Manager will meet you at the hotel. Standard check-in time is 1500 hrs.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-2 flex items-center">
                    <FaPlane className="text-blue-500 mr-2" />
                    Departure Flight
                  </h4>
                  <div className="text-sm">
                    <p>Emirates Airlines EK072</p>
                    <p>Economy Class | A380</p>
                    <p>Dubai (DXB) to Paris (CDG)</p>
                    <p>Duration: 6 hrs 35 mins</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-2 flex items-center">
                    <FaUtensils className="text-blue-500 mr-2" />
                    Meals
                  </h4>
                  <p className="text-sm">Packed Indian dinner delivered to the hotel.</p>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="border-l-4 border-blue-500 pl-4 mb-6">
              <h3 className="text-xl font-semibold mb-2">Day 2: Optional Disneyland Tour</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                <p className="text-gray-700 mb-2">
                  Breakfast at the hotel. Optional visit to Disneyland Paris. Explore Disneyland Park or 
                  Walt Disney Studios Park. Enjoy thrilling rides, entertainment, and family fun.
                </p>
                <p className="text-gray-700">
                  For those not visiting Disneyland: Free time to explore Paris independently. Dinner at an Indian restaurant. Overnight in Paris.
                </p>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Please note: Packed dinner provided for guests not opting for Disneyland.
                Meals Included: Continental Breakfast and Indian Dinner.
              </p>
            </div>

            {/* Continue with other days... */}
          </div>
        </div>

        {/* Right Column - Booking Widget */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-xl shadow-md sticky top-4">
            <h3 className="text-xl font-bold mb-4">Book This Tour</h3>
            
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span>Regular Price:</span>
                <span className="line-through text-gray-500">7,456 AED</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Offer Price:</span>
                <span className="text-blue-600">5,356 AED</span>
              </div>
              <div className="text-sm text-green-600 mt-1">Save 2,100 AED</div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-1">Travel Date</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>29 Nov - 02 Dec 2025</option>
                  <option>13 Dec - 16 Dec 2025</option>
                  <option>10 Jan - 13 Jan 2026</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Room Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>Double/Triple - 5,356 AED</option>
                  <option>Single - 6,456 AED</option>
                </select>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-gray-700 mb-1">Adults</label>
                  <input type="number" min="1" defaultValue="2" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Children (6-11)</label>
                  <input type="number" min="0" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Infants (0-5)</label>
                  <input type="number" min="0" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition duration-300 mb-4">
              Book Now
            </button>

            <div className="text-center text-sm text-gray-600">
              <p>Need help? Call +44 114 404 0307</p>
            </div>
          </div>
        </div>
      </div>

      {/* Inclusions & Exclusions */}
      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Inclusions</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>Travel insurance up to 50,000 USD</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>Visa fee assistance</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>Accommodation with daily breakfast and dinner</span>
            </li>
            {/* Add more inclusions */}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Exclusions</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Round-trip economy class air tickets</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>5% GST if payment is made in INR</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Optional tours mentioned in the itinerary</span>
            </li>
            {/* Add more exclusions */}
          </ul>
        </div>
      </div>

      {/* Reviews */}
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews (1,489)</h2>
        <div className="flex items-center mb-6">
          <div className="text-4xl font-bold mr-4">4.9</div>
          <div className="mr-4">
            <div className="flex text-yellow-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <div className="text-sm text-gray-600">Based on 1,489 reviews</div>
          </div>
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center mb-1">
                <span className="w-10 text-sm">{stars} star</span>
                <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-yellow-400 rounded-full" 
                    style={{ width: `${(stars === 5 ? 687 : stars === 4 ? 502 : stars === 3 ? 300 : 256) / 1489 * 100}%` }}
                  ></div>
                </div>
                <span className="w-10 text-sm text-right">
                  {stars === 5 ? 687 : stars === 4 ? 502 : stars === 3 ? 300 : 256}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold mb-4">Write a Review</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Rating</label>
              <div className="flex text-2xl text-gray-300">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="hover:text-yellow-400 cursor-pointer" />
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Review</label>
              <textarea className="w-full p-3 border border-gray-300 rounded-lg h-32" placeholder="Share your experience..."></textarea>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuropeanTour;