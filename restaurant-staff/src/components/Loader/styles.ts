import styled from "styled-components";

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background};
`;

export const LoaderSvg = styled.svg`
  width: 50px;
  height: 50px;
  fill: ${({ theme }) => theme.palette.background};
`;
