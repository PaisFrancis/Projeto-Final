import styled from "styled-components";
import { backofficeTheme } from "../../theme";

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // This will make it take the full height of the viewport
  width: 100%; // This will make it take the full width of the viewport
  background-color: ${backofficeTheme.palette
    .background}; // Using your theme's background color
`;

export const LoaderSvg = styled.svg`
  width: 50px; // Adjust this to change the size of the loader
  height: 50px; // Adjust this to change the size of the loader
  fill: ${backofficeTheme.palette
    .primary}; // Using your theme's primary color for the loader's color
`;
