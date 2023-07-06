import { styled } from "styled-components";
import { Link } from "react-router-dom";

// Styled components
export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

export const Title = styled.h2`
  margin-top: 10px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const Form = styled.form`
  margin-top: 10px;
  width: 100%;
  max-width: 400px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const Input = styled.input`
  margin-top: 2px;
  width: 100%;
  padding: 5px;
  border-radius: 4px;
  border-width: 0;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  color: ${({ theme }) => theme.palette.text.primary};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const ForgotPasswordLink = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary};
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.palette.primary};
`;

export const SubmitButtonText = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export const RegisterLink = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const ErrorText = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.palette.error};
`;
