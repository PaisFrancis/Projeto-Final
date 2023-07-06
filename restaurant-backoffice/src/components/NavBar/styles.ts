import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.palette.background};
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.palette.text.primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.palette.secondary};
    @media (min-width: 640px) {
      color: ${({ theme }) => theme.palette.text.secondary};
    }
  }
`;

export const AuthButton = styled.button`
  border-radius: 4px;
  background: ${({ theme }) => theme.palette.background.primary};
  padding: 10px 22px;
  color: ${({ theme }) => theme.palette.tertiary};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.palette.background.secondary};
  }
`;
