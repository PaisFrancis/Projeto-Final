import ReactDOM from "react-dom/client";
import "./index.css";
import AppProvider from "./context/AppContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
