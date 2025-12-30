import React, { useState } from 'react';
import { IoSunny, IoMoon, IoMenu, IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleTheme = () => {
        const nextTheme = isDarkMode ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className='footer border-b border-slate-800 px-6 py-4 sticky top-0 w-full z-50'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>

                <Link to='/' className='text-lg font-bold tracking-tight text-white'>
                    Vishesh
                </Link>

                <div className='hidden md:flex items-center space-x-8'>
                    <Link to='/' className='hover:text-white transition-colors'>Home</Link>
                    <Link to='/project' className='hover:text-white transition-colors'>Project</Link>
                    <Link to='/contact' className='hover:text-white transition-colors'>Contact Us</Link>
                    <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-slate-800 transition-all">
                        {isDarkMode ? <IoSunny size={22} className="text-yellow-400" /> : <IoMoon size={22} className="text-slate-400" />}
                    </button>
                </div>

                {/* Mobile Icons*/}
                <div className='flex items-center md:hidden space-x-4'>
                    <button onClick={toggleTheme}>
                        {isDarkMode ? <IoSunny size={22} className="text-yellow-400" /> : <IoMoon size={22} className="text-slate-400" />}
                    </button>
                    <button onClick={toggleMenu} className="text-slate-200 focus:outline-none">
                        {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden absolute top-full left-0 w-full bg-[#0f172a] border-b border-slate-800 py-4 px-6 flex flex-col space-y-4 shadow-xl'>
                    <Link to='/' onClick={toggleMenu} className='hover:text-white py-2'>Home</Link>
                    <Link to='/project' onClick={toggleMenu} className='hover:text-white py-2'>Project</Link>
                    <Link to='/contact' onClick={toggleMenu} className='hover:text-white transition-colors'>Contact Us</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;