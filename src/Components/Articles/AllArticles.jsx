import { Link } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import { useEffect, useState } from "react";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/articles')
      .then((response) => response.json())
      .then((data) => {
        console.log("Received data:", data);
        setArticles(data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, [articles]); 

  console.log("Articles:", articles);

  return (
    <div>
      <Navbar />
      <h1 className="heading mt-20">All Articles</h1>
      <section className="grid grid-cols-2 gap-4 w-11/12 mx-auto justify-center items-center mt-16 z-10">
        {articles.map((art) => (
        
            <div key={art._id}
              className="glass p-5 rounded-tr-3xl rounded-bl-3xl flex gap-2 hover:shadow-xl h-[35vh]"
             
            >
              <div>
                <img className="w-[800px]  p-2 " src={art.imageURL} alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <h1 className="font-semibold text-xl text-orange">{art.articleName}</h1>
                <p className="my-2">{art.description}</p>
                <div className="flex justify-end">
                  <Link className="btn-custom">Read More</Link>
                </div>
              </div>
            </div>
        
        ))}
      </section>
    </div>
  );
};

export default AllArticles;