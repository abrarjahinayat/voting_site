import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home';
import FaceVerification from './components/FaceVerification';
import VotePanel from './components/VotePanel';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },  {
    path: "face-verification",
    element: <FaceVerification/>,
  },  {
    path: "vote-panel",
    element: <VotePanel/>,
  }, 
]);
const App = () => {
  return (
     <RouterProvider router={router} />
  )
}

export default App