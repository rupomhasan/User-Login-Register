import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home/Home";
import Login from "../Layout/Login/Login";
import Register from "../Layout/Register/Register";
import ConatctUs from "../Layout/Contact/ConatctUs";

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <ConatctUs></ConatctUs>,
      },
    ],
  },
]);

export default myCreatedRouter;
