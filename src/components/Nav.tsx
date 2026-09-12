


// const Nav = () => {
//     return (
//           <div className='container mx-auto py-4 px-8' >
//             <nav className='flex justify-between bg-white-200'>
        
//             <div>
//           <img src= {Logo} alt="" />
//         </div>
//         <ul className=' flex gap-4' item-center>
//           <li className='text-pink-600'>Home</li>
//           <li>Technologies</li>
//           <li>Projects</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//            <div className='flex gap-4'>
//             <button >Sign in</button>
//         <button className='bg-pink-600 rounded-full px-6 py-2  justify-center text-white'>sign up</button>
//            </div>
        
       
//       </nav>
//           </div>
            
    
//     );
// };

// export default Nav;import Logo from '../assets/logo-text.png'


import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto py-4 px-4 md:px-8">
      <nav className="flex items-center justify-between bg-white-200">
        <div>
          <img src={Logo} alt="Dev Stack" className="h-8 w-auto" />
        </div>

        <ul className="hidden md:flex items-center gap-4">
          <li className="text-pink-600">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button>Sign in</button>
          <button className="bg-pink-600 rounded-full px-6 py-2 justify-center text-white">
            Sign up
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-gray-900"></span>
          <span className="w-6 h-0.5 bg-gray-900"></span>
          <span className="w-6 h-0.5 bg-gray-900"></span>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 border-t pt-4">
          <ul className="flex flex-col gap-3">
            <li className="text-pink-600">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="flex flex-col gap-3">
            <button>Sign in</button>
            <button className="bg-pink-600 rounded-full px-6 py-2 text-white">
              Sign up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;