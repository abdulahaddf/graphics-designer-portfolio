import { FaFacebook } from "react-icons/fa";
import { AiFillDribbbleCircle, AiFillInstagram, AiFillLinkedin, AiFillBehanceCircle} from "react-icons/ai";


const SocialLinks = () => {
    return (
        <div>
            <div className="flex text-3xl pt-2  space-x-2">
  <FaFacebook className="hover:text-orange hover:-translate-y-1 duration-300"></FaFacebook>
  <AiFillDribbbleCircle className="hover:text-orange hover:-translate-y-1 duration-300"></AiFillDribbbleCircle>
   <AiFillInstagram className="hover:text-orange hover:-translate-y-1 duration-300"></AiFillInstagram>
   <AiFillLinkedin className="hover:text-orange hover:-translate-y-1 duration-300"></AiFillLinkedin> 
   <AiFillBehanceCircle className="hover:text-orange hover:-translate-y-1 duration-300"></AiFillBehanceCircle>
</div>
        </div>
    );
};

export default SocialLinks;