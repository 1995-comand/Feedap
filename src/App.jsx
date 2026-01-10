import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Lupa from "./Components/Lupa";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="container mx-auto w-[85%]">
      <Navbar />
      <Lupa />
      <Outlet />
    </div>
  );
};

export default App;
