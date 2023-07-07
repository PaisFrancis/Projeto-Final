import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Staff from "../pages/Staff";
import Kitchen from "../pages/Kitchen";
import Login from "../pages/Login";
import NotFound from "../pages/Not Found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Staff />,
      },
      {
        path: "/kitchen",
        element: <Kitchen />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);
