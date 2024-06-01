import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/Home';
import QrCodeURLPage from './components/pages/QrCodeURLPage';
import QrCodeTextPage from './components/pages/QrCodeTextPage';
import QrCodeSMSPage from './components/pages/QrCodeSMSPage';
import QrCodeEMAILPage from './components/pages/QrCodeEMAILPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/qrcode-URL",
    element: <QrCodeURLPage/>
  },
  {
    path: "/qrcode-TEXT",
    element: <QrCodeTextPage/>
  },
  {
    path: "/qrcode-SMS",
    element: <QrCodeSMSPage/>
  },
  {
    path: "/qrcode-EMAIL",
    element: <QrCodeEMAILPage/>
  }

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
