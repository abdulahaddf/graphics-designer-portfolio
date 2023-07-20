import { AiOutlineWhatsApp, AiOutlineSend } from "react-icons/ai";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import SocialLinks from "../SocialLinks/SocialLinks";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  AOS.init();
  const email = "ferdoushasan40@gmail.com";
  const form = useRef();
  const [user_name, setUser_name] = useState();
  const [user_mail, setUser_mail] = useState();
  const [user_message, setUser_message] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ipt1cpo",
        "template_lkz4e0r",
        form.current,
        "EzmGrvLez2NYQ6G8Y"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          setUser_name("");
          setUser_mail("");
          setUser_message("");
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Your message has not sent",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };
  return (
    <div name="contact" className="w-11/12 mx-auto mt-10 bg-cover bg-[url('https://i.ibb.co/cLWYh47/BG-2-01-2.png')]">
      <h1 className="heading pb-2">Contact Me</h1>
      <section id="contact" className="mt-20 pb-10 md:pb-36 " data-aos="fade-up">
        <div className="flex flex-wrap p-10  justify-evenly gap-16 mt-10 glass  rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl">
          <div className="space-y-4  p-5 ">
            {" "}
            <h1 className="text-3xl">Have you any query? lets discuss </h1>{" "}
            <p className="flex items-center text-xl">
              <MdEmail className="mr-1 text-orange" />
              <a href="mailto:ferdoushasan40@gmail.com" className="hover:text-orange">
                {email}
              </a>
            </p>{" "}
            <a href="#" className="flex items-center text-xl hover:text-orange">
              <FaTelegramPlane className="mr-1 text-orange" />
              <AiOutlineWhatsApp className="mr-1 text-orange" />
              +880 1521559026
            </a>{" "}
            <p className="flex items-center text-xl hover:text-orange">
              <MdLocationPin className="mr-1 text-orange" /> Dhaka, Bangladesh
            </p>
            <SocialLinks></SocialLinks>
          </div>
          <div>

         
          <form
            className=" text-black p-5  mx-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="mb-2 md:w-[600px]">
              {" "}
              <input
                type="text"
                name="user_name"
                value={user_name}
                placeholder="Enter Your Name"
                className="input input-bordered  md:w-3/5 border-orange"
                required
              />{" "} 
              <br />
              <input
                type="email"
                name="user_email"
                value={user_mail}
                placeholder="Enter Your Mail"
                className="input input-bordered  md:w-3/5 my-3 border-orange"
                  required
              />
            </div>{" "}
            <textarea
              name="message"
              value={user_message}
              className="textarea  md:w-3/5 border-orange"
              placeholder="Enter your message"
            ></textarea>{" "}
            <button
              type="submit"
              value="Send"
              className="btn-custom w-24 mt-3 border-orange flex items-center text-orange  "
            >
              Send <AiOutlineSend />
            </button>
          </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
