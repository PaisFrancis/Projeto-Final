import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

interface OrderElementProps {
  selected: boolean;
}

export const OrderElement = styled.div<OrderElementProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  border: 2px solid black;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: ${(props) => (props.selected ? "#eee" : "#fff")};
  cursor: pointer;

  & > p {
    margin: 5px 0;
  }
`;

export const Button = styled.button`
  width: 50%;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #007bff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
