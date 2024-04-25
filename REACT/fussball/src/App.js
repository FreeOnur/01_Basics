import Home from "./components/pages/home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Tabelle from "./components/pages/tabelle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/table",
    element: <Tabelle />,
  }

]);

function App() {
  return <RouterProvider router={router} />


}

export default App;
