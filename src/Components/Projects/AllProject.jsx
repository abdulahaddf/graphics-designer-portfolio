import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import Navbar from "../Nav/Navbar";

const AllProject = () => {
  const [projects, setprojects] = useState([]);

  useEffect(() => {
    fetch("https://port-server-two.vercel.app/projects")
      .then((response) => response.json())
      .then((data) => {
        console.log("Received data:", data);
        setprojects(data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, [projects]);
  return (
    <>
      <Navbar></Navbar>
      <section name="projects" className="w-4/5 mx-auto my-24">
        <h1 className="heading pb-2">Projects</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 justify-self-center items-center mt-16">
          {projects.map((pro) => (
            <div
              key={pro._id}
              className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={pro.imageURL}
                  alt="project"
                  className="object-cover w-full transition-all duration-300 transform hover:scale-110"
                />
              </div>
              <p className="py-3 text-center">{pro.title}</p>
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
            </div>
          ))}
        </section>
      </section>{" "}
    </>
  );
};

export default AllProject;
