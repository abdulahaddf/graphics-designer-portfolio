import AOS from "aos";
import "aos/dist/aos.css";
import { TfiHandPointRight } from "react-icons/tfi";

const Services = () => {
  AOS.init();
  return (
    <div name="services" className="w-4/5 mx-auto my-24">
      <h1 className="heading pb-2">My Services</h1>
      <section className="grid grid-cols-2 gap-4  justify-self-center items-center mt-16">
        <div
          className="glass p-5 rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl"
          data-aos="fade-up"
        >
          <div className="w-2/6 mx-auto">
            {" "}
            <img
              className=""
              src="https://i.ibb.co/4JKQCJn/Unique-Idea.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-semibold text-3xl py-2 text-orange">Starter</h1>

            <ul className="my-5">
              <li className="flex gap-2 items-center">
                <TfiHandPointRight /> Logo from multiple sketches
              </li>
              <li className="flex gap-2 items-center">
                <TfiHandPointRight /> Typography and color variations
              </li>
              <li className="flex gap-2 items-center">
                <TfiHandPointRight /> Logo transparency
              </li>
            </ul>

            <div>
              <p className="font-semibold text-3xl py-2 text-orange">$75</p>
              <div className="flex gap-2 ">
                <del className="text-[#94a3b8]">$100</del>
                <p>-25%</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            {/* You can open the modal using ID.showModal() method */}
            <button
              className="btn-custom"
              onClick={() => window.my_modal_3.showModal()}
            >
              Show Details
            </button>
            <dialog id="my_modal_3" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
                <h1 className="font-semibold text-3xl py-2 text-orange">
                  Starter
                </h1>
                <ul className="my-5">
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> Logo from multiple sketches
                  </li>
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> Typography and color variations
                  </li>
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> Logo transparency
                  </li>
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> Printable files
                  </li>
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> Vector files
                  </li>
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> High resolution
                  </li>
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> Copyright transfer
                  </li>
                </ul>
              </form>
            </dialog>
          </div>
        </div>

        <div
          className="glass p-5 rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl"
          data-aos="fade-up"
        >
          <div className="w-2/6 mx-auto">
            {" "}
            <img
              className=""
              src="https://i.ibb.co/WyQJrnr/Pixel-Perfect.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-semibold text-3xl py-2 text-orange">Gold</h1>

            <ul className="my-5">
              <li className="flex gap-2 items-center">
                <TfiHandPointRight /> 2 Logos from multiple sketches
              </li>
              <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> Vector files
                  </li>
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> Printable files
                  </li>
            </ul>

            <div>
              <p className="font-semibold text-3xl py-2 text-orange">$150</p>
              <div className="flex gap-2 ">
                <del className="text-[#94a3b8]">$200</del>
                <p>-25%</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            {/* You can open the modal using ID.showModal() method */}
            <button
              className="btn-custom"
              onClick={() => window.my_modal_4.showModal()}
            >
              Show Details
            </button>
            <dialog id="my_modal_4" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
                <h1 className="font-semibold text-3xl py-2 text-orange">
                  Gold
                </h1>
                <ul className="my-5">
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> 2 Logos from multiple sketches
                  </li>
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> Typography and Color variations
                  </li>
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> Logo transparency
                  </li>
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> Printable files
                  </li>
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> Vector files
                  </li>
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> High resolution
                  </li>
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> Source file
                  </li>
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> Mockup presentation
                  </li>
                  <li className="flex gap-2 items-center">
                    <TfiHandPointRight /> Copyright transfer
                  </li>
                </ul>
              </form>
            </dialog>
          </div>
        </div>

        <div
          className="glass p-5 rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl"
          data-aos="fade-up"
        >
          <div className="w-2/6 mx-auto">
            {" "}
            <img
              className=""
              src="https://i.ibb.co/0Xp6VH3/Platinum-Package.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-semibold text-3xl py-2 text-orange">Platinum</h1>

            <ul className="my-5">
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> 4 Logos from multiple sketches
  </li>
  
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Mockup presentation
  </li>
 
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Stationary Design
  </li>

</ul>


            <div>
              <p className="font-semibold text-3xl py-2 text-orange">$280</p>
              <div className="flex gap-2 ">
                <del className="text-[#94a3b8]">$400</del>
                <p>-30%</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            {/* You can open the modal using ID.showModal() method */}
            <button
              className="btn-custom"
              onClick={() => window.my_modal_5.showModal()}
            >
              Show Details
            </button>
            <dialog id="my_modal_5" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
                <h1 className="font-semibold text-3xl py-2 text-orange">
                  Platinum
                </h1>
                <ul className="my-5">
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> 4 Logos from multiple sketches
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Typography and Color variations
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Logo transparency
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Printable files
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Vector files
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> High resolution
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Source file
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Mockup presentation
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Social media kit
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Stationary Design
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Copyright transfer
  </li>
</ul>

              </form>
            </dialog>
          </div>
        </div>
        <div
          className="glass p-5 rounded-tr-3xl rounded-bl-3xl  hover:shadow-xl"
          data-aos="fade-up"
        >
          <div className="w-2/6 mx-auto">
            {" "}
            <img
              className=""
              src="https://i.ibb.co/FK606fz/Palladium-Package.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-semibold text-3xl py-2 text-orange">Palladium</h1>

            <ul className="my-5">
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Monthly design solution
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Brand Identity with all facilities above
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> VIP Support
  </li>
 
</ul>



            <div>
              <p>Start From</p>
              <p className="font-semibold text-3xl py-1 text-orange">$800 <sup>*</sup></p>
              <div className="flex gap-2 ">
                {/* <del className="text-[#94a3b8]">$800</del> */}
                <p>-50%</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            {/* You can open the modal using ID.showModal() method */}
            <button
              className="btn-custom"
              onClick={() => window.my_modal_6.showModal()}
            >
              Show Details
            </button>
            <dialog id="my_modal_6" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
                <h1 className="font-semibold text-3xl py-2 text-orange">
                Palladium
                </h1>
                <ul className="my-5">
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Monthly design solution
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Brand Identity with all facilities above
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Typography and Color variations
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Free Design Consultancy
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Vector files
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Source file
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> High resolution
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Stationary design
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Social media design
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> VIP Support
  </li>
  <li className="flex gap-2 items-center">
    <TfiHandPointRight /> Copyright transfer
  </li>
</ul>


              </form>
            </dialog>
          </div>
        </div>

       
      </section>
    </div>
  );
};

export default Services;
