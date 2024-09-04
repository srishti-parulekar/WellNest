import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Online Counseling</h3>
            <p className="text-gray-600">Get support from licensed professionals in the comfort of your home.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Community Support</h3>
            <p className="text-gray-600">Join groups and forums to connect with others facing similar challenges.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Mental Health Resources</h3>
            <p className="text-gray-600">Access a wealth of resources, articles, and tools to improve your well-being.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
