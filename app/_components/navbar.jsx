"use client"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  const pathname = usePathname();

  const navbarMenu = [
    { id: 1, name: 'About', path: '/' },
    { id: 2, name: 'Skills', path: '/skills' },
    { id: 3, name: 'Projects', path: '/projects' },
  ];

  // Handle klik di luar menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sm:px-10 px-5 bg-blue-800/5 w-full md:h-16 h-14 fixed flex justify-between items-center backdrop-blur-md z-10">
      <img src="/images/logo4.png" className="xs:w-44 w-32" alt="Logo" />

      {/* Desktop menu */}
      <ul className="text-white font-bold font-inter gap-8 hidden md:flex">
        {navbarMenu.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className={`${
                pathname === item.path
                  ? "text-blue-400 drop-shadow-[0_0px_15px_#0073e6]"
                  : "hover:text-blue-400"
              }`}
              title={item.name}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div ref={menuRef} className="w-8 h-8 overflow-visible rounded-l-md">
          <div className="relative">
            <img
              src="/icons/burger-icons.svg"
              alt="Menu"
              onClick={() => setShowMenu(!showMenu)}
              className={`md:hidden h-8 w-8 ${showMenu ? "hidden" : "block"}`}
            />
            {showMenu && (
              <img
                src="/icons/closeMenu.svg"
                alt="Close"
                onClick={() => setShowMenu(false)}
                className="md:hidden h-8 w-8"
              />
            )}
          </div>
          <div
            className={`flex flex-col w-32 duration-300 mt-6 font-bold text-white rounded-l-md bg-blue-600 absolute right-0 ${
              showMenu ? "translate-x-0" : "translate-x-32"
            }`}
          >
            {navbarMenu.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setShowMenu(false)}
                className={`text-center py-4 px-10 hover:bg-blue-800 ${
                  pathname === item.path ? "bg-blue-800" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
