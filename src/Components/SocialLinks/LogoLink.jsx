import { Link } from "react-router-dom";


const LogoLink = () => {
    return (
        <div>
             <Link to="/">
                 <img
                    className="shrink-0 w-36 md:w-72"
                    src="https://i.ibb.co/q0Sgb2S/Logo-01-1.png"
                    alt="logo"
                  />
                 </Link>
        </div>
    );
};

export default LogoLink;