
import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
          <div className='container mx-auto py-4 px-8' >
            <nav className='flex justify-between bg-white-200'>
        
            <div>
          <img src= {Logo} alt="" />
        </div>
        <ul className=' flex gap-4' item-center>
          <li className='text-pink-600'>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
           <div className='flex gap-4'>
            <button >Sign in</button>
        <button className='bg-pink-600 rounded-full px-6 py-2  justify-center text-white'>sign up</button>
           </div>
        
       
      </nav>
          </div>
            
    
    );
};

export default Nav;