import styled from "styled-components";

// Other styled components

export const PageContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const OrderFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin-top: 2rem;
  padding: 2rem 2rem 0 2rem;
  border-radius: 1em;
  background: ${({ theme }) => theme.palette.background.secondary};
`;

export const OrderTitle = styled.h2`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const OrderLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const OrderInput = styled.input`
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

export const OrderButton = styled.button`
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

export const GetTotalFormWrapper = styled(OrderFormWrapper)``;

export const GetTotalTitle = styled(OrderTitle)``;

export const GetTotalForm = styled(OrderForm)``;

export const GetTotalLabel = styled(OrderLabel)``;

export const GetTotalInput = styled(OrderInput)``;

export const GetTotalButton = styled(OrderButton)``;

export const ClearTableButton = styled(OrderButton)``;

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2em;
`;
export const ItemCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  justify-content: center;
  align-items: center;
  width: 2cm;
  height: 2cm;
  border: 1px solid ${(props) => props.theme.palette.primary};
  border-radius: 10px;
  margin: 0.5em;
  font-size: 1vw;
  color: ${(props) => props.theme.palette.text.primary};
  background-color: ${(props) => props.theme.palette.background.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary};
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.palette.error};
`;

export const SuccessMessage = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.palette.success};
`;
