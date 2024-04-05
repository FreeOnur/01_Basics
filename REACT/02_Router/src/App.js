import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Person from "./components/Person";


const router = createBrowserRouter([
  {
    path: "/person",
    element: <Person />,
  },
]);

function App() {
  return <RouterProvider router={router} />

}

export default App;
