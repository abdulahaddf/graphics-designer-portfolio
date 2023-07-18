import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
const Articles = () => {
    AOS.init();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading]= useState(false);

    useEffect(() => {
      fetch('http://localhost:5000/articles')
        .then((response) => response.json())
        .then((data) => {
          console.log("Received data:", data);
          setArticles(data);
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
          setLoading( true );
        });
    }, [articles]); 
    
  return (
    <section name="articles" className="w-4/5 mx-auto my-24">
        <h1 className="heading pb-2">Articles</h1>
        <section className="grid grid-cols-2 gap-4  justify-self-center items-center mt-16">

        {articles.slice(0,4).map((art) => (
        
        <div key={art._id}
          className="glass p-5 rounded-tr-3xl rounded-bl-3xl flex gap-2 hover:shadow-xl h-[35vh]"
         
        >
          <div>
            <img className="w-[800px]  p-2 " src={art.imageURL} alt="" />
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-semibold text-xl text-orange">{art.articleName}</h1>
            <p className="my-2">
            {art.description.length > 150
              ? `${art.description.substring(0, 150)}...`
              : art.description}
              {
                loading ? 'Loading...' : ''
              }
          </p>
            <div className="flex justify-end">
              <Link to={`/singlearticles/${art._id}`} className="btn-custom">Read More</Link>
            </div>
          </div>
        </div>
    
    ))}



</section>
<div className=" text-center mt-10">
    <Link to="/articles" className="btn-new" offset={-150}>See More</Link>
</div>
    </section>
  );
};

export default Articles;
