import styled from "styled-components";

// Styled components
export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ItemElementProps {
  selected: boolean;
}

export const ItemElement = styled.div<ItemElementProps>`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) =>
    props.selected ? props.theme.palette.background.secondary : "transparent"};
`;

export const Button = styled.button`
  margin: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.palette.text.secondary};
  background-color: ${(props) => props.theme.palette.primary};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.secondary};
  }
`;

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormInput = styled.input`
  margin: 5px 0;
  padding: 5px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
