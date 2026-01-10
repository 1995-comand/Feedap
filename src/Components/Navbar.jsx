import React from "react";
import { Link, Links } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import SwitchControler from "./SwitchControler";
const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-20">
          <figure>
            <Link to="/">
              <img
                className="w-25"
                src="https://static.tildacdn.com/tild3433-3335-4663-b633-393138303263/feed_up.png"
                alt=""
              />
            </Link>c
          </figure>
          <ul className="flex items-center justify-between gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Menyu">Menyu</Link>
            </li>
            <li>
              <Link to="/Sales">Sales</Link>
            </li>
            <li>
              <Link to="/WorkPlace">WorkPlace</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-md bg-error text-white">
            Responsive
          </button>
          <h1 className="font-bold">+998946187788</h1>
          <CiSearch size={"20px"} />
          <SlBasket size={"20px"} />
          <CiHeart size={"20px"} />
          <TbWorld size={"20px"} />
          <CiUser size={"20px"} />
          <SwitchControler />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
