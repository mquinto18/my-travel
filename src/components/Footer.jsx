import React from "react";

function Footer() {
  return (
    <div
      id="contact"
      className="max-w-[100%] lg:h-[1000px] h-[1600px] m-auto bg-[#0B2126]"
    >
      <div className="max-w-[1000px] m-auto px-4 pt-20 text-white border-b border-white pb-10">
        <h1 className="opacity-60 font-sanchez text-2xl">For Update</h1>
        <h1 className="font-sanchez text-5xl">Contact Us</h1>
        <div className="mt-10  lg:flex justify-center items-center gap-20 text-[17px]">
          <div className="">
            <div className="flex flex-col gap-4 w-[300px] ">
              <input
                className="bg-transparent border-b border-white px-4 outline-none"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="bg-transparent border-b border-white px-4 outline-none"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="mt-10">
              <textarea
                className="text-white bg-transparent border-[1px] border-white px-2 py-2 w-[300px] lg:w-[600px] h-[200px] "
                name="large-text"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="mt-5">
              <button className="bg-white text-black px-10 py-2 text-[12px] rounded-full font-poppins">
                Submit
              </button>
            </div>
          </div>
          <div>
            <div className="w-[300px] mt-10 lg:mt-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>
            </div>
            <div className="flex gap-3 mt-7">
              <i
                className="fa-brands fa-facebook text-[28px]"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className="fa-brands fa-square-instagram text-[28px]"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className="fa-brands fa-square-twitter text-[28px]"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className="fa-brands fa-youtube text-[28px]"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:gap-32 pt-20 items-center max-w-[1000px] m-auto px-4 text-white">
        <div className=" font-poppins font-bold text-[25px] flex flex-col gap-3 ">
          <h1>FIND A STORE</h1>
          <h1>BECOME A MEMBER</h1>
          <h1>STUDENT DISCOUNT</h1>
          <h1>SEND US FEEDBACK</h1>
        </div>
        <div className="flex flex-col gap-2  mb-10 mt-10">
          <h1 className="font-poppins font-bold text-[25px]">GET HELP</h1>
          <p className="text-[#A1A0A0] text-[18px] font-lato">Order Status</p>
          <p className="text-[#A1A0A0] text-[18px] font-lato">Delivery</p>
          <p className="text-[#A1A0A0] text-[18px] font-lato">Returns</p>
          <p className="text-[#A1A0A0] text-[18px] font-lato">
            Payment Options
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-poppins font-bold text-[25px] ">GET HELP</h1>
          <p className="text-[#A1A0A0] text-[18px] font-lato">Order Status</p>
          <p className="text-[#A1A0A0] text-[18px] font-lato">Delivery</p>
          <p className="text-[#A1A0A0] text-[18px] font-lato">Returns</p>
          <p className="text-[#A1A0A0] text-[18px] font-lato">
            Payment Options
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
