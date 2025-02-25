"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDesktopMenuAccount, setShowDesktopMenuAccount] = useState(false);
  const [showMobileMenuAccount, setShowMobileMenuAccount] = useState(false);
  const [changeNavbarColor, setChangeNavbarColor] = useState(false);

  const handleToggle = (setter) => () => setter((prev) => !prev);

  useEffect(() => {
    const changeBackground = () => setChangeNavbarColor(window.scrollY >= 50);
    window.addEventListener('scroll', changeBackground);

    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <div className={`fixed z-20 flex ${changeNavbarColor ? 'bg-secondary' : 'bg-transparent'} items-center justify-between w-full px-5 py-4 overflow-visible xl:py-0`}>
      {/* Logo */}
      <div className='flex items-center gap-2'>
        <img src="/images/iconeps_logo.png" alt="ICONEPS Logo" className='w-8 sm:w-11' />
        <h1 className='text-2xl text-white sm:text-4xl font-robotoBold'>ICONEPS</h1>
      </div>

      {/* Desktop Menu */}
      <div className='hidden sm:flex items-center text-white font-roboto'>
        {['/', '/jadwal', '/pelatihan'].map((path, index) => (
          <Link key={index} href={path} className="relative px-4 py-4 group">
            <p>{['Home', 'Jadwal', 'Pelatihan'][index]}</p>
            <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 bg-green group-hover:w-full"></div>
          </Link>
        ))}

        <button onClick={handleToggle(setShowDesktopMenuAccount)} className="px-4 py-2 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="30px" height="30px" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
        </button>

        {/* Desktop Dropdown Menu */}
        <div className={`absolute top-14 shadow-2xl z-20 bg-white right-0 transition-transform duration-200 ${showDesktopMenuAccount ? 'translate-x-0' : 'translate-x-40'}`}>
          <Link href="/profile" className='flex items-center gap-1 px-4 py-2' onClick={handleToggle(setShowDesktopMenuAccount)}>
            <img src="/icons/setting.svg" className='w-5' alt="Edit Profil" />
            <p className='text-sm text-black'>Edit Profil</p>
          </Link>
          <Link href="/logout" className='flex items-center gap-1 px-4 py-2' onClick={handleToggle(setShowDesktopMenuAccount)}>
            <img src="/icons/logout.svg" className='w-5' alt="Logout" />
            <p className='text-sm text-black'>Logout</p>
          </Link>
        </div>
      </div>

      <img src="/icons/burgerIcon.svg" className='sm:hidden w-8 cursor-pointer' alt="menu icon" onClick={handleToggle(setShowMenu)} />

      <div className={`fixed overflow-x-hidden top-0 right-0 bg-white pt-3 items-center shadow-2xl z-30 duration-500 rounded-bl-3xl ${showMenu ? 'w-44' : 'w-0'}`}>
        <img src="/icons/close.svg" className='w-10 mb-2 ml-4 cursor-pointer' alt="close icon" onClick={handleToggle(setShowMenu)} />

        {['/', '/jadwal', '/pelatihan'].map((path, index) => (
          <Link key={index} href={path} className='px-5 block py-4 text-2xl border-b-2 font-semibold' onClick={handleToggle(setShowMenu)}>
            {['Home', 'Jadwal', 'Pelatihan'][index]}
          </Link>
        ))}
        <div className='font-semibold flex items-baseline gap-2 px-5 py-4 text-2xl cursor-pointer' onClick={handleToggle(setShowMobileMenuAccount)}>
          <p>Akun</p>
          <img src="/icons/arrow.svg" className={`w-4 ${showMobileMenuAccount ? 'rotate-180' : 'rotate-90'} duration-100`} alt="arrow icon" />
        </div>

        <div className={`text-xl overflow-hidden ${showMobileMenuAccount ? 'max-h-96' : 'max-h-0'} duration-200`}>
          <Link href="/profile" className='flex items-center gap-1 px-6 py-3' onClick={handleToggle(setShowMenu)}>
            <img src="/icons/setting.svg" alt="Edit Profil" />
            <p className='text-black'>Edit Profil</p>
          </Link>
          <Link href="/logout" className='flex items-center gap-1 px-6 py-3' onClick={handleToggle(setShowMenu)}>
            <img src="/icons/logout.svg" alt="Logout"/>
            <p className='text-black'>Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
