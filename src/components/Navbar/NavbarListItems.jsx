import React from "react"
import { AiOutlineRight } from "react-icons/ai"

const NavbarListItems = ({ image, text }) => {
  return (
    <div className="w-[85%] bg-gray-100 rounded-lg">
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg relative bottom-14 -mb-10">
        <img
          className="w-36 h-36 object-contain"
          src={image}
          alt="M_Headphones"
        />
        <h2 className="text-black font-bold">{text}</h2>
        <div className="space-x-2">
          <span className="text-gray-800 font-light text-sm">SHOP</span>
          <span>
            <AiOutlineRight className="inline fill-orange-400 " />
          </span>
        </div>
      </div>
    </div>
  )
}

export default NavbarListItems
