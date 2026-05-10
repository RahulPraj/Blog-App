import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <div>
        <Home/>
        <Navbar/>
      </div>
    },
    {
      path:'/about',
      element: <div>
        <About/>
        <Navbar/>
      </div>
    },
    {
      path:'/dashboard',
      element:<div>
        <Dashboard/>
        <Navbar/>
      </div>
    }
  ]
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
