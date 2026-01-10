import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About.jsx";
import Sales from "./Pages/Sales.jsx";
import Menyu from "./Pages/Menyu.jsx";
import WorkPlace from "./Pages/WorkPlace.jsx";
import Callcenter from "./Pages/Callcenter.jsx";

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
        path: "Callcenter",
        element: <Callcenter />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
