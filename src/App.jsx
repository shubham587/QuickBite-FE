import { useState } from 'react'
import { BrowserRouter ,Routes, Route, useParams, useLocation  } from "react-router-dom";
import LoginPage from './pages/login';
import Navbar from './components/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './Layout/DefaultLayout';
import LandPage from './pages/LandingPage/index.jsx';
import CatelougePage from './pages/CateloguePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <LandPage />,
        // loader: "loaderFunction",
        // action: "actionFunction"
      }, 
      {
        path: "/catelogue",
        element: <CatelougePage />,
        // loader: "cateLoader"
      }
    ]
  }
])

function App() {

  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
