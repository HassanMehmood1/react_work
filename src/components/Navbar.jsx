import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handledNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white bg-black">
      <div className="text-white ">
        <h1 onClick={handledNav} className={logo ? "hidden" : "block"}>
          Facial Recognition
        </h1>
      </div>
      <ul className="hidden md:flex ">
        <li>
          {" "}
          <Link to={`/`}>Home</Link>{" "}
        </li>
        <li>
          <Link to={`/register`}>Register</Link>
        </li>
        <li>
          <Link to={`/login`}>Login</Link>
        </li>
        <li>
          <Link to={`/tips`}>Tips</Link>
        </li>
        <li>
          <Link to={`/contact-us`}>Contact Us</Link>
        </li>
      </ul>

      <div onClick={handledNav} className="md:hidden z-10">
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      <div
        onClick={handledNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1 className="border-b">Facial Recognition</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Register</li>
          <li className="border-b">Login</li>
          <li className="border-b">Tips</li>
          <li className="border-b">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
