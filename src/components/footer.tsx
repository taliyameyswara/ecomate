import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-primary px-4 shadow">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold text-primary mb-3">
            Contact Person
          </h2>
          <p>John Doe</p>
          <p>Email: johndoe@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold text-primary mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center md:text-right">
          <p className="text-gray-400 mt-4 md:mt-0">
            © 2024 Ecomate. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
