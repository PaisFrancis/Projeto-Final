import styled from "styled-components";

export const NotFoundContainer = styled.div`
  font-family: "Caprasimo", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.palette.background.primary};
`;

export const NotFoundHeading = styled.h1`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 2rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;
