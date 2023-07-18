import { Link } from "react-router-dom";


const HomeLink = () => {
    return (
        <div>
             <Link to="/" className="hover:text-orange " >
                   Home
                  </Link>
        </div>
    );
};

export default HomeLink;