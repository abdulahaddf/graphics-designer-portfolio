import { TypeAnimation } from "react-type-animation";
import SocialLinks from "../SocialLinks/SocialLinks";
import {AiOutlineDownCircle } from "react-icons/ai";
import { Link } from 'react-scroll'


const Banner = () => {
    return (
        <div name="home">
           <section className="md:flex justify-between  w-11/12 mx-auto pt-14 md:pt-40">
            <div className="md:w-3/5 md:space-y-2">
                <h3 className="text-orange md:text-4xl">Hello, I&apos;m</h3>
                <h1 className="text-4xl md:text-5xl font-bold">Ferdous Hasan</h1>
             
             
                <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    
  "  I'm Logo Designer",
    1000,
    "  I'm Brand Designer",
    1000,
    "  I'm Design Specialist",
    1000,
  ]}
  speed={30}
  style={{ fontSize: '1.5em' }}
  repeat={Infinity}
/>
<p className="md:text-4xl text-orange pt-5 ">Unleashing The Power Of Your Brand </p>
<p className="md:text-xl pb-5">With a keen eye for design and a deep understanding of brand identity, I am dedicated to crafting visually stunning and meaningful logos that truly represent your business.</p>


<SocialLinks></SocialLinks>
          
            </div>
            
            <div className="flex justify-center">
  <figure className="relative">
    <img className="w-full" src="https://i.ibb.co/Rzz5rRQ/Image.png" alt="" />

    <img className="w-12 absolute top-[33vh] left-[68vw] animate-bounce duration-500 md:w-8 md:top-[25%] md:left-[55%] lg:w-10 lg:top-[20%] lg:left-[20%]"
      src="https://i.ibb.co/zJP27gr/Adobe-Creative-Cloud-rainbow-icon-svg.png" alt="" />

    <img className="w-12 absolute top-[28vh] left-[86vw] animate-bounce md:w-8 md:top-[20%] md:left-[70%] lg:w-10 lg:top-[12%] lg:left-[75%]"
      src="https://i.ibb.co/pxjzJNL/ps-1.png" alt="" />

    <img className="w-12 absolute animate-bounce top-[77vh] left-[89vw] md:w-8 md:top-[65%] md:left-[80%] lg:w-10 lg:top-[80%] lg:left-[82%]"
      src="https://i.ibb.co/0FW6P8Z/Adobe-Illustrator-CC-icon-svg.png" alt="" />
  </figure>
</div>


           </section>
           <Link className="text-3xl text-center flex justify-center text-[#ccdbee]" activeClass="active" to="about" spy={true} smooth={true} offset={-110} duration={500} >
           <AiOutlineDownCircle></AiOutlineDownCircle>
                  </Link>
          
        </div>
    );
};

export default Banner;