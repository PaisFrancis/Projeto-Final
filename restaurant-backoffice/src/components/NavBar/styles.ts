import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { backofficeTheme } from "../../theme";

export const Nav = styled.nav`
  background: ${backofficeTheme.palette.primary};
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center; // Added to vertically align items
  padding: 0.2rem calc((100vw - 1000px) / 2);
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${backofficeTheme.palette.text.primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: ${backofficeTheme.palette.text.secondary};
    border-bottom: 2px solid ${backofficeTheme.palette.primary};
    @media (min-width: 640px) {
      color: ${backofficeTheme.palette.text.secondary};
    }
  }
`;

export const AuthButton = styled.button`
  border-radius: 4px;
  background: ${backofficeTheme.palette.background.primary};
  padding: 10px 22px;
  color: ${backofficeTheme.palette.tertiary};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${backofficeTheme.palette.background.secondary};
  }
`;
