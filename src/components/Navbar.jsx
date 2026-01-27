import { useState, useEffect } from 'react';
import { herologo, menuprofile, nav_links } from '../constants';
import {  NavLink } from 'react-router-dom'
import Button from './Button';
import ScrollAnimation from './ScrollAnimation';

const Navbar = () => {

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
        <div className=''>
            <nav className={`max-w-7xl   md:fixed absolute top-0 left-0 right-0  z-100 transition-all duration-300 border-0 ${isScrolled ? 'sm:bg-[#fbf9f4] sm:py-2  sm:shadow-sm   sm:rounded-xl  sm:mx-8  sm:mt-3 ' : 'bg-transparent py-4'}`}>
                <div className=" mx-auto px-4">
                    <div className="flex items-center h-full justify-between">
                        <div className="shrink-0">
                            <ScrollAnimation direction="left">
                            <a
                                href="/muneeb-portfolio/">
                                <img src={herologo} loading='lazy' alt="" className='w-15' />
                            </a>
                            </ScrollAnimation>
                        </div>
                        <div className=" hidden md:flex items-center  justify-center gap-8">
                            {nav_links.map((link, idx) => (
                                <NavLink key={idx} onClick={() => { hash() }}   className=" text-medium font-lg  hover:text-[#F97316] transition-colors duration-200 text-black" to={link.href}  >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <NavLink
                                onClick={() => { hash() }}
                                to='/contact'
                            >
                                <Button title={'Contact'} className={'text-gray-50 bg-[#212121]'} />
                            </NavLink>
                        </div>
                        {/* Mobile Menu Button */}
                        <div className="relative md:hidden">
                            <img src={menuprofile} loading='lazy' alt="" className=' w-14 h-14 rounded-full border border-[#f3eede] object-cover' />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar