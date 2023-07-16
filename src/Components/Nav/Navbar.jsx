import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-scroll'
import { AiFillUpCircle } from "react-icons/ai";


const Navbar = () => {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className=" h-10 py-5 ">
            <div className=" flex items-center relative">
             
              <div className="absolute inset-y-0 left-0 top-2 flex items-center sm:hidden mr-10 ">     {/* sm:hidden */}
                {/* Mobile menu button*/}
                <Disclosure.Button className="flex justify-center rounded-md p-2 text-black hover:bg-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange z-10">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex justify-evenly items-center w-11/12 ml-16 md:w-[96%] mx-auto">
               
                 <a href="/">
                 <img
                    className="w-36 md:w-72"
                    src="https://i.ibb.co/q0Sgb2S/Logo-01-1.png"
                    alt="logo"
                  />
                 </a>
                 
             
                <div className="hidden sm:ml-6 sm:block">
                  <ul className="flex px-1 font-normal text-xl space-x-5 ">

                  <a href="/" className="hover:text-orange hover:scale-125 duration-300" >
                   Home
                  </a>
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
                   Articles
                  </Link>
                 
                 

                  <div className="fixed right-1 bottom-1 text-6xl ">
         <Link className="hover:text-orange hover:shadow-xl z-10" activeClass="active" to="home" spy={true} smooth={true} offset={-150} duration={500} >
                 <AiFillUpCircle/>
                  </Link>
         </div>



                   
                 
                   
                  </ul>
                </div>
                <div>
                    <Link className="btn-custom md:w-48">Download CV</Link>
                   </div>

              </div>
           
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">  {/* sm:hidden */}
            <ul className=" px-1 font-bold text-xl absolute text-center w-full bg-orange flex flex-col">
            <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="home" spy={true} smooth={true} offset={-150} duration={500} >
                   Home
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="about" spy={true} smooth={true} offset={-90} duration={500} >
                   About
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="expertise" spy={true} smooth={true} offset={-150} duration={500} >
                   Expertise
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="projects" spy={true} smooth={true} offset={-150} duration={500} >
                  Projects
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="services" spy={true} smooth={true} offset={-150} duration={500} >
                   Services
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="articles" spy={true} smooth={true} offset={-150} duration={500} >
                   Articles
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="testimonials" spy={true} smooth={true} offset={-150} duration={500} >
                   Testimonials
                  </Link>
                  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="contact" spy={true} smooth={true} offset={-150} duration={500} >
                   Contact
                  </Link>
             
             
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
