import React, { useState } from 'react';
import { Home, BriefcaseBusiness, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';


const MobileBottomNav = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const hash = () => {
        window.scrollTo(0, 0)
    }

  const navItems = [
    { name: 'Home', icon: Home, href: 'muneeb-portfolio/' },
    { name: 'Projects', icon: BriefcaseBusiness , href: 'muneeb-portfolio/projects' },
    { name: 'About', icon: User, href: 'muneeb-portfolio/about' },
    { name: 'Contact', icon: Phone, href: 'muneeb-portfolio/contact' },
  ];

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-100">
      {/* Navigation Bar Container */}
      <div className="bg-[#fbf9f4] shadow-[0_-1px_30px_rgba(0,0,0,0.07)] border-t border-gray-50 pt-3 pb-2 px-6">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            const Icon = item.icon;

            return (
              <Link
              to={item.href}
                key={item.name}
                onClick={() => {setActiveTab(item.name), hash()}}
                className="flex flex-col items-center gap-1 min-w-[70px] transition-all duration-300 active:scale-95"
              >
                <div className="relative">
                  <Icon
                    size={24}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    className={`${
                      isActive ? 'text-orange-400' : 'text-gray-400'
                    } transition-colors duration-300`}
                  />

                  {isActive && (
                    <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full -z-10" />
                  )}
                </div>

                <span
                  className={`text-[9px] font-bold tracking-tight ${
                    isActive ? 'text-orange-400' : 'text-gray-400'
                  } transition-colors duration-300`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;
