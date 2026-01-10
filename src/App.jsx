import React from "react";
import Home from "./Pages/Home";
import { Outlet } from "react-router-dom";
import About from "./Pages/About"

const App = () => {
  return (
    <div className="container mx-auto w-[85%]">
      <Home />
      <Outlet />

    </div>
  );
};

export default App;
