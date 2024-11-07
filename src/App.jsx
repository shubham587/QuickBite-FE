import { useState } from 'react'
import { BrowserRouter ,Routes, Route, useParams, useLocation  } from "react-router-dom";
import LoginPage from './pages/login';
import Navbar from './components/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './Layout/DefaultLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: "homeComp"
      }, 
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
