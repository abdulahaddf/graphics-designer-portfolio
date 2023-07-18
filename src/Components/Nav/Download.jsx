import { Link } from "react-router-dom";

const Download = () => {
    return (
        <div>
              <Link  to="/resume.pdf" target="_blank" className="btn-custom md:w-48" download>Download CV</Link>
        </div>
    );
};

export default Download;