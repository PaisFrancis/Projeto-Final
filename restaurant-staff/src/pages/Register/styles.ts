import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled components
export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`;

export const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 1em;
  background: ${({ theme }) => theme.palette.background.secondary};
`;

export const RegisterTitle = styled.h2`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RegisterLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const RegisterInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.text.secondary};
  background-color: transparent;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.palette.text.primary};
  outline: none;
  &:focus {
    border-bottom-color: ${({ theme }) => theme.palette.primary};
  }
`;

export const RegisterButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.primary};
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.background.primary};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary};
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
  margin-top: 1rem;
  color: ${({ theme }) => theme.palette.error};
`;
