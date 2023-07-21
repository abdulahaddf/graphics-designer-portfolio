import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-scroll'
import { AiFillUpCircle } from "react-icons/ai";

import HomeLink from "../SocialLinks/HomeLink";
import LogoLink from "../SocialLinks/LogoLink";
import { useEffect, useState } from "react";
import Download from "./Download";


const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (event) => {
    if (event.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
 
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className=" h-10 py-5 ">
            <div className=" flex items-center relative">
             
              <div className="absolute  left-2 bottom-2 flex items-center lg:hidden mr-10 z-40 ">     {/* sm:hidden */}
                {/* Mobile menu button*/}
                <Disclosure.Button className="flex justify-center items-center rounded-md  text-black hover:bg-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange z-10">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex justify-evenly items-center w-11/12 ml-7 md:ml-16 md:w-[96%] mx-auto">
               
                <LogoLink></LogoLink>
                 
             
                <div className="hidden sm:ml-6 lg:block">
                  <ul className="flex px-1 font-normal text-xl space-x-5 ">
                    <li className="hover:scale-125 duration-300">

                 <HomeLink ></HomeLink>
                    </li>
                  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="about" spy={true} smooth={true} offset={-110} duration={500} >
                   About
                  </Link>
                 
                  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} >
                  Projects
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="services" spy={true} smooth={true} offset={-20} duration={500} >
                   Services
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="articles" spy={true} smooth={true} offset={-20} duration={500} >
                   Blog
                  </Link>
                
                 

                 
 
                  </ul>
                </div>
                <div className="flex gap-2">
                  <Download></Download>
                    <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onClick={handleToggle}
                checked={theme === "light" ? false : true}
                className="tooltip tooltip-left"
                data-tip="Dark Mode"
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
                   </div>

              </div>
           
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden mt-0 md:mt-5 z-40">  {/* sm:hidden */}
            <ul className="mt-4 px-1 font-bold text-lg absolute text-center w-full bg-white flex flex-col">
            
                  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="about" spy={true} smooth={true} offset={-110} duration={500} >
                   About
                  </Link>
                 
                  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} >
                  Projects
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="services" spy={true} smooth={true} offset={-20} duration={500} >
                   Services
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="articles" spy={true} smooth={true} offset={-20} duration={500} >
                   Blog
                  </Link>
             
             
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
