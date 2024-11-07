import { useState } from 'react'
import { BrowserRouter ,Routes, Route, useParams, useLocation  } from "react-router-dom";
import LoginPage from './pages/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LoginPage/>
    </div>
  )
}

export default App
