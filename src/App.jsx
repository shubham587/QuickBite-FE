import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import LandPage from "./pages/LandingPage/index.jsx";
import CatelougePage, {loader as CatelogueLoader} from "./pages/CateloguePage";
// import { loader as CatelogueLoader } from "../src/pages/CateloguePage/index.jsx";
import SignUp, { action as signupAction} from "./pages/Signup/index.jsx";
import LoginPage, {action as loginAction} from "./pages/Login/index.jsx";
import CartPage, {loader as CartLoader} from "./pages/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <LandPage />,
      },
      {
        path: "catelogue/:seller_name?", 
        element: <CatelougePage />,
        loader: CatelogueLoader,
      },
      {
        path: "order",
      },
      {
        path: "cart",
        element: <CartPage />,
        loader: CartLoader,
      },
      {
        path: "account"
      }
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "signup",
        element: <SignUp />,
        action: signupAction
      },
      {
        path: "login",
        element: <LoginPage />,
        action: loginAction
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
