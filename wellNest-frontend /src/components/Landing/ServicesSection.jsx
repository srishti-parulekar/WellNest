import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#fffbeb] text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-[#78350f]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#fffdf5] shadow-md p-8 rounded-lg border border-[#78350f] transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-3 text-[#78350f]">Online Counseling</h3>
            <p className="text-gray-700">
              Get support from licensed professionals in the comfort of your home.
            </p>
          </div>
          <div className="bg-[#fffdf5] shadow-md p-8 rounded-lg border border-[#78350f] transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-3 text-[#78350f]">Community Support</h3>
            <p className="text-gray-700">
              Join groups and forums to connect with others facing similar challenges.
            </p>
          </div>
          <div className="bg-[#fffdf5] shadow-md p-8 rounded-lg border border-[#78350f] transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-3 text-[#78350f]">Mental Health Resources</h3>
            <p className="text-gray-700">
              Access a wealth of resources, articles, and tools to improve your well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
