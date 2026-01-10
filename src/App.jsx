import React from "react";
import Home from "./Pages/Home";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="container mx-auto w-[85%]">
      <Home />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
