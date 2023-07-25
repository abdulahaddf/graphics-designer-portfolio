/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from "react-countup";
import animationData from '../../../public/ani.json';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
const About = () => {
    AOS.init();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
       
     <div name="about" className="my-10 lg:my-20 bg-cover h-full bg-[url('https://i.ibb.co/V2ZDMdJ/BG-1-01-1.png')] " data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="600"
     >
        <h1 className="heading pb-2">About Me</h1>
           <section className="lg:flex justify-evenly w-4/5 mx-auto mt-20">
            <div className="lg:w-1/2 relative">
                <div className='w-11/12 mx-auto md:-ml-10'>
                <Lottie options={defaultOptions} />
                </div>
                <div className='text-xl font-medium bg-white md:h-[87px]  text-center shadow-xl rounded-lg px-2 py-2  absolute left-[-10%] bottom-[80%] md:top-[10%]' >
                    <p className=''><span className='text-3xl md:text-5xl text-[#10b981]'>0<CountUp enableScrollSpy={true} delay={1} end={4} duration={3}></CountUp>+</span><br /> Years of Experience </p>
                </div>
                <div className='text-xl bg-white md:w-48 text-center shadow-xl rounded-lg p-2 absolute top-[80%] md:top-[70%] left-[70%] md:right-[10%]'>
                <p className=''><span className='text-3xl md:text-5xl text-[#6366f1]'><CountUp enableScrollSpy={true} delay={1} end={500} duration={3}></CountUp>+</span><br /> Total Projects </p>
                </div>
            </div>
            <div className="lg:w-2/5 space-y-3 mt-10 md:mt-0"
             data-aos="fade-up"
             data-aos-anchor-placement="center-bottom"
             data-aos-duration="900"
            >
                <p className="text-orange text-xl">I&apos;m a Designer</p>
                <h3 className="text-4xl font-medium">I Can Design Anything You Want</h3>
                <p className="">
                As a creative brand identity designer with a keen eye for detail, I am enthusiastic about creating captivating visual storylines that capture audiences and take companies to new heights. I flawlessly combine creativity with strategy to develop effective design solutions that make a lasting impression. I have a great eye for detail and a thorough awareness of industry trends. Let me create a masterpiece out of your brand's identity that connects with your target market and distinguishes you in the crowded marketplace of today.
                </p>
             <div className="pt-10">
             <Link to="https://www.upwork.com/freelancers/~016b9b83bc11e596e3" target='_blank' > <button className="btn-new">Hire Me</button></Link>
             </div>
              
            </div>
        </section>
     </div>
    );
};

export default About;