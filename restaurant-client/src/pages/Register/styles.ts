import { Link } from "react-router-dom";
import styled from "styled-components";

export const RegisterContainer = styled.div`
  font-family: "Caprasimo", cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

export const RegisterFormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

export const RegisterTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

export const RegisterForm = styled.form`
  display: grid;
  gap: 1rem;
`;

export const RegisterLabel = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const RegisterInput = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.tertiary};
`;

export const RegisterButton = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.text.secondary};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.tertiary};
  }
`;

export const SignInLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.primary};
  &:hover {
    color: ${({ theme }) => theme.palette.secondary};
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.palette.error};
  text-align: center;
`;
