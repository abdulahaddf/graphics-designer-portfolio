import { Link } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://port-server-two.vercel.app/articles")
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
    
      <h1 className="heading mt-20 pb-2">All Blogs</h1>
      <section className="grid md:grid-cols-2 gap-4 w-11/12 mx-auto justify-center items-center my-20 z-10">
        {articles.map((art) => (
          <div
              key={art._id}
              className="glass p-5 rounded-tr-3xl rounded-bl-3xl xl:flex justify-center items-center gap-2 overflow-hidden hover:shadow-xl
               xl:h-[40vh] mx-auto"
              data-aos="fade-up"
            >
              <div>
                <LazyLoad>

                <img
                  className="max-w-[300px] mx-auto p-2"
                  src={art.imageURL}
                  alt="article"
                  />
                  </LazyLoad>
              </div>
              <div className="flex flex-col justify-between">
                <Link  to={`/singlearticles/${art._id}`} className="font-semibold text-xl text-orange">
                  {art.articleName}
                </Link>
                <div className="my-2" dangerouslySetInnerHTML={{ __html: art.description.length > 150 ? art.description.substring(0, 150) + ' ...' : art.description }}></div>
                <div className="flex justify-end">
                  <Link
                    to={`/singlearticles/${art._id}`}
                    className="btn-custom"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
        ))}
      </section>
    </div>
  );
};

export default AllArticles;
