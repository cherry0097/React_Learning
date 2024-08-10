import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    }
])
  return (
    <>
      
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
