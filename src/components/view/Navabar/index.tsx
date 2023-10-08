'use client'
import Logo from '@/components/assets/Images/ED-Review.png';
import BellIcon from '@/components/assets/icons/BellIcon';
import Profile from '@/components/assets/icons/Profile';
import { navigationItems } from '@/components/utils/arrays';
import Image from 'next/image';
import { useState } from 'react';
import Dropdown from './Dropdown';
import Link from 'next/link';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className='bg-white'>
        <div className='max-w-screen-xl mx-auto p-4 flex items-center justify-between'>
          <Image src={Logo} alt="Logo" height={22} width={98} className='cursor-pointer' />
          <div className='flex items-center space-x-[42px]'>
            <ul className='hidden cursor-pointer md:flex items-center gap-8 text-md font-semibold'>
              {navigationItems.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
              
            </ul>
            <BellIcon />
            <div className='relative inline-block text-left'>
              <div className='cursor-pointer' onClick={toggleDropdown}>
                <Profile />
              </div>
              {showDropdown && (
                <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                  <div className='py-1'>
                    {navigationItems.map((item, index) => (
                      <Link
                        key={index}
                        href='#' // Replace with actual links
                        className='  block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button className='hidden font-semibold rounded-sm md:block h-12 w-40 bg-[#67E776]'>
              Post A Review
            </button>
          </div>
        </div>

      </div>
      <div className=''>
        <Dropdown />
      </div>
    </>
  );
};

export default NavBar;
