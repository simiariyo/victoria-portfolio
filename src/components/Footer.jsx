import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { socials }  from "../constants";
import { mylogo } from "../assets";


const Footer = () => {
  return (
    <footer className="lg:px-48 px-10 bg-black-100 text-white py-16">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      {/* Top section with logo, nav links, and social icons */}
      <div className="flex flex-col md:flex-row items-center md:space-x-16 space-y-4 md:space-y-0 ">
        <div >
          <Link
            to="/" 
            onClick={() => {
              window.scrollTo(0, 0);
            }}> 
            <img src={mylogo} alt="Logo" className="h-20 mx-auto" />
          </Link>
          <p className="font-bold mt-8">Frontend Developer</p>
        </div>
      </div>
      <nav className="flex space-x-4 my-auto font-bold">
          <a href="#works" className="text-[24px] cursor-pointer hover:underline underline-offset-8 hover:text-secondary">Work</a>
          {/* <a href="#about" className="hover:underline">Skills</a> */}
          <a href="#contact" className="text-[24px]  cursor-pointer hover:underline underline-offset-8  hover:text-secondary">Contact</a>
        </nav>
        <div>
        <ul className='list-none flex flex-row gap-10 my-auto'>
          {socials.map((links) => (
            <li
              key={links.name}
              className="hover:text-white text-[18px] font-medium cursor-pointer"
            >
              <a href={`${links.site_link}`}>
                <img 
                  src={links.icon}
                  alt="socials"
                  className="sm:w-16 sm:h-16 w-10 h-10"/>
              </a>
            </li>
          ))}
        </ul> 
        <p className="mt-2 text-center">Icons by <a href="https://icons8.com/" className="hover:underline">Icons8</a></p>
        </div>
    </div>
    {/* Bottom section with copyright */}
    <div className="mt-12 flex justify-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Starlight.Dev. All rights reserved.</p>
      </div>
  </footer>
  )
}

export default Footer