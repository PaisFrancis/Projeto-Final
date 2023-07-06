import styled from "styled-components";

export const Container = styled.div`
  font-family: "Caprasimo", cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

export const LoginFormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.tertiary};
`;

export const SubmitButton = styled.button`
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

export const RegisterLink = styled.a`
  color: ${({ theme }) => theme.palette.primary};
  text-decoration: none;
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.palette.error};
  text-align: center;
`;
