import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  const { pickupDate, setPickupDate, retunDate, setReturnDate, navigate } =
    useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      "/cars?pickupLocation" +
        pickupLocation +
        "&pickupDate=" +
        pickupDate +
        "&returnDate" +
        retunDate
    );
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center "
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-4xl md:text-5xl font-semibold"
      >
        Exotic Fleet Awaits
      </motion.h1>
      <form
        onSubmit={handleSearch}
        className="z-1 relative flex flex-col md:flex-row items-start md:items-center justify-between mb-15 p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white/20 shadow-[0px_8px_20px_rgba(0,0,0,0.1)]"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8">
          <div className="flex flex-col items-start gap-2 ">
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            >
              <option value="">Pickup Loation</option>

              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className="px-1 text-sm text-gray-500">
              {pickupLocation ? pickupLocation : "Please select the location"}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 ">
            <label htmlFor="pickup-date">Pick-up date</label>
            <input
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              type="date"
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
              className="text-sm text-gray-500"
              required
            />
          </div>
          <div className="flex flex-col items-start gap-2 ">
            <label htmlFor="return-date">Return-date</label>
            <input
              value={retunDate}
              onChange={(e) => setReturnDate(e.target.value)}
              type="date"
              id="return-date"
              min={new Date().toISOString().split("T")[0]}
              className="text-sm text-gray-500"
              required
            />
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer"
        >
          <img
            src={assets.search_icon}
            alt="search"
            className="brightness-300"
          />
          Search
        </motion.button>
      </form>
      <div className="max-h-74 h-74"></div>

      <motion.img
        initial={{ x: -100, y: -20, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.7 }}
        src={assets.main_auto}
        alt=" car"
        className="max-h-88 -mt-30 sm:mt-38 sm:absolute max-sm:h-54 max-sm:-mt-50"
      />
    </motion.div>
  );
};

export default Hero;
