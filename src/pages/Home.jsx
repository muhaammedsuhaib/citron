import { useEffect } from "react";
import {
  FiArrowRight,
  FiStar,
  FiMapPin,
  FiClock,
  FiUsers,
} from "react-icons/fi";
import EuropeanTour from "./EuropeanTour";
import EuropeanTourPackage from "./EuropeanTourPackage";
// import Navbar from './Navbar';
// import Footer from './Footer';

const Home = () => {
  // Sample data for popular destinations
  const popularDestinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      image: "/bali.jpg",
      price: "$1200",
      rating: 4.8,
      duration: "7 Days",
    },
    {
      id: 2,
      name: "Santorini, Greece",
      image: "/santorini.jpg",
      price: "$1800",
      rating: 4.9,
      duration: "5 Days",
    },
    {
      id: 3,
      name: "Kyoto, Japan",
      image: "/kyoto.jpg",
      price: "$2500",
      rating: 4.7,
      duration: "10 Days",
    },
  ];

  // Sample data for special offers
  const specialOffers = [
    {
      id: 1,
      title: "Summer Getaway",
      discount: "30% OFF",
      description: "Book your summer vacation now and save big!",
      image: "/summer-offer.jpg",
    },
    {
      id: 2,
      title: "Honeymoon Package",
      discount: "2 Nights Free",
      description: "Special deals for newlyweds",
      image: "/honeymoon-offer.jpg",
    },
  ];

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="/bannar.png"
            alt="Travel Banner"
            className="w-full h-full object-cover"
            loading="lazy" // For better performance
          />
          <div className="absolute inset-0 bg-black/30"></div>{" "}
          {/* Semi-transparent overlay */}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 z-10">
          <div className="max-w-2xl text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Discover Amazing{" "}
              <span className="text-blue-300">Travel Deals</span>
            </h1>
            <p className="text-lg sm:text-xl text-white mb-8 opacity-90">
              Explore our exclusive offers and plan your dream vacation today
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 shadow-lg hover:shadow-xl">
                View All Offers
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Scrolling Indicator (optional) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </section>
      <EuropeanTourPackage />

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Popular Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our most sought-after travel destinations loved by
              thousands of travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDestinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center">
                    <FiStar className="text-yellow-400 mr-1" />
                    <span className="font-medium">{destination.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">
                      {destination.name}
                    </h3>
                    <span className="text-blue-600 font-bold">
                      {destination.price}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <FiMapPin className="mr-2" />
                    <span className="text-sm">Asia</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <div className="flex items-center">
                      <FiClock className="mr-2" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FiUsers className="mr-2" />
                      <span>12+</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300 flex items-center justify-center">
                    View Details <FiArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition duration-300">
              View All Destinations
            </button>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Special Offers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't miss our exclusive deals and limited-time offers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specialOffers.map((offer) => (
              <div
                key={offer.id}
                className="relative rounded-xl overflow-hidden h-64"
              >
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 flex items-center p-8">
                  <div>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                      {offer.discount}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-white mb-4">{offer.description}</p>
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide the best service to make your journey memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiStar className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Best Price Guarantee
              </h3>
              <p className="text-gray-600">
                We guarantee the best prices for all our tours. Found a better
                price? We'll match it!
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Expert Guides
              </h3>
              <p className="text-gray-600">
                Our professional guides will make your trip unforgettable with
                their knowledge and passion.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Customizable Tours
              </h3>
              <p className="text-gray-600">
                Tailor your perfect trip with our customizable tour packages to
                suit your preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from travelers who have experienced our tours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="/customer1.jpg"
                    alt="Customer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                  <div className="flex text-yellow-400">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Our trip to Bali was absolutely perfect! The itinerary was
                well-planned and our guide was knowledgeable. Will definitely
                book again!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="/customer2.jpg"
                    alt="Customer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Michael Chen</h4>
                  <div className="flex text-yellow-400">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "The Japan tour exceeded all our expectations. Every detail was
                taken care of, and we got to experience authentic Japanese
                culture."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to start planning your dream vacation
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition duration-300">
              Get a Free Quote
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition duration-300">
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
