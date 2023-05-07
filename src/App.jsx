import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './componentes/NavBar';
import Home from './vistas/Home'
import About from './vistas/About'
import Menu from './vistas/Menu'
import NotFound from'./vistas/NotFound'
import Footer from './componentes/Footer'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home></Home></div>,
  },
  {
    path: "/About",
    element: <div><About></About></div>,
  },
  {
    path: "/Menu",
    element: <div><Menu></Menu></div>,
  },
  {
    path: "*",
    element: <div><NotFound></NotFound></div>,
  },
]);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}

export default App
