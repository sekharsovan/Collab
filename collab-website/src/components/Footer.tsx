import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold tracking-wider">COLLAB</div>
            <p className="text-gray-600 mt-2">
              © 2025 Collab. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors duration-300 cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors duration-300 cursor-pointer"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors duration-300 cursor-pointer"
            >
              Careers
            </a>
          </div>
          <div className="flex space-x-4 mt-6 md:mt-0">
            <div className="text-xl">
              <i className="fab fa-cc-visa"></i>
            </div>
            <div className="text-xl">
              <i className="fab fa-cc-mastercard"></i>
            </div>
            <div className="text-xl">
              <i className="fab fa-cc-paypal"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;