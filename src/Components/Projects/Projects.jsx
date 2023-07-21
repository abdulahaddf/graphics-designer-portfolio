import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import LazyLoad from "react-lazyload";
import { Helmet } from "react-helmet";
const Projects = () => {
  AOS.init();
  const [projects, setprojects] = useState([]);

  useEffect(() => {
    fetch("https://port-server-two.vercel.app/projects")
      .then((response) => response.json())
      .then((data) => {
        //   console.log("Received data:", data);
        setprojects(data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, [projects]);


  

  return (
    <section name="projects" className="w-4/5 mx-auto my-24 ">
      
    
      {
         projects.length > 0 && projects ? <><h1 className="heading pb-2">Projects</h1>
         <section className="grid lg:grid-cols-2 gap-10 justify-self-center items-center mt-16">
           {projects.slice(0, 4).map((pro) => (
             <div
               key={pro._id}
               className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl"
               data-aos="fade-up"
             >
              <Helmet>
            <meta name="description" content={pro.description} />
            <meta property="og:title" content={pro.title} />
            <meta property="og:description" content={pro.description} />
            <meta property="og:image" content={pro.imageURL} />
           
          </Helmet>
               <div className="relative ">
                <LazyLoad>

                 <img
                   src={pro.imageURL}
                   alt={`Project: ${pro.title}`}
                   className="object-cover lg:max-w-[600px] mx-auto transition-all duration-300 transform hover:scale-110"
                   />
                   </LazyLoad>
               </div>

               {/* Project title------------------------------------------------ */}

               <p className="p-3 text-2xl md:text-3xl text-center  2xl:h-2/3 md:pt-5">{pro.title}</p>

               <div className="bg-black px-6 py-4 bg-opacity-50 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200 flex flex-col items-center justify-center text-center">
                 <Link
                   to={pro.description}
                   target="_blank"
                   className="font-semibold text-xl hover:text-orange hover:bg-black hover:bg-opacity-50 p-5 rounded-lg "
                 >
                   Learn More{" "}
                   <MdOutlineSubdirectoryArrowRight className="w-10 mx-auto" />
                 </Link>
               </div>
                 {/* Meta Tags for SEO */}

            

             </div>

             

           ))}
         </section>
            {
              projects.length > 4 ? <div className=" text-center mt-10">
              <Link to="/allProjects" className="btn-new" offset={-150}>
                See More
              </Link>
            </div> : ""
            }
         </> : <h1 className="text-center ">Projects are Not Loaded Yet <br /> <span className="loading loading-bars loading-lg text-orange"></span></h1>
      }
     
    </section>
  );
};

export default Projects;
