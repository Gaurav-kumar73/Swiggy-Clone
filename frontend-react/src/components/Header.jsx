import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true)
  }
  const hideSideMenu = () => {
    setToggle(false)
  }

  let links = [
    {
      icon: <IoIosSearch/>,
      name: "Search"
    },
    {
      icon: <CiDiscount1/>,
      name: "Offers",
      sup: "New"
    },
    {
      icon: <CgProfile />,
      name: "Sign In"
    },
    {
      icon: <MdOutlineShoppingCart />,
      name: "Cart",
      sup: 4
    },
  ]

  return (
    <>
      {/* side menu */}
      <div onClick={hideSideMenu} className="black-overlay w-full h-full fixed duration-500" style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden",
        zIndex:999999
        }}>
        <div onClick={(e)=>e.stopPropagation()} className="w-[500px] h-full bg-white absolute duration-[400ms]"
            style={{left: toggle ? '0%' : '-100%'}}>

        </div>
      </div>
      
      {/* Header */}
      <header className="p-[15px] shadow-xl sticky top-0 bg-white z-[9999]">
        
        {/* Logo & Location*/}
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="images/Swiggy-Logo.png" className="w-full" alt="logo" />
          </div>
          <div className="text-[#686b78]">
            <span className="font-bold border-b-[3px] border-[black]">
              Najibabad{" "}
            </span>
            Bijnor, Uttar Pradesh, India{" "}
            <RxCaretDown onClick={showSideMenu} fontSize={25} className="inline text-[#fc8019] cursor-pointer" />
          </div>

          {/* Navigation Bar */}
          <nav className="flex list-none gap-4 ml-auto text-[16px] font-semibold">
            {
              links.map((link,index)=>{
                return <li key={index} className="flex hover:text-[#fc8019] items-center gap-2">
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              })
            }
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
