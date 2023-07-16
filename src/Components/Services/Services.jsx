import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="w-4/5 mx-auto my-24">
      <h1 className="heading pb-2">My Services</h1>
      <section className="grid grid-cols-2 gap-4  justify-self-center items-center mt-16">

      <div className="glass p-5 rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl"  >
           <div className="w-fit mx-auto "> <img src="https://i.ibb.co/4sR7CZY/i1-1.png" alt="" /></div>
            <h1 className="font-semibold text-xl py-2 text-orange">Pixel Perfect</h1>
            <p>Most common methods f
              or designing websites that work well on desktop is responsive and adaptive design.</p>
              <Link className="btn-custom ">Buy Now</Link>
          </div >
      <div className="glass p-5 rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl"  >
           <div className="w-fit mx-auto "> <img src="https://i.ibb.co/4sR7CZY/i1-1.png" alt="" /></div>
            <h1 className="font-semibold text-xl py-2 text-orange">Pixel Perfect</h1>
            <p>Most common methods f
              or designing websites that work well on desktop is responsive and adaptive design.</p>
              <Link className="btn-custom ">Buy Now</Link>
          </div >
      <div className="glass p-5 rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl"  >
           <div className="w-fit mx-auto "> <img src="https://i.ibb.co/4sR7CZY/i1-1.png" alt="" /></div>
            <h1 className="font-semibold text-xl py-2 text-orange">Pixel Perfect</h1>
            <p>Most common methods f
              or designing websites that work well on desktop is responsive and adaptive design.</p>
              <Link className="btn-custom ">Buy Now</Link>
          </div >
      <div className="glass p-5 rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl"  >
           <div className="w-fit mx-auto "> <img src="https://i.ibb.co/4sR7CZY/i1-1.png" alt="" /></div>
            <h1 className="font-semibold text-xl py-2 text-orange">Pixel Perfect</h1>
            <p>Most common methods f
              or designing websites that work well on desktop is responsive and adaptive design.</p>
              <Link className="btn-custom ">Buy Now</Link>
          </div >
    

      </section>
      <div className="text-center mt-10">
        <Link className="btn-new">See More</Link>
      </div>
    </div>
  );
};

export default Services;
