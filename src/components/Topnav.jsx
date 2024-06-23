import React, { useState } from "react";
import NavLink from "./NavLink";
import { navLinks } from "../Data";
import MobileNavLink from "./MobileNavLink";
const Topnav = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div
      className="h-[900px] lg:h-[800px] bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/2499780/pexels-photo-2499780.jpeg")',
      }}
    >
      <div>
        <nav>
          <div className="z-10 fixed right-5 mt-5 cursor-pointer lg:hidden bg-slate-500 h-10 w-10 flex justify-center items-center rounded-full">
            <i
              onClick={() => setSideNav(!sideNav)}
              className="fa-solid fa-bars text-2xl"
              style={{ color: "#ffffff" }}
            ></i>
          </div>
          <div
            className={
              sideNav
                ? "fixed top-0 right-0 bg-[#ffffff] h-full w-[250px] z-10 duration-100"
                : "fixed top-0 hidden bg-[#ffffff] h-full w-[250px] z-10 duration-100"
            }
          >
            <i
              onClick={() => setSideNav(!setSideNav)}
              className="z-50 fa-solid fa-xmark fixed right-10 mt-5 text-2xl cursor-pointer h-[100vh]"
            ></i>

            <div className=" h-[550px] flex justify-center items-center  ">
              <ul className="flex flex-col gap-6 text-[20px] font-lato w-[200px]">
                {/* <li className="hover:bg-[#0B2126] rounded-full px-5 py-2 hover:text-white cursor-pointer transition-colors duration-300">
                  MAIN
                </li>
                <li className="hover:bg-[#0B2126] rounded-full px-5 py-2 hover:text-white cursor-pointer transition-colors duration-300">
                  ABOUT US
                </li>
                <li className="hover:bg-[#0B2126] rounded-full px-5 py-2 hover:text-white cursor-pointer transition-colors duration-300">
                  TOURS
                </li>
                <li className="hover:bg-[#0B2126] rounded-full px-5 py-2 hover:text-white cursor-pointer transition-colors duration-300">
                  GALLERY
                </li>
                <li className="hover:bg-[#0B2126] rounded-full px-5 py-2 hover:text-white cursor-pointer transition-colors duration-300">
                  REVIEWS
                </li>
                <li className="hover:bg-[#0B2126] rounded-full px-5 py-2 hover:text-white cursor-pointer transition-colors duration-300">
                  CONTACTS
                </li> */}
                {navLinks.map((navlink) => {
                  return <MobileNavLink key={navlink.id} {...navlink} />;
                })}
              </ul>
            </div>
          </div>
          <div className="max-w-[1000px] m-auto pt-20 lg:pt-20 flex justify-between items-center border-b border-white px-10 sm:px-0  ">
            <img
              className="py-2"
              style={{ width: "50px" }}
              src="https://clipground.com/images/travel-logo-design-clipart-1.png"
              alt=""
            />
            <div className="hidden lg:flex">
              <ul className="text-white list-none flex gap-5 text-1xl font-lato cursor-pointer">
                {navLinks.map((navlink) => {
                  return <NavLink key={navlink.id} {...navlink} />;
                })}
              </ul>
            </div>
            <div className="bg-white rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[300px] relative">
              <i className="fa-solid fa-magnifying-glass absolute right-5"></i>
              <input
                className="bg-transparent p-2 pr-10 w-full focus:outline-none"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div
            id="main"
            data-aos="fade-right"
            className="max-w-[1000px] m-auto pt-20 lg:pt-40 pl-5 sm:pl-0 "
          >
            <div className="text-3xl sm:text-5xl md:text-7xl text-white font-poppins font-bold">
              <h1>ONLINE HUB</h1>
              <h1>TRAVEL ADVENTURES</h1>
            </div>
            <div className="w-[320px] lg:w-[500px] sm:w-[500px] text-white py-5 sm:text-sm font-lato">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut{" "}
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] m-auto pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 border-b border-white pb-4 pl-5 sm:pl-0">
            <div data-aos="fade-right" className="flex flex-col gap-4 ">
              <div className="w-[270px] flex justify-center items-center gap-5">
                <i
                  className="fa-solid fa-umbrella-beach text-2xl"
                  style={{ color: "#ffffff" }}
                ></i>
                <p className="text-white  font-lato">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </div>
              <div className="w-[270px] flex items-center gap-3">
                <h1 className="text-white font-roboto font-bold">EXPLORE</h1>
                <i
                  className="fa-solid fa-arrow-right-long"
                  style={{ color: "#ffffff" }}
                ></i>
              </div>
            </div>
            <div data-aos="fade-right" className="flex flex-col gap-4 ">
              <div className="w-[270px] flex justify-center items-center gap-5">
                <i
                  className="fa-solid fa-umbrella-beach text-2xl"
                  style={{ color: "#ffffff" }}
                ></i>
                <p className="text-white  font-lato">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </div>
              <div className="w-[270px] flex items-center gap-3">
                <h1 className="text-white font-roboto font-bold">EXPLORE</h1>
                <i
                  className="fa-solid fa-arrow-right-long"
                  style={{ color: "#ffffff" }}
                ></i>
              </div>
            </div>
            <div data-aos="fade-right" className="flex flex-col gap-4 ">
              <div className="w-[270px] flex justify-center items-center gap-5">
                <i
                  className="fa-solid fa-umbrella-beach text-2xl"
                  style={{ color: "#ffffff" }}
                ></i>
                <p className="text-white  font-lato">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </div>
              <div className="w-[270px] flex items-center gap-3">
                <h1 className="text-white font-roboto font-bold">EXPLORE</h1>
                <i
                  className="fa-solid fa-arrow-right-long"
                  style={{ color: "#ffffff" }}
                ></i>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Topnav;
