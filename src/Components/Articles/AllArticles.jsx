import { Link } from "react-router-dom";
import Navbar from "../Nav/Navbar";


const AllArticles = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="heading mt-20">All Articles</h1>
            <section className="grid grid-cols-2 gap-4  justify-self-center items-center mt-16">

<div className="glass p-5 rounded-tr-3xl rounded-bl-3xl flex gap-2 hover:shadow-xl h-[35vh]"data-aos="fade-up"  >
     <div  > 
     <img className="w-[100vw]" src="https://i.ibb.co/6WCm6k3/1520045798210.jpg" alt="" />
     </div>
     <div className="flex flex-col justify-between">
     <h1 className="font-semibold text-xl text-orange">Article Title</h1>
      <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit iusto, qui velit, quisquam veniam officia ipsa aliquid perferendis neque maxime sint fugiat autem consectetur tempore debitis et, rerum pariatur!</p>
        <div className="flex justify-end">
        <Link className="btn-custom ">Read More</Link>
        </div>
     </div>
    </div >
<div className="glass p-5 rounded-tr-3xl rounded-bl-3xl flex gap-2 hover:shadow-xl h-[35vh]"data-aos="fade-up"  >
     <div  > 
     <img className="w-[100vw]" src="https://i.ibb.co/6WCm6k3/1520045798210.jpg" alt="" />
     </div>
     <div className="flex flex-col justify-between">
     <h1 className="font-semibold text-xl text-orange">Article Title</h1>
      <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit iusto, qui velit, quisquam veniam officia ipsa aliquid perferendis neque maxime sint fugiat autem consectetur tempore debitis et, rerum pariatur!</p>
        <div className="flex justify-end">
        <Link className="btn-custom ">Read More</Link>
        </div>
     </div>
    </div >
<div className="glass p-5 rounded-tr-3xl rounded-bl-3xl flex gap-2 hover:shadow-xl h-[35vh]"data-aos="fade-up"  >
     <div  > 
     <img className="w-[100vw]" src="https://i.ibb.co/6WCm6k3/1520045798210.jpg" alt="" />
     </div>
     <div className="flex flex-col justify-between">
     <h1 className="font-semibold text-xl text-orange">Article Title</h1>
      <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit iusto, qui velit, quisquam veniam officia ipsa aliquid perferendis neque maxime sint fugiat autem consectetur tempore debitis et, rerum pariatur!</p>
        <div className="flex justify-end">
        <Link className="btn-custom ">Read More</Link>
        </div>
     </div>
    </div >
<div className="glass p-5 rounded-tr-3xl rounded-bl-3xl flex gap-2 hover:shadow-xl h-[35vh]"data-aos="fade-up"  >
     <div  > 
     <img className="w-[100vw]" src="https://i.ibb.co/6WCm6k3/1520045798210.jpg" alt="" />
     </div>
     <div className="flex flex-col justify-between">
     <h1 className="font-semibold text-xl text-orange">Article Title</h1>
      <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit iusto, qui velit, quisquam veniam officia ipsa aliquid perferendis neque maxime sint fugiat autem consectetur tempore debitis et, rerum pariatur!</p>
        <div className="flex justify-end">
        <Link to="/articles" className="btn-custom ">Read More</Link>
        </div>
     </div>
    </div >
<div className="glass p-5 rounded-tr-3xl rounded-bl-3xl flex gap-2 hover:shadow-xl h-[35vh]"data-aos="fade-up"  >
     <div  > 
     <img className="w-[100vw]" src="https://i.ibb.co/6WCm6k3/1520045798210.jpg" alt="" />
     </div>
     <div className="flex flex-col justify-between">
     <h1 className="font-semibold text-xl text-orange">Article Title</h1>
      <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit iusto, qui velit, quisquam veniam officia ipsa aliquid perferendis neque maxime sint fugiat autem consectetur tempore debitis et, rerum pariatur!</p>
        <div className="flex justify-end">
        <Link to="/articles" className="btn-custom ">Read More</Link>
        </div>
     </div>
    </div >
<div className="glass p-5 rounded-tr-3xl rounded-bl-3xl flex gap-2 hover:shadow-xl h-[35vh]"data-aos="fade-up"  >
     <div  > 
     <img className="w-[100vw]" src="https://i.ibb.co/6WCm6k3/1520045798210.jpg" alt="" />
     </div>
     <div className="flex flex-col justify-between">
     <h1 className="font-semibold text-xl text-orange">Article Title</h1>
      <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit iusto, qui velit, quisquam veniam officia ipsa aliquid perferendis neque maxime sint fugiat autem consectetur tempore debitis et, rerum pariatur!</p>
        <div className="flex justify-end">
        <Link to="/articles" className="btn-custom ">Read More</Link>
        </div>
     </div>
    </div >



</section>
        </div>
    );
};

export default AllArticles;