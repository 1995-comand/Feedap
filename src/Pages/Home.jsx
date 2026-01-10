import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Menyu from "./Menyu";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Menyu/>
    </div>
  );
};

export default Home;
