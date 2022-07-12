import React, { useState } from "react"
import Logo from "../../images/logo.svg"
import NavbarDropdownListItems from "./NavbarDropdownListItems"

import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { ImCross } from "react-icons/im"

import M_Headphones from "../../images/dropdown/image-headphones.png"
import M_Speakers from "../../images/dropdown/image-speakers.png"
import M_Earphones from "../../images/dropdown/image-earphones.png"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="px-6 py-7 bg-black text-white relative border-b border-gray-300 w-full">
      {/* From mobile screen to small-screen laptop*/}
      <div className="flex justify-between items-center lg:hidden">
        <div>
          {!toggle ? (
            <GiHamburgerMenu
              onClick={() => setToggle(!toggle)}
              className="w-6 h-5 cursor-pointer"
            />
          ) : (
            <ImCross
              onClick={() => setToggle(!toggle)}
              className="w-6 h-5 cursor-pointer"
            />
          )}
        </div>

        {/* Dropdown menu to navigate around different pages on Mobile screen */}
        <div
          className={`${
            !toggle && "hidden"
          } flex flex-col items-center justify-center gap-16 w-full rounded-b-xl pt-20 pb-10 absolute top-28 left-0 right-0 cursor-pointer sm:flex-row sm:gap-6 sm:px-8`}
        >
          <NavbarDropdownListItems image={M_Headphones} text="HEADPHONES" />
          <NavbarDropdownListItems image={M_Speakers} text="SPEAKERS" />
          <NavbarDropdownListItems image={M_Earphones} text="EARPHONES" />
        </div>

        <div className="sm:mr-auto sm:mx-12">
          <img className="cursor-pointer" src={Logo} alt="site-logo" />
        </div>

        <div className="cursor-pointer relative">
          <AiOutlineShoppingCart className="w-6 h-7 " />
          <span className="absolute bottom-4 left-3 font-light text-sm bg-orange-400 rounded-full w-5 h-5 text-center">
            4
          </span>
        </div>
      </div>

      {/* For large-screen latop*/}
      <div className="hidden lg:flex justify-between items-center gap-12 xl:w-[60%] mx-auto my-0">
        <div>
          <img className="cursor-pointer max-w-lg" src={Logo} alt="logo" />
        </div>

        <div className="flex justify-center items-center  gap-x-11 font-bold text-sm tracking-widest">
          <a href="/" className="active:text-orange-400 hover:text-orange-400 ">
            HOME
          </a>
          <a href="/" className="active:text-orange-400 hover:text-orange-400 ">
            HEADPHONES
          </a>
          <a href="/" className="active:text-orange-400 hover:text-orange-400 ">
            SPEAKERS
          </a>
          <a href="/" className="active:text-orange-400 hover:text-orange-400 ">
            EARPHONES
          </a>
        </div>

        <div className="cursor-pointer relative">
          <AiOutlineShoppingCart className="w-6 h-7" />
          <span className="absolute bottom-4 left-3 font-light text-sm bg-orange-400 rounded-full w-5 h-5 text-center">
            4
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
