import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="mb-8">We'd love to hear from you! Whether you have a question or need support, our team is here to help.</p>
        <div className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg text-black"/>
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg text-black"/>
          <textarea placeholder="Your Message" className="w-full p-3 rounded-lg text-black"></textarea>
          <button className="bg-white text-amber-900 px-6 py-3 rounded-lg hover:bg-gray-200">Send Message</button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
