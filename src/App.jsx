import { useState } from 'react'
import { BrowserRouter ,Routes, Route, useParams, useLocation  } from "react-router-dom";
import LoginPage from './pages/login';
import Navbar from './components/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <LoginPage/> */}
      <Navbar />
    </div>
  )
}

export default App
