import AOS from 'aos';
import 'aos/dist/aos.css';

const Expertise = () => {
  AOS.init();
    return (
      <section name="expertise" className="my-20 bg-cover bg-[url('https://i.ibb.co/cLWYh47/BG-2-01-2.png')]">
  <h1 className="heading pb-2">Why me ! </h1>
        <div className="md:flex items-center gap-3 content-center space-y-5 text-center mt-5 w-11/12 mx-auto md:h-[50vh] " >
        
          <div className="glass p-5 rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl"  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="600" >
           <div className="w-1/3 mx-auto "> <img src="https://i.ibb.co/4JKQCJn/Unique-Idea.png  " alt="" /></div>
            <h1 className=" text-3xl pb-4 text-orange">Unique Idea</h1>
            <p>Most common methods f
              or designing websites that work well on desktop is responsive and adaptive design.</p>
          </div >
         <div className="glass p-5   rounded-tr-3xl rounded-bl-3xl hover:shadow-xl"  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="800">
         <div className="w-1/3 mx-auto"> <img src="https://i.ibb.co/WyQJrnr/Pixel-Perfect.png " alt="" />  </div>
            <h1 className=" text-3xl pb-4 text-orange">Pixel Perfect</h1>
            <p>Most common methods f
              or designing websites that work well on desktop is responsive and adaptive design.</p>
         </div>
         <div className="glass p-5  rounded-tr-3xl rounded-bl-3xl hover:shadow-xl"  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="1000">
         <div className="w-1/3 mx-auto"> <img src="https://i.ibb.co/nfJTpRH/On-Time.png  " alt="" />  </div>
            <h1 className=" text-3xl pb-4 text-orange">On Time</h1>
            <p>Most common methods f
              or designing websites that work well on desktop is responsive and adaptive design.</p>
         </div>
        </div>
        <div className="w-11/12 md:w-1/3 mx-auto mt-7 md:mt-5 "  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="1000"><img src="https://i.ibb.co/RBMhbQw/Nice-Png-logo-designing-png-2457488.png" alt="" />
     </div>
      </section>
    );
};

export default Expertise;