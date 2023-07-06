import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
