import React from 'react'
import logo from "../assets/logomain.png"

const Navbar = () => {
  return (
    <nav className='bg-transparent absolute top-0 left-0 w-full z-50  '>
    <div className='max-w-container mx-auto'>
        <div className='flex items-center py-10'>
        <div className='w-1/3'>
            <img className='cursor-pointer ' src={logo} alt="logo" />
        </div>
        <div className='w-2/3'>
            <ul className='flex font-inter font-semibold text-[18px] text-white capitalize '>
                <li className='mx-6'>
                    <a 
                    className="text-[#6A4DF4] relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white hover:after:w-full "
                    href="#">
                        Home
                    </a>
                </li>
                <li className='mx-6'>
                <a 
                    className="relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white hover:after:w-full "
                    href="#">
                        About
                    </a>
                </li>
                <li className='mx-6 relative group'>
                    <a 
                        className="relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white hover:after:w-full "
                        href="#">
                        Service
                    </a>
                    {/* <ul className='bg-transparent absolute opacity-0 z-10 left-[-55px] top-[50px] w-[200px]  text-black text-center '>
                        <li>Jobs</li>
                        <li>Jobs</li>
                        <li>Jobs</li>
                        <li>Jobs</li>
                    </ul> */}
                </li>
                <li className='mx-6'>
                <a 
                    className="relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white hover:after:w-full "
                    href="#">
                        Careers
                    </a>
                </li>
                <li className='mx-6'>
                <a 
                    className="relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white hover:after:w-full "
                    href="#">
                        Contact
                    </a>
                </li>
                <li className='mx-16 '>
                    <a className='bg-[#6A4DF4] rounded-xl px-[42px] py-4  text-white hover:bg-black hover:duration-700 hover:ease-in-out ' href="#">CONTACT</a>
                </li>
            </ul>
        </div>
        </div>
    </div>
</nav>
  )
}

export default Navbar