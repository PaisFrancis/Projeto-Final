import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Reservations from "../pages/Reservation";
import Tables from "../pages/Table";
import ItemsPage from "../pages/Item";
import Login from "../pages/Login";
import NotFound from "../pages/Not Found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Reservations />,
      },
      {
        path: "/tables",
        element: <Tables />,
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
