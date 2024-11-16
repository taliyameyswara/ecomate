import React from "react";
import { FaWhatsapp, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-white text-primary px-4 shadow">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* WhatsApp Community Link (left) */}
        <div>
          <a
            href="https://chat.whatsapp.com/C70ArTg7WiV3e83XmQAdt6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-primary hover:underline"
          >
            <FaWhatsapp className="mr-2" /> Whatsapp Community
          </a>
        </div>

        <p className="text-gray-400">© 2024 Ecomate. All Rights Reserved.</p>

        {/* Social Media Links (right) */}
        <div className="flex items-center space-x-4">
          <a
            href="https://x.com/eco_matee?t=Btn6AOCtSw5gX-Qvx4plsA&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com/eco_mate_id?igsh=bTM4YmZ3ZXhncm5p"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@eco_matee?_t=8rNdAMn853g&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            <FaTiktok size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
