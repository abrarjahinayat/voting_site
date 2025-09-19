import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  }, 
]);
const App = () => {
  return (
     <RouterProvider router={router} />
  )
}

export default App