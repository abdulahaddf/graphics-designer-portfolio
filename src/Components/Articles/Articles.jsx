import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
const Articles = () => {
  AOS.init();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://port-server-two.vercel.app/articles")
      .then((response) => response.json())
      .then((data) => {
        // console.log("Received data:", data);
        setArticles(data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, [articles]);

  return (
    <div className="bg-cover h-full bg-[url('https://i.ibb.co/kBtmxqr/BG-2-01.png')]">
      <section name="articles" className="w-11/12 mx-auto my-24 ">
        <h1 className="heading pb-2">Articles</h1>
        <section className="grid md:grid-cols-2 gap-4  justify-self-center items-center mt-16">
          {articles.slice(0, 4).map((art) => (
            <div
              key={art._id}
              className="glass p-5 rounded-tr-3xl rounded-bl-3xl lg:flex gap-2 overflow-hidden hover:shadow-xl lg:h-[35vh] "
            >
              <div>
                <img
                  className="md:max-w-[300px] p-2"
                  src={art.imageURL}
                  alt="article"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h1 className="font-semibold text-xl text-orange">
                  {art.articleName}
                </h1>
                <article className="my-2" dangerouslySetInnerHTML={{__html:art.description.substring(0, 150)}}>
                 
                </article>
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
        <div className=" text-center mt-10">
          <Link to="/articles" className="btn-new" offset={-150}>
            See More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Articles;
