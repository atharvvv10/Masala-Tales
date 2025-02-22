import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Masala Tales</h3>
            <p className="text-gray-400">
              Bringing authentic Indian flavors to your kitchen with carefully curated recipes from expert chefs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Popular Recipes</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Latest Recipes</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Submit Recipe</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Vegetarian</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Non-Vegetarian</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Desserts</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Street Food</a></li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              © 2025 Masala Tales. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;