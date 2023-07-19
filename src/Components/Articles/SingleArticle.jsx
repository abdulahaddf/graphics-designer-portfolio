import { useLoaderData } from "react-router-dom";
import Navbar from "../Nav/Navbar";


const SingleArticle = () => {
    const art = useLoaderData();
    
    return (
        <div>
            <Navbar></Navbar>
          
            <div 
              className="glass p-5 rounded-tr-3xl rounded-bl-3xl  gap-2 hover:shadow-xl my-20 w-11/12 mx-auto"
             
            >
              <div>
                <img className="w-[500px] mx-auto  p-2 " src={art.imageURL} alt="" />
              </div>
              <div className="flex flex-col justify-between text-center">
                <h1 className="font-semibold text-5xl text-orange">{art.articleName}</h1>
                <p className="my-20 whitespace-pre-line text-left">{art.description}</p>
                
              </div>
            </div>
        </div>
    );
};

export default SingleArticle;