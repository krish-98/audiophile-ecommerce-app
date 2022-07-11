import React from "react"
import M_Headphones from "../../images/dropdown/image-headphones.png"
import M_Speakers from "../../images/dropdown/image-speakers.png"
import M_Earphones from "../../images/dropdown/image-earphones.png"
import { AiOutlineRight } from "react-icons/ai"

const NavbarDropdown = ({ toggle }) => {
  return (
    <div
      className={`${
        !toggle && "hidden"
      } flex flex-col items-center justify-center gap-16 w-full rounded-b-xl pt-20 pb-10 absolute top-28 left-0 right-0 sm:flex-row sm:gap-6 sm:px-8`}
    >
      <div className="w-[85%] bg-gray-100 rounded-lg">
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg relative bottom-14 -mb-10">
          <img
            className="w-36 h-36 object-contain"
            src={M_Headphones}
            alt="M_Headphones"
          />
          <h2 className="text-black font-bold">HEADPHONES</h2>
          <div className="space-x-2">
            <span className="text-gray-800 font-light text-sm">SHOP</span>
            <span>
              <AiOutlineRight className="inline fill-orange-400 " />
            </span>
          </div>
        </div>
      </div>

      <div className="w-[85%] bg-gray-100 rounded-lg">
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg relative bottom-14 -mb-10">
          <img
            className="w-36 h-36 object-contain"
            src={M_Speakers}
            alt="M_Speakers"
          />
          <h2 className="text-black font-bold">SPEAKERS</h2>
          <div className="space-x-2">
            <span className="text-gray-800 font-light text-sm">SHOP</span>
            <span>
              <AiOutlineRight className="inline fill-orange-400 " />
            </span>
          </div>
        </div>
      </div>

      <div className="w-[85%] bg-gray-100 rounded-lg">
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg relative bottom-14 -mb-10">
          <img
            className="w-36 h-36 object-contain"
            src={M_Earphones}
            alt="M_Earphones"
          />
          <h2 className="text-black font-bold">EARPHONES</h2>
          <div className="space-x-2">
            <span className="text-gray-800 font-light text-sm">SHOP</span>
            <span>
              <AiOutlineRight className="inline fill-orange-400 " />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarDropdown
