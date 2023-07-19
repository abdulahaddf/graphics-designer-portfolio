import { Link } from "react-router-dom";


const LogoLink = () => {
    return (
        <div>
             <Link to="/">
                 <img
                    className="shrink-0 w-36 md:w-72"
                    src="/logo.png"
                    alt="logo"
                  />
                 </Link>
        </div>
    );
};

export default LogoLink;