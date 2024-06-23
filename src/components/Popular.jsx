import React from "react";
import { topSpots } from "./Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Popular = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      id="destination"
      className="max-w-[100%] m-auto h-[850px] lg:h-[770px] mt-20 bg-[#0B2126]"
    >
      <div className="max-w-[1200px] m-auto ">
        <div className="lg:flex justify-between items-center pt-16 text-white m-4">
          <div className="">
            <h1 className="opacity-60 font-sanchez text-2xl">
              Top Destination
            </h1>
            <h1 className="font-sanchez text-5xl">Popular Spots</h1>
          </div>
          <div className="w-[90%] mt-5 lg:w-[40%] font-lato">
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed
            </p>
          </div>
        </div>
        <div>
          <div className="mt-12">
            <Slider {...settings}>
              {topSpots.map((spot) => (
                <div key={spot.id}>
                  <div className="m-4">
                    <img
                      className="h-[430px] w-full object-cover  rounded-[20px] shadow-md cursor-pointer"
                      src={spot.img}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-12">
        <button className="bg-white text-black px-10 py-2 text-[12px] rounded-full font-poppins">
          View More
        </button>
      </div>
    </div>
  );
};

export default Popular;
