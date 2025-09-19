import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home';
import FaceVerification from './components/FaceVerification';
import VotePanel from './components/VotePanel';
import ConfirmVote from './components/ConfirmVote';
import HoldToVote from './components/HoldToVote';


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
  }, {
    path: "confirm-vote",
    element: <ConfirmVote/>,
  }, {
    path: "hold-to-vote",
    element: <HoldToVote/>,
  }, 
]);
const App = () => {
  return (
     <RouterProvider router={router} />
  )
}

export default App