import React, { useState, useEffect } from 'react';
import { herologo, nav_links, ppi } from '../constants';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'
import Button from './Button';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const hash = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div >
            <nav className={`max-w-7xl  fixed top-0 left-0 right-0  z-50 transition-all duration-300 border-0 ${isScrolled ? 'bg-[#fbf9f4] py-2  shadow-sm border border-gray-200 rounded  mx-8 max-sm:mx-4  mt-2 ' : 'bg-transparent py-6'}`}>
                <div className=" mx-auto px-4">
                    <div className="flex items-center h-full justify-between">
                        <div className="shrink-0">
                            <a
                                href="/"
                                className="font-serif  text-2xl  font-bold italic tracking-tight text-gray-900">
                                <img src={herologo} alt="" className='w-15'/>
                            </a>
                        </div>
                        <div className=" hidden md:flex items-center  justify-center gap-8">
                            {nav_links.map((link, idx) => (
                                <Link key={idx} onClick={() => { hash() }} className=" text-medium font-lg  text-slate-800 active:text-black hover:text-black transition-colors duration-200" to={link.href} >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Link
                                onClick={() => { hash() }}
                                to='muneeb-portfolio/contact'
                            >
                                <Button title={'Contact'} className={'text-gray-50 bg-[#212121]'}  />
                            </Link>
                        </div>
                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-gray-600 hover:text-black focus:outline-none"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu Drawer */}
            </nav>

            {isOpen && (
                <div className="bg-[#f9f6ed] mobile-nav fixed z-999 flex flex-col h-screen w-screen border-b border-gray-100 shadow-lg md:hidden  py-4 px-4 space-y-4">

                    <div className=" flex items-center justify-between border-b pb-4  border-[#d1d1d1]">
                        <div className="shrink-0 py-3 px-2">
                            <a
                                href="/"
                                className="font-serif text-2xl  font-bold italic tracking-tight text-gray-900">
                                <img src={herologo} alt="" className='w-15'/>
                            </a>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-gray-600 hover:text-black focus:outline-none"
                            >
                                {isOpen ? <X size={28}  /> : <Menu size={28} />}
                            </button>
                        </div>

                    </div>
                    <div className='mobile-nav-links'>
                        {nav_links.map((link) => (
                            <div>
                                <ul>
                                    <li><a>
                                        <Link to={link.href}

                                            key={link.label}
                                            className=""
                                            onClick={() => { setIsOpen(false), hash() }}
                                        >
                                            {link.label}
                                        </Link> </a></li>
                                </ul>

                            </div>
                        ))} <Link
                            to='muneeb-portfolio/contact'
                            className=""
                            onClick={() => { setIsOpen(false), hash() }}
                        >
                            Contact
                        </Link> </div>
                </div>
            )}
        </div>
    )
}

export default Navbar