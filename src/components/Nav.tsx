import Logo from '../assets/logo-text.png';

const Nav = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className='container mx-auto flex items-center justify-between py-3 px-20'>
      <img src={Logo} alt="" />
        
        <ul className="flex gap-4 items-center ">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
     <div className="flex items-center gap-4">
  <button className="text-gray-700 px-4 py-2">
    Sign In
  </button>

  <button className="bg-pink-600 text-white px-7 py-3 rounded-full">
    Sign Up
  </button>
      </div>
</div>
      </nav> 
    </div>
  );
};

export default Nav;