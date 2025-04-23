'use client'

const navItems = [
    {
        name: 'Home'
    },
    {
        name: 'About Us'
    },
    {
        name: 'Initiatives'
    },
    {
        name: 'Blog'
    },
]

import { Menu, X } from 'lucide-react';

import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className='bg-[#FFFFFF]'>
            <header className="  max-w-7xl mx-auto w-full flex justify-between items-center px-4 sm:px-6 md:px-8 py-2 relative">
                <img src="/assets/pdglogo.png" alt='Purpose-Drive Global logo' className="h-10 md:h-12" />

                <button
                    className="md:hidden text-black  focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    <nav>
                        <ul className="flex items-center gap-4 lg:gap-8">
                            {navItems.map((item) => (
                                <li key={item.name} className="text-black whitespace-nowrap text-sm lg:text-base font-semibold font-inter hover:text-[#FFC805]">
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button className="bg-transparent border-2 border-[#FFBF00] rounded-[1.125rem] text-black px-3 py-1 lg:px-4 lg:py-3 text-sm lg:text-base font-semibold hover:bg-[#FFBF00] hover:text-white transition-colors">
                        Volunteer
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 md:hidden z-50">
                        <nav className="flex flex-col">
                            <ul className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <li key={item.name} className="text-black text-base font-semibold font-inter hover:text-[#FFC805]">
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-transparent border-2 border-[#FFBF00] rounded-[1.25rem] text-black px-4 py-2 font-semibold mt-6 hover:bg-[#FFBF00] hover:text-white transition-colors w-full">
                                Volunteer
                            </button>
                        </nav>
                    </div>
                )}
            </header>
        </section>
    );
}