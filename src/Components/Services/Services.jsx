import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  
  AOS.init();
  return (
    <div name="services" className="w-4/5 mx-auto my-24">
      <h1 className="heading pb-2">My Services</h1>
      <section className="grid grid-cols-2 gap-4  justify-self-center items-center mt-16">

      <div className="glass p-5 rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl"data-aos="fade-up"  >
           <div className="w-fit mx-auto " > <img src="https://i.ibb.co/4sR7CZY/i1-1.png" alt="" /></div>
            <h1 className="font-semibold text-xl py-2 text-orange">Starter $75 (25% off from $100)</h1>
            <p className="my-5">
              <ul></ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
1 Logo from multiple sketches
Typography and Color variations
Logo transparency                
Printable files                        
Vector files     
High resolution          
Copyright transfer              

</p>
              <div className="flex justify-end">

              <Link className="btn-custom ">Buy Now</Link>
              </div>
          </div >
      <div className="glass p-5 rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl" data-aos="fade-up" >
           <div className="w-fit mx-auto "> <img src="https://i.ibb.co/4sR7CZY/i1-1.png" alt="" /></div>
            <h1 className="font-semibold text-xl py-2 text-orange">Pixel Perfect</h1>
            <p className="my-5">Most common methods f
              or designing websites that work well on desktop is responsive and adaptive design.</p>
              <div className="flex justify-end">

              <Link className="btn-custom ">Buy Now</Link>
              </div>
          </div >
      <div className="glass p-5 rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl" data-aos="fade-up" >
           <div className="w-fit mx-auto "> <img src="https://i.ibb.co/4sR7CZY/i1-1.png" alt="" /></div>
            <h1 className="font-semibold text-xl py-2 text-orange">Pixel Perfect</h1>
            <p className="my-5">Most common methods f
              or designing websites that work well on desktop is responsive and adaptive design.</p>
              <div className="flex justify-end">

              <Link className="btn-custom ">Buy Now</Link>
              </div>
          </div >
      <div className="glass p-5 rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl"data-aos="fade-up"  >
           <div className="w-fit mx-auto "> <img src="https://i.ibb.co/4sR7CZY/i1-1.png" alt="" /></div>
            <h1 className="font-semibold text-xl py-2 text-orange">Pixel Perfect</h1>
            <p className="my-5">Most common methods f
              or designing websites that work well on desktop is responsive and adaptive design.</p>
             <div className="flex justify-end">

              <Link className="btn-custom ">Buy Now</Link>
              </div>
          </div >
    

      </section>
     
    </div>
  );
};

export default Services;
