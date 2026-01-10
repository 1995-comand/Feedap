import React from "react";
import Home from "./Pages/Home";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="container mx-auto w-[85%]">
     <Navbar />
      <Outlet />
      {/* as */}
    </div>
  );
};

export default App;
