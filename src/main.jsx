import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About.jsx";
import Sales from "./Pages/Sales.jsx";
import Menyu from "./Pages/Menyu.jsx";
import WorkPlace from "./Pages/WorkPlace.jsx";
import Callcenter from "./Pages/Callcenter.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import Branches from "./Pages/Branches.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "menyu",
        element: <Menyu />,
      },
      {
        path: "sales",
        element: <Sales />,
      },
      {
        path: "workplace",
        element: <WorkPlace />,
      },
      {
        path: "callcenter",
        element: <Callcenter />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "Branch",
        element: <Branches />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
