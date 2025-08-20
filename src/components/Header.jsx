import React from 'react';
import { NavLink } from "react-router-dom";
import LogoImage from '../assets/logo.png';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
<header className="flex justify-between items-center gap-3 w-full h-16 px-4 z-100 bg-two box-border sticky top-0">
      <div className="flex items-center space-x-2">
        <NavLink to="/" className="p-1">
        <div className="w-[50px] h-[50px]">
           <img src={LogoImage} alt="Logo" />
        </div>
        </NavLink>
      </div>
      <div className="flex items-center space-x-4">
        <ul className="flex gap-4">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => isActive ? "underline" : ""}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className={({ isActive }) => isActive ? "underline" : ""}>
              Register
            </NavLink>
          </li>
        </ul>
        <div className="w-[34px] h-[34px] cursor-pointer bg-two flex justify-center items-center font-roboto">
          <span className="text-[1.25rem]">S</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
