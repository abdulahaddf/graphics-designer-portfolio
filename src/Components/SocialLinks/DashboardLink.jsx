import { Link } from "react-router-dom";


const DashboardLink = () => {
    const isAdmin = true;
    return (
        <div>
              {
                    isAdmin ?  <Link className="hover:text-orange hover:scale-125 duration-300" activeClass="active" to="/dashboard/welcome" spy={true} smooth={true} offset={-20} duration={500} >
                    Dashboard
                   </Link> : ""
                  }
        </div>
    );
};

export default DashboardLink;