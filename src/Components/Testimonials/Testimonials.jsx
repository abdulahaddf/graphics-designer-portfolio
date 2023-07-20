
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  AOS.init();

  return (
    <section name="testimonials" className='my-20 lg:my-5 '>
        <h1 className='heading my-10 mb-24 lg:mb-0 pb-2 '>Testimonials</h1>
    <div className="flex justify-center items-center h-[60vh]" data-aos="fade-up">
      <div className="w-11/12 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onDurationChange={5000}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          
         
          className="swiper h-[70vh] lg:h-full"
        >
          <SwiperSlide className="w-11/12  mx-auto pb-20">
           <div className='text-center'>
           <p className="text-lg">It was fantastic working with Ferdous. He is very responsive, clear In communication, and prompt
in replying. He is also really willing to listen, brainstorm, and work with the client. Would
recommend him without reservation to others!</p>
           <img className='w-28 mx-auto rounded-full my-8' src="https://i.ibb.co/gjq67c1/Client-1.jpg" alt="" />
           <h1>Vaidyaum</h1>
           </div>
          </SwiperSlide>
          <SwiperSlide className="w-11/12 mx-auto mb-20">
           <div className='text-center'>
           <p className="text-lg">Brilliant service from Ferdous! Really quick, reasonably priced, listened to the brief. Over the
moon with the results. Highly recommend & will use again.</p>
           <img className='w-28 mx-auto my-8 rounded-full' src="https://i.ibb.co/TMT8xVk/Client-2.jpg" alt="" />
           <h1>Kane Parkins</h1>
           </div>
          </SwiperSlide>
          <SwiperSlide className="w-11/12 mx-auto mb-20">
           <div className='text-center'>
           <p className="text-lg">Ferdous was incredibly responsive and did an excellent job on the logo I wanted. He promptly
replied to my requests and made all the necessary changes, resulting in a great final design.</p>
           <img className='w-28 mx-auto my-8 rounded-full' src="https://i.ibb.co/bH8rNFz/Client-5.jpg " alt="" />
           <h1>Sophia Engel</h1>
           </div>
          </SwiperSlide>
          <SwiperSlide className="w-11/12 mx-auto mb-20">
           <div className='text-center'>
           <p className="text-lg">Ferdous was very professional, responsive, and easy to work with. He gave me his expert advise
and did a good job redirected me back to what made the most sense for my needs. We went
through a lot of revisions to get to the final logo design. I am very pleased with the outcome and his level of
attention to my project and would definitely use his design services again.</p>
           <img className='w-28 mx-auto my-8 rounded-full' src="https://i.ibb.co/g97rsz8/Client-4.jpg" alt="" />
           <h1>Subhan Shah</h1>
           </div>
          </SwiperSlide>
          <SwiperSlide className="w-11/12 mx-auto mb-20">
           <div className='text-center'>
           <p className="text-lg">Ferdous always works his magic on every brief. I have used him before, and I will use him again.
I sent him a simple brief, and the logo just came out well and resonated with what I had in mind.
Hire him!</p>
           <img className='w-28 mx-auto my-8 rounded-full' src="https://i.ibb.co/DM2B1d6/Client-3.jpg" alt="" />
           <h1>Michle</h1>
           </div>
          </SwiperSlide>
          <SwiperSlide className="w-11/12 mx-auto mb-20">
           <div className='text-center'>
           <p className="text-lg">This was the second time working with this freelancer and he was just as amazing this time
around ! He did an awesome job with all changes that I needed ! Would recommend ! 10/10</p>
           <img className='w-28 mx-auto my-8 rounded-full' src="https://i.ibb.co/X7pcV0G/Client-6.jpg" alt="" />
           <h1>Tyler White</h1>
           </div>
          </SwiperSlide>
          <SwiperSlide className="w-11/12 mx-auto mb-20">
           <div className='text-center'>
           <p className="text-lg">Just amazing... I actually hired 3 designers at once as i wanted more ideas for my request. Out
of all of them, Hasan asked the right questions and understood exact what I need from him.
Others never done that. I highly recommend Hasan to people who is looking for a high quality
work with excellent service. Thank you Hasan.</p>
           <img className='w-28 mx-auto my-8 rounded-full' src="https://i.ibb.co/RbkBtdw/Client-7.jpg" alt="" />
           <h1>Raphael Brunner</h1>
           </div>
          </SwiperSlide>
          
          
        
        </Swiper>
      </div>
    </div>
    </section>
  );
};

export default Testimonials;
