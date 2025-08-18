import React from 'react';
import LogoImage from '../assets/logo.png';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
<header className="flex justify-between items-center gap-3 w-full h-16 px-4 z-100 bg-two box-border sticky top-0">
      <div className="flex items-center space-x-2">
        <div className="p-1">
        <div className="w-[50px] h-[50px]">
           <img src={LogoImage} alt="Logo" />
        </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <div className="w-[34px] h-[34px] cursor-pointer bg-two flex justify-center items-center font-roboto">
          <span className="text-[1.25rem]">S</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
