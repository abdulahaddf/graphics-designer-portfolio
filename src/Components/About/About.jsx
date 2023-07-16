import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from "react-countup";

const About = () => {
    AOS.init();
    return (
       
     <div className="my-20 bg-cover h-full bg-[url('https://i.ibb.co/V2ZDMdJ/BG-1-01-1.png')] " data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="600"
     >
        <h1 className="heading pb-2">About Me</h1>
           <section className="flex justify-evenly w-4/5 mx-auto mt-20">
            <div className="w-1/2 relative">
                <figure >
                    <img src="https://i.ibb.co/cwsWxV3/02.png" alt="" />
                </figure>
                <div className='text-3xl font-medium bg-white w-1/3 text-center shadow-xl rounded-lg py-2 absolute top-[10%]' >
                    <p ><CountUp delay={1} end={22} duration={3}></CountUp> Years of Experience </p>
                </div>
                <div className='text-3xl bg-white w-1/3 text-center shadow-xl rounded-lg py-2 absolute top-[70%] right-[10%]'>
                    <p><CountUp delay={1} end={220} duration={4}></CountUp> Total Projects </p>
                </div>
            </div>
            <div className="w-2/5 space-y-3 "
             data-aos="fade-up"
             data-aos-anchor-placement="center-bottom"
             data-aos-duration="900"
            >
                <p className="text-orange text-xl">I&apos;m a Designer</p>
                <h3 className="text-4xl font-medium">I Can Design Anything You Want</h3>
                <p className="">
                Hello there! I’m a web designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
                </p>
             
               <div className="pt-5"> <button className="btn-new">Hire Me</button></div>
            </div>
        </section>
     </div>
    );
};

export default About;