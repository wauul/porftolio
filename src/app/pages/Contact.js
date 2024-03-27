// components/Contact.js
"use client"
import React from 'react';
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center" id="contact">
      <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
      
      <div className="flex justify-center gap-6 mb-8">
        <a href="mailto:your.email@example.com" title="Email" className="text-2xl">
          <FaEnvelope />
        </a>
        <a href="tel:+1234567890" title="Phone" className="text-2xl">
          <FaPhone />
        </a>
      </div>

      <div className="flex justify-center gap-6 mb-8">
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" title="Facebook" className="text-2xl">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-2xl">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-2xl">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-2xl">
          <FaGithub />
        </a>
        <a href="https://api.whatsapp.com/send?phone=+1234567890" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="text-2xl">
          <FaWhatsapp />
        </a>
      </div>

      {/* Optional: Uncomment if you decide to include the resume link here as well */}
      <div className="mb-8">
        <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Download Resume</a>
      </div>
    </div>
  );
};

export default Contact;
