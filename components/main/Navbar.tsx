import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/lolo.jpg"
            alt="logo"
            width={300}
            height={300}
            className="cursor-pointer hover:animate-slowspin"
          />
         

          <span className="font-bold ml-[10px] hidden md:block text-gray-300 px-10 ">
            Haryana Police Hackathon
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Home
            </a>
            <a href="#skills" className="cursor-pointer">
              Auth
            </a>
            <a href="#projects" className="cursor-pointer">
              Features
            </a>
            <a href="#login" className="cursor-pointer">
              Login
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
        <a
  href="https://discord.com/invite/qeq4QMmz"
  className="button"
  style={{
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    border: '2px solid white', // Border added
  }}
>
  Click to join community
</a>


        </div>
      </div>
    </div>
  );
};

export default Navbar;
