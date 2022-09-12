import Links from "./Links";
import Social from "./Social";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("home");

  const handleMenu = (e) => {
    setShowMenu(!showMenu);
  };

  const handleActive = (e) => {
    setActive(e.target.id);
  };

  window.addEventListener("click", (e) => {
    if (e.target.id !== "menu") {
      setShowMenu(false);
    }
  });


  return (
    <div className='flex  bg-white justify-between align-center h-16 px-4 py-2'>
    <div className='lg:hidden'></div>
    <img
      src={logo}
      alt='website logo'
      className='justify-self-end ml-8 translate-y-8 w-auto h-14'
    />
    <div className='flex flex-col justify-between items-end relative'

  >
      <img
        id='menu'
        src={menu}
        alt='ham burger manu icon'
        className='w-auto h-8 mt-2 lg:hidden'
        onClick={handleMenu}
      />
     <div
          className={`${
            showMenu ? "show" : "hide"
          } flex flex-col md:hidden text-white bg-blue1 h-104  absolute top-14 -right-4 z-20 px-8 py-10 text-xl overflow-x-auto w-60 space-y-20 lg:hidden`}
      
    >
        <Links />
        <Social />
      </div>
      <div className='hidden lg:block space-x-10 text-lg font-semibold mt-2'>
        <Links handleActive={handleActive} active={active} />
      </div>
    </div>
  </div>
    
  );
};

export default Navbar;
