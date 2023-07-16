

const Expertise = () => {
    return (
      <section className="my-20 bg-cover bg-[url('https://i.ibb.co/cLWYh47/BG-2-01-2.png')]">
  <h1 className="heading pb-2">My Expertise</h1>
        <div className="flex items-center gap-3 content-center text-center w-11/12 mx-auto h-[50vh]">
        
          <div className="glass p-5 rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl"  >
           <div className="w-fit mx-auto "> <img src="https://i.ibb.co/LQ1Gnn0/pixel-perfect-1.png" alt="" /></div>
            <h1 className="font-semibold text-xl py-2 text-orange">Pixel Perfect</h1>
            <p>Most common methods f
              or designing websites that work well on desktop is responsive and adaptive design.</p>
          </div >
         <div className="glass p-5   rounded-tr-3xl rounded-bl-3xl hover:shadow-xl">
         <div className="w-fit mx-auto"> <img src="https://i.ibb.co/bK8XD0z/hight-quality-1.png" alt="" />  </div>
            <h1 className="font-semibold text-xl py-2 text-orange">High Quality</h1>
            <p>Most common methods f
              or designing websites that work well on desktop is responsive and adaptive design.</p>
         </div>
         <div className="glass p-5  rounded-tr-3xl rounded-bl-3xl hover:shadow-xl">
         <div className="w-fit mx-auto"> <img src="https://i.ibb.co/3kYh5zP/awesome-data-1.png" alt="" />  </div>
            <h1 className="font-semibold text-xl py-2 text-orange">Unique Concept</h1>
            <p>Most common methods f
              or designing websites that work well on desktop is responsive and adaptive design.</p>
         </div>
        </div>
        <div className="w-1/3 mx-auto"><img src="https://i.ibb.co/RBMhbQw/Nice-Png-logo-designing-png-2457488.png" alt="" /></div>
      </section>
    );
};

export default Expertise;