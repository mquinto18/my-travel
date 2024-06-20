import React, { useState } from "react";

const Ratings = () => {
  const boxShadowStyle = {
    WebkitBoxShadow: "-1px 18.5px 25.5px -9px #dddddd",
    MozBoxShadow: "-1px 18.5px 25.5px -9px #dddddd",
    boxShadow: "-1px 18.5px 25.5px -9px #dddddd",
    borderRadius: "20px",
    padding: "30px 80px",
  };

  return (
    <div className="max-w-[1300px] m-auto grid grid-cols-1 px-11 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[-32px] ">
      <div
        data-aos="fade-right"
        style={boxShadowStyle}
        className="bg-[#ffffff] text-center rounded-10 font-poppins"
      >
        <h1 className="text-3xl">10M+</h1>
        <p className="text-[#847777] text-[15px]">Total Customers</p>
      </div>
      <div
        data-aos="fade-right"
        style={boxShadowStyle}
        className="bg-[#ffffff] text-center rounded-10"
        font-poppins
      >
        <h1 className="text-3xl">10M+</h1>
        <p className="text-[#847777] text-[15px]">Total Customers</p>
      </div>
      <div
        data-aos="fade-right"
        style={boxShadowStyle}
        className="bg-[#ffffff] text-center rounded-10 font-poppins"
      >
        <h1 className="text-3xl">10M+</h1>
        <p className="text-[#847777] text-[15px]">Total Customers</p>
      </div>
      <div
        data-aos="fade-right"
        style={boxShadowStyle}
        className="bg-[#ffffff] text-center rounded-10 font-poppins"
      >
        <h1 className="text-3xl">10M+</h1>
        <p className="text-[#847777] text-[15px]">Total Customers</p>
      </div>
    </div>
  );
};

export default Ratings;
