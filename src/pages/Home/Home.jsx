
import About from "../../Components/About/About";
import Articles from "../../Components/Articles/Articles";
import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import Expertise from "../../Components/Expertise/Expertise";
import Footer from "../../Components/Footer/Footer";

import Navbar from "../../Components/Nav/Navbar";
import Projects from "../../Components/Projects/Projects";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";


const Home = () => {
  
    return (
        <div >
            <div className="md:h-[100vh]  bg-cover bg-[url('https://i.ibb.co/7k33Jxm/BG-1.png')] " >
            <Navbar></Navbar>
            
            <Banner></Banner>   
            </div>
         <About></About>
        

         <Projects></Projects>
        
         <Expertise></Expertise>
         <Services></Services>
         <Articles></Articles>
         <Testimonials></Testimonials>
         <Contact></Contact>
        <Footer></Footer>
        </div>
    );
};

export default Home;