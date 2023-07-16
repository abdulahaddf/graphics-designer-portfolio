
import About from "../../Components/About/About";
import Articles from "../../Components/Articles/Articles";
import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import Expertise from "../../Components/Expertise/Expertise";

import Navbar from "../../Components/Nav/Navbar";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <div className="md:h-[100vh]  bg-cover bg-[url('https://i.ibb.co/DMNcGTW/BG.jpg')]">
            <Navbar></Navbar>
            
            <Banner></Banner>
            </div>
         <About></About>
         <Expertise></Expertise>
         <Services></Services>
         <Articles></Articles>
         <Testimonials></Testimonials>
         <Contact></Contact>
        
        </div>
    );
};

export default Home;