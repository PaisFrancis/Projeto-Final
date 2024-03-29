// NavBar.tsx
import { useNavigate, useLocation } from "react-router-dom";
import { useApp } from "../../hooks/useApp";
import { Nav, StyledNavLink, AuthButton } from "./styles";

type Page = {
  path: string;
  name: string;
  auth?: boolean;
};

function NavBar() {
  const { pathname } = useLocation();
  const { isLoggedIn, logout } = useApp();
  const navigate = useNavigate();

  const pages: Page[] = [
    {
      path: "/",
      name: "Staff",
      auth: true,
    },
    {
      path: "/kitchen",
      name: "Kitchen",
      auth: true,
    },
  ];

  function handleAuth() {
    if (isLoggedIn) {
      logout();
    }

    navigate(isLoggedIn ? "/" : "/login");
  }

  return (
    <Nav>
      <h1> Restaurantino </h1>
      {pages.map(
        ({ path, name, auth }) =>
          (!auth || isLoggedIn) && (
            <StyledNavLink
              key={path}
              to={path}
              className={pathname === path ? "active" : ""}
            >
              {name.toUpperCase()}
            </StyledNavLink>
          )
      )}
      <div>
        <AuthButton onClick={handleAuth}>
          {isLoggedIn ? "LOGOUT" : "LOGIN"}
        </AuthButton>
      </div>
    </Nav>
  );
}

export default NavBar;
