import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Buyer from "./Pages/Buyer";
import Seller from "./Pages/Seller";
import BuyerCatalog from "./Pages/BuyerCatalog";
import OrdersPage from "./components/OrdersPage/OrdersPage";
import Cart from "./components/Cart/Cart";
import AccDec from "./components/AccDec/AccDec";
import Favourite from "./components/Favourite/Favourite";

const router = createBrowserRouter([
  {
    path: "/Buyer",
    element: <Buyer />,
  },

  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/BuyerCatalog",
    element: <BuyerCatalog />,
  },

  {
    path: "/Seller",
    element: <OrdersPage />,
  },
  {
    path: "/BuyerCatalog",
    element: <BuyerCatalog />,
  },

  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/OrdersPage",
    element: <AccDec />,
  },
  {
    path: "/Favourite",
    element: <Favourite />,
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
