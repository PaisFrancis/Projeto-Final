import styled from "styled-components";

import { backofficeTheme } from "../../theme";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${backofficeTheme.palette.background.primary};
`;

export const NotFoundHeading = styled.h1`
  font-size: 2rem;
  color: ${backofficeTheme.palette.text.primary};
  text-align: center;
`;
