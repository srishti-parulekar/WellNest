import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="flex-grow flex flex-col justify-center items-center text-center px-4 py-20" style={{ color: '#78350f' }}> 
      <h1 className="text-5xl font-bold mb-4">Your Safe Space for Mental Health</h1>
      <p className="text-xl mb-6">Join our community and start your journey towards mental wellness.</p>
      <div className="flex justify-center space-x-4">
        <button className="bg-amber-900 px-6 py-3 rounded-lg hover:bg-amber-700" style={{ color: '#fffbeb' }}>Get Started</button>
        <button className="text-amber-900 px-6 py-3 rounded-lg hover:bg-gray-200" style={{ backgroundColor: '#fffbeb' }}>Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;
