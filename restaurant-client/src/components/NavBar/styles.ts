import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.primary}; // black background
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledNavLink = styled(NavLink)`
  margin: 0 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.secondary};

  &.active {
    color: ${({ theme }) => theme.palette.text.tertiary};
    border-bottom: 2px solid ${({ theme }) => theme.palette.text.secondary};
  }

  &:hover {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const AuthButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.text.secondary};
  border: 1px solid ${({ theme }) => theme.palette.text.secondary}; // white border
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme.palette.text.tertiary}; // gray background on hover
    color: ${({ theme }) => theme.palette.primary}; // black text on hover
  }
`;
