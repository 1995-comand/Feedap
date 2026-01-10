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
import ProductDetail from "./Pages/ProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Menyu",
        element: <Menyu />,
      },
      {
        path: "Sales",
        element: <Sales />,
      },
      {
        path: "WorkPlace",
        element: <WorkPlace />,
      },
      {
        // Pathless layout route for Home and Product Details (Modal)
        element: <Home />,
        children: [
          { index: true, element: null }, // Matches / (Home displays grid + null outlet)
          { path: "product/:id", element: <ProductDetail /> } // Matches /product/:id (Home displays grid + Modal)
        ]
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
