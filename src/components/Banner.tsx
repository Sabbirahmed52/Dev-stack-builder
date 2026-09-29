import StackBanner from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <div className='flex justify-between items-center px-3 mx-15'>
      <div>
        <h1 className='text-5xl font-bold'>Build Your Ideal</h1>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        Development Stack</h1>
        <p className='text-gray-500 mt-5 '>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
          next project.</p>
        
        <div className="flex gap-4 mt-8">
 
  <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium shadow-sm ">
    Explore Technologies
  </button>

  
  <button className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-700 font-medium">
    Learn More
  </button>
</div>
      </div>

    <div>
      <img src={StackBanner} alt="Stack banner" />
    </div>
    </div>
  );
};

export default Banner;