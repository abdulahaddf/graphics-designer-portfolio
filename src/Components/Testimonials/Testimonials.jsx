
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
 

  return (
    <section >
        <h1 className='heading pb-2'>Testimonials</h1>
    <div className="flex justify-center items-center h-[60vh]">
      <div className="w-11/12 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          
         
          className="swiper"
        >
          <SwiperSlide className="w-11/12  mx-auto pb-20">
           <div className='text-center'>
           <p className="text-lg">I rarely like to write reviews, but the JFD team truly deserve a standing ovation for their customer support, customisation and most importantly, friendliness and professionalism. Many thanks once again for everything and hope that I get to deal with you again in the near future.</p>
           <img className='w-28 mx-auto rounded-full my-8' src="https://i.ibb.co/vVV4pWM/Ferdous.jpg" alt="" />
           <h1>John Doe</h1>
           </div>
          </SwiperSlide>
          <SwiperSlide className="w-11/12 mx-auto mb-20">
           <div className='text-center'>
           <p className="text-lg">I rarely like to write reviews, but the JFD team truly deserve a standing ovation for their customer support, customisation and most importantly, friendliness and professionalism. Many thanks once again for everything and hope that I get to deal with you again in the near future.</p>
           <img className='w-28 mx-auto my-8 rounded-full' src="https://i.ibb.co/vVV4pWM/Ferdous.jpg" alt="" />
           <h1>John Doe</h1>
           </div>
          </SwiperSlide>
          <SwiperSlide className="w-11/12 mx-auto mb-20">
           <div className='text-center'>
           <p className="text-lg">I rarely like to write reviews, but the JFD team truly deserve a standing ovation for their customer support, customisation and most importantly, friendliness and professionalism. Many thanks once again for everything and hope that I get to deal with you again in the near future.</p>
           <img className='w-28 mx-auto my-8 rounded-full' src="https://i.ibb.co/vVV4pWM/Ferdous.jpg" alt="" />
           <h1>John Doe</h1>
           </div>
          </SwiperSlide>
          <SwiperSlide className="w-11/12 mx-auto mb-20">
           <div className='text-center'>
           <p className="text-lg">I rarely like to write reviews, but the JFD team truly deserve a standing ovation for their customer support, customisation and most importantly, friendliness and professionalism. Many thanks once again for everything and hope that I get to deal with you again in the near future.</p>
           <img className='w-28 mx-auto my-8 rounded-full' src="https://i.ibb.co/vVV4pWM/Ferdous.jpg" alt="" />
           <h1>John Doe</h1>
           </div>
          </SwiperSlide>
          
          
        
        </Swiper>
      </div>
    </div>
    </section>
  );
};

export default Testimonials;
