import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import friends from './components/pages/friends';



const router = createBrowserRouter([
  {
    path: "/friends",
    element: <people />,
  },
  {
    path: "/People",
    element: <friends />,
  },
]);

function App() {
  <friends />

  return <RouterProvider router={router} />
}

export default App;
