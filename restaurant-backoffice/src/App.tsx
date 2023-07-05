import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { backofficeTheme } from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={backofficeTheme}>
        <NavBar />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
