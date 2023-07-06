import styled from "styled-components";

export const ReservationContainer = styled.div`
  font-family: "Caprasimo", cursive;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

export const ReservationElement = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.palette.tertiary : theme.secondary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.palette.tertiary};
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Button = styled.button`
  font-family: "Caprasimo", cursive;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.palette.background.secondary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-top: 2rem;
`;

export const FormInput = styled.input`
  font-family: "Caprasimo", cursive;
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.secondary};
  border: 1px solid ${({ theme }) => theme.palette.primary};
  border-radius: 8px;
`;

export const TableCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  justify-content: center;
  align-items: center;
  width: 2cm;
  height: 2cm;
  border: 1px solid ${(props) => props.theme.palette.primary};
  border-radius: 2px;
  margin: 0.5em;
  font-size: 1vw;
  color: ${(props) => props.theme.palette.primary};
  background-color: ${(props) => props.theme.palette.background.secondary};
`;

export const TableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2em;
`;
