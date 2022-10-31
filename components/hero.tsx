import React from "react";

const Hero = () => {
  return (
    <div>
      <h1 className='text-5xl text-blue-700'> Coffee <span className="text-white">Connoisseur</span></h1>
      <p className='text-xl'>Discover your local coffee shops!</p>
      <button className=' bg-blue-800 w-40 h-10'>View stores nearby</button>
    </div>
  );
};

export default Hero;
