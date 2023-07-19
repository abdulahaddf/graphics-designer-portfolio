/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
import 'aos/dist/aos.css';

const Expertise = () => {
  AOS.init();
    return (
      <section name="expertise" className="my-10 lg:my-20 bg-cover bg-[url('https://i.ibb.co/cLWYh47/BG-2-01-2.png')]">
  <h1 className="heading pb-2">Why me ! </h1>
        <div className="md:flex items-center gap-3 content-center space-y-5 text-center mt-5 w-11/12 mx-auto lg:h-[50vh] " >
        
          <div className="glass mt-5 py-5  p-5 rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl"  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="600" >
           <div className="w-1/3 mx-auto "> <img src="https://i.ibb.co/4JKQCJn/Unique-Idea.png  " alt="" /></div>
            <h1 className=" text-3xl pb-4 text-orange">Unique Idea</h1>
            <p>Where imagination meets innovation, redefining the boundaries of possibility. I'm committed to make designs unique every time.</p>
          </div >

         <div className="glass py-7 p-5  rounded-tr-3xl rounded-bl-3xl hover:shadow-xl"  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="600">
         <div className="w-1/3 mx-auto"> <img src="https://i.ibb.co/WyQJrnr/Pixel-Perfect.png " alt="" />  </div>
            <h1 className=" text-3xl pb-4 text-orange">Pixel Perfect</h1>
            <p>Creating flawless designs with attention to detail, ensuring every
pixel aligns harmoniously to achieve visual perfection.</p>
         </div>

         <div className="glass py-10 p-5  rounded-tr-3xl rounded-bl-3xl hover:shadow-xl"  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="600">
         <div className="w-1/3 mx-auto"> <img src="https://i.ibb.co/nfJTpRH/On-Time.png  " alt="" />  </div>
            <h1 className=" text-3xl pb-4 text-orange">On Time</h1>
            <p>You will get the project done on time and I am commited to make the project within
your time boundary.</p>
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