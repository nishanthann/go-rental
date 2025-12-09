import logo from "./logo.svg";
import logonew from "./logonew.svg";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg";
import close_icon from "./close_icon.svg";
import users_icon from "./users_icon.svg";
import car_icon from "./car_icon.svg";
import location_icon from "./location_icon.svg";
import fuel_icon from "./fuel_icon.svg";
import addIcon from "./addIcon.svg";
import carIcon from "./carIcon.svg";
import carIconColored from "./carIconColored.svg";
import dashboardIcon from "./dashboardIcon.svg";
import dashboardIconColored from "./dashboardIconColored.svg";
import addIconColored from "./addIconColored.svg";
import listIcon from "./listIcon.svg";
import listIconColored from "./listIconColored.svg";
import cautionIconColored from "./cautionIconColored.svg";
import arrow_icon from "./arrow_icon.svg";
import star_icon from "./star_icon.svg";
import check_icon from "./check_icon.svg";
import tick_icon from "./tick_icon.svg";
import delete_icon from "./delete_icon.svg";
import eye_icon from "./eye_icon.svg";
import eye_close_icon from "./eye_close_icon.svg";
import filter_icon from "./filter_icon.svg";
import edit_icon from "./edit_icon.svg";
import calendar_icon_colored from "./calendar_icon_colored.svg";
import location_icon_colored from "./location_icon_colored.svg";
import testimonial_image_1 from "./testimonial_image_1.png";
import testimonial_image_2 from "./testimonial_image_2.png";

import main_auto from "./main_auto.png";

import user_profile from "./user_profile.png";
import upload_icon from "./upload_icon.svg";

export const cityList = [
  // Major cities
  "Colombo",
  "Kandy",
  "Galle",
  "Jaffna",
  "Negombo",
  "Trincomalee",

  // Historic
  "Anuradhapura",
  "Polonnaruwa",
  "Sigiriya",
  "Dambulla",
  "Ratnapura",

  // Coastal
  "Bentota",
  "Mirissa",
  "Hikkaduwa",
  "Batticaloa",
  "Kalpitiya",

  // Hill Country
  "Nuwara Eliya",
  "Ella",
  "Badulla",
  "Bandarawela",
];

export const assets = {
  logo,
  logonew,
  gmail_logo,
  facebook_logo,
  instagram_logo,
  twitter_logo,
  menu_icon,
  search_icon,
  close_icon,
  users_icon,
  edit_icon,
  car_icon,
  location_icon,
  fuel_icon,
  addIcon,
  carIcon,
  carIconColored,
  dashboardIcon,
  dashboardIconColored,
  addIconColored,
  listIcon,
  listIconColored,
  cautionIconColored,
  calendar_icon_colored,
  location_icon_colored,
  arrow_icon,
  star_icon,
  check_icon,
  tick_icon,
  delete_icon,
  eye_icon,
  eye_close_icon,
  filter_icon,
  testimonial_image_1,
  testimonial_image_2,

  main_auto,

  upload_icon,
  user_profile,
};

export const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Vehicles", path: "/cars" },
  { name: "My Bookings", path: "/my-bookings" },
];

export const ownerMenuLinks = [
  {
    name: "Dashboard",
    path: "/owner",
    icon: dashboardIcon,
    coloredIcon: dashboardIconColored,
  },
  {
    name: "Add vehicle",
    path: "/owner/add-car",
    icon: addIcon,
    coloredIcon: addIconColored,
  },
  {
    name: "Manage vehicles",
    path: "/owner/manage-cars",
    icon: carIcon,
    coloredIcon: carIconColored,
  },
  {
    name: "Manage Booking",
    path: "/owner/manage-booking",
    icon: listIcon,
    coloredIcon: listIconColored,
  },
];
