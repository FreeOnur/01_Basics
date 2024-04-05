import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Person from "./components/pages/Person";
import People from "./components/pages/People";


const router = createBrowserRouter([
  {
    path: "/person",
    element: <Person />,
  },
  {
    path: "/people",
    element: <People />,
  },
]);

function App() {
  return <RouterProvider router={router} />

}

export default App;
