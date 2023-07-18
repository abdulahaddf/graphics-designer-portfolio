import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="glass mt-5 py-10 text-center">
            <p className="text-2xl text-orange">Thank You</p>
            <p className="my-2">All rights reserved by <Link className="hover:text-orange" to="https://www.google.com/search?q=ferdoushasan99&oq=ferdoushasan99&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBDjQwMjcxNjQxNWowajE1qAIAsAIA&sourceid=chrome&ie=UTF-8" target="_blank">@ferdoushasan99</Link> </p>
            <p>Developed by <Link className="hover:text-orange" to="https://abdulahad-df.netlify.app/" target="_blank">AHAD</Link></p>
        </div>
    );
};

export default Footer;