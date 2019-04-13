import styled, { keyframes } from 'styled-components';


const run = keyframes`
    100% { background-position: -1780px; }
`;

export const FloorStyled = styled.div`
  width: 100%;
  height: 110px;
  background: url(assets/floor.png) left center
  background-repeat: repeat-x;
  animation: ${run} 10s linear infinite;
`;