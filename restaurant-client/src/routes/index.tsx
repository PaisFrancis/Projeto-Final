import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Reservations from "../pages/Reservation";
import ItemsPage from "../pages/Item";
import Login from "../pages/Login";
import NotFound from "../pages/Not Found";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,

        element: <Home />,
      },
      {
        path: "/reservations",
        element: <Reservations />,
      },
      {
        path: "/menu",
        element: <ItemsPage />,
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
