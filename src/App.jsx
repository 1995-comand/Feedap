import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="container mx-auto w-[85%]">
     <Navbar />
      <Outlet />
      
    </div>
  );
};

export default App;
