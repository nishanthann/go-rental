import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className=" flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#021537] to-[#bfbfc4] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden">
      <div className=" text-white">
        <h2 className="text-2xl font-medium">
          Own a Car, Van, or Tuk Tuk in Sri Lanka?
        </h2>
        <p className="mt-2">
          Turn your vehicle into a source of income by listing it on CarRental.
        </p>
        <p className="max-w-130">
          We handle insurance, driver checks, and secure payments — so you can
          earn stress-free while we do the hard work.
        </p>
        <button className="px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer ">
          List your vehicle
        </button>
      </div>
      <img
        src={assets.banner_car_image}
        alt="banner"
        className="max-h-45 mt-2"
      />
    </div>
  );
};

export default Banner;
