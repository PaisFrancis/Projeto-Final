import styled from "styled-components";

//Styled components
export const TableContainer = styled.div`
  background: ${(props) => props.theme.palette.background.primary};
  color: ${(props) => props.theme.palette.text.primary};
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
  max-width: 800px;
`;

interface TableElementProps {
  selected: boolean;
}

export const TableElement = styled.div<TableElementProps>`
  border: 1px solid #ccc;
  background-color: ${(props) =>
    props.selected ? props.theme.palette.background.secondary : "transparent"};
  color: ${(props) => props.theme.palette.text.primary};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Form = styled.form`
  background: ${(props) => props.theme.palette.background.secondary};
  padding: 20px;
  border-radius: 5px;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.palette.text.secondary};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.palette.secondary};
    color: ${(props) => props.theme.palette.text.primary};
  }
`;

export const FormInput = styled.input`
  display: block;
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
`;
