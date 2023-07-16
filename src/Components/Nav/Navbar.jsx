import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";


import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className=" h-10 py-5 ">
            <div className=" flex items-center ">
             
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">     {/* sm:hidden */}
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex justify-evenly items-center w-11/12 mx-auto">
               
                 <div>
                 <img
                    className="w-72"
                    src="https://i.ibb.co/q0Sgb2S/Logo-01-1.png"
                    alt="logo"
                  />
                 </div>
                 
             
                <div className="hidden sm:ml-6 sm:block">
                  <ul className="flex px-1 font-normal text-xl space-x-6 ">

                  <Link className="hover:text-orange hover:scale-125 duration-200" activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >
                   Home
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-200" activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >
                   About
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-200" activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >
                   Service
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-200" activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >
                   Projects
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-200" activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >
                   Articles
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-200" activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >
                   Contact
                  </Link>
                 





                   
                 
                   
                  </ul>
                </div>
                <div>
                    <Link className="btn-custom w-48">Download CV</Link>
                   </div>

              </div>
           
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">  {/* sm:hidden */}
            <ul className=" px-1 font-bold text-xl absolute bg-[#DDE9FD] text-center w-full">
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-900 underline"
                      : "text-blue-600 link link-hover"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-900 underline"
                      : "text-blue-600 link link-hover"
                  }
                  to="/blog"
                >
                  {" "}
                  Blog
                </NavLink>
              </div>
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-900 underline"
                      : "text-blue-600 link link-hover"
                  }
                  to="/all"
                >
                  {" "}
                  All toys
                </NavLink>
              </div>
             
             
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
