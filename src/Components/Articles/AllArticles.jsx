import { Link } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import { useEffect, useState } from "react";



const AllArticles = () => {
  const [Articles,setArticles] = useState([])

  useEffect(() => {
    fetch(
     ' http://localhost:5000/articles'
    )
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, [Articles]);
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="heading mt-20">All Articles</h1>
            <section className="grid grid-cols-2 gap-4  justify-self-center items-center mt-16">

            {
  Articles.map((art) => (
    <>
      <div
        className="glass p-5 rounded-tr-3xl rounded-bl-3xl flex gap-2 hover:shadow-xl h-[35vh]"
        data-aos="fade-up"
      >
        <div>
          <img className="w-[100vw]" src={art.imgURL} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="font-semibold text-xl text-orange">{art.articleName}</h1>
          <p className="my-2">{art.description}</p>
          <div className="flex justify-end">
            <Link className="btn-custom">Read More</Link>
          </div>
        </div>
      </div>
    </>
  ))
}


</section>
        </div>
    );
};

export default AllArticles;