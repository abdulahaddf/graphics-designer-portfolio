import { FaFacebook } from "react-icons/fa";
import { AiFillDribbbleCircle, AiFillInstagram, AiFillLinkedin, AiFillBehanceCircle} from "react-icons/ai";
import { Link } from "react-router-dom";


const SocialLinks = () => {
    return (
        <div>
            <div className="flex text-3xl pt-2  space-x-2">
                
   <Link to="https://www.facebook.com/ferdoushasan99" target="_blank"><FaFacebook className="hover:text-orange hover:-translate-y-1 duration-300"></FaFacebook></Link>
   <Link to="https://dribbble.com/ferdoushasan99" target="_blank"><AiFillDribbbleCircle className="hover:text-orange hover:-translate-y-1 duration-300">    
            </AiFillDribbbleCircle></Link>
   <Link to="https://www.instagram.com/ferdoushasan99" target="_blank"><AiFillInstagram className="hover:text-orange hover:-translate-y-1 duration-300"></AiFillInstagram>
                 </Link>
   <Link to="https://www.linkedin.com/in/ferdoushasan99" target="_blank"><AiFillLinkedin className="hover:text-orange hover:-translate-y-1 duration-300"></AiFillLinkedin> 
                    </Link>
   <Link to="https://www.behance.net/ferdoushasan99" target="_blank"><AiFillBehanceCircle className="hover:text-orange hover:-translate-y-1 duration-300"></AiFillBehanceCircle></Link>
</div>
        </div>
    );
};

export default SocialLinks;