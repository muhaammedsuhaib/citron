import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Citron Tourism</h3>
            <p className="text-gray-300 mb-4">
              We're on a journey to transform ordinary trips into extraordinary ones. We are your guide, 
              bringing you personal experiences. Wherever your travels take you, we'll show you the 
              unique and unmissable things to do in your destination.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Our Service', 'Offers', 'Blogs', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-gray-300" />
                <span className="text-gray-300">
                  Zaina Mohebi Plaza Building<br />
                  Near Burjuman Metro Station<br />
                  Bur Dubai, Dubai, UAE<br />
                  PO Box No: 181425
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-gray-300" />
                <a href="tel:+441144040307" className="text-gray-300 hover:text-white transition">
                  +44 114 404 0307
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-gray-300" />
                <a href="mailto:reception@citrontourism.com" className="text-gray-300 hover:text-white transition">
                  reception@citrontourism.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4">Payment Methods</h4>
          <p className="text-gray-300 mb-4">
            Pay any way you choose, no matter whether cash or an international payment card, 
            we support all of those payment options.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* Payment icons would go here */}
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'Google Pay'].map((method) => (
              <div key={method} className="bg-gray-800 px-4 py-2 rounded-md text-sm">
                {method}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 Citron Tourism. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Terms of Use
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;