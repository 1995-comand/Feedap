import React from "react";
import Home from "./Pages/Home";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="container mx-auto w-[85%]">
      <Home />
      <Outlet />
      {/* as */}
    </div>
  );
};

export default App;
