import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ContactSection = () => {
  return (
    <section id="contact" className="text-center bg-[#fffbeb] mb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#78350f] mb-4">Get In Touch</h2>
        <p className="text-gray-700 mb-8">
          We'd love to hear from you! Drop us an email and we’ll get back to you as soon as possible.
        </p>
        <div className="relative w-full max-w-md mx-auto space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 pl-12 pr-16 border text-left border-[#78350f] rounded-lg bg-[#78350f] text-[#fffbeb] placeholder-[#fffbeb] focus:border-[#fffbeb] focus:ring-0"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pb-3 pr-5 transition-transform duration-300 hover:translate-x-2">
            <ArrowForwardIcon className="text-[#fffbeb]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
