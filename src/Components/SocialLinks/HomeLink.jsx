import { Link } from "react-router-dom";


const HomeLink = () => {
    return (
        <div>
             <Link to="/" className="hover:text-orange hover:scale-125 duration-300" >
                   Home
                  </Link>
        </div>
    );
};

export default HomeLink;