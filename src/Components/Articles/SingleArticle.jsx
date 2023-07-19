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
              <div className="flex flex-col justify-between ">
                <h1 className="font-semibold text-5xl text-orange text-center">{art.articleName}</h1>
                <p className="my-20  " dangerouslySetInnerHTML={{__html:art.description}}></p>   
                {/* whitespace-pre-line --- to show exact text */}
               
              </div>
            </div>
        </div>
    );
};

export default SingleArticle;