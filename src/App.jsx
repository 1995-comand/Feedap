import React from "react";
import Home from "./Pages/Home";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Lupa from "./Components/Lupa";

const App = () => {
  return (
    <div className="container mx-auto w-[85%]">
      <Lupa />
    </div>
  );
};

export default App;
