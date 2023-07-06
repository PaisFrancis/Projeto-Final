import styled from "styled-components";

export const ItemContainer = styled.div`
  font-family: "Caprasimo", cursive;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

export const ItemElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  border: 1px solid ${({ theme }) => theme.palette.primary};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  h2 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.palette.primary};
  }

  p {
    margin: 0.5rem;
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
