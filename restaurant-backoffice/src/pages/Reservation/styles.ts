import styled from "styled-components";

// Styled components
export const ReservationContainer = styled.div`
  background: ${({ theme }) => theme.palette.background.primary};
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
  max-width: 800px;
`;

interface ReservationElementProps {
  selected: boolean;
}

export const ReservationElement = styled.div<ReservationElementProps>`
  border: 1px solid #ccc;
  background-color: ${(props) =>
    props.selected ? props.theme.palette.background.secondary : "transparent"};
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Form = styled.form`
  border: 1px solid #ccc;
  background: ${({ theme }) => theme.palette.background.secondary};
  padding: 20px;
  border-radius: 5px;
`;

export const FormInput = styled.input`
  display: block;
  width: 97.5%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.palette.background.primary};
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.text.secondary};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
