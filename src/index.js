import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Buyer from "./pages/Buyer";
import Seller from "./pages/Seller";
import BuyerCatalog from "./pages/BuyerCatalog";

const router = createBrowserRouter([
  {
    path: "/Buyer",
    element: <Buyer/>,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Seller",
    element: <Seller />,
  },
  {
    path: "/BuyerCatalog",
    element: <BuyerCatalog />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
