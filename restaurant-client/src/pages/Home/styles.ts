import styled from "styled-components";

export const HomeContainer = styled.div`
  font-family: "Caprasimo", cursive;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  min-height: calc(100vh - 4rem);
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.palette.primary};
  margin-left: 2rem;
  margin-top: 2rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  margin: 2rem;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 4rem);
  flex-grow: 1;
`;

export const Section = styled.section`
  width: 45%;
  color: ${({ theme }) => theme.palette.text.tertiary};

  h3 {
    color: ${({ theme }) => theme.palette.primary};
    margin-bottom: 1rem;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
  max-width: 90%;
  max-height: 650px;
  border-radius: 5px;
  margin: 1rem;
`;

export const Footer = styled.footer`
  width: 100%;
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.primary};
  text-align: center;
`;
