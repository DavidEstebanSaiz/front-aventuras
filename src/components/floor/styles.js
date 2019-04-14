import styled, { keyframes } from 'styled-components';


const run = keyframes`
    100% { background-position-X: -178px; }
`;

const front = keyframes`
    100% { background-position-X: -1078px; }
`;

export const ContainerStyled = styled.div`
  width: 100%;
  height: 244px;
`;

export const FloorStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(assets/floor.png) left center
  background-repeat: repeat no-repeat;
  animation: ${run} 1s linear infinite;
  background-position: left bottom;
  bottom: 0px;
  z-index: 1;
`;

export const FloorBackStyled = styled.div`
  width: 100%;
  height: 100%;
  background: url(assets/bushBackBig.png);
  background-position: left center;
  background-repeat: repeat no-repeat;
  animation: ${front} 10s linear infinite;
  background-position-y: left top;
  bottom: 31px;
  position: absolute;
  z-index: 1;
`;

export const FloorFrontStyled = styled.div`
  width: 100%;
  height: 100%;
  background: url(assets/bushBig.png);
  background-position: left center;
  background-repeat: repeat no-repeat;
  animation: ${front} 6s linear infinite;
  background-position-y: calc(100% + -83px);
  bottom: 0px;
  position: absolute;
  z-index: 3;
`;


export const ChildrenStyled = styled.div`
  position: absolute;
  bottom: 87px;
  width: 100%;
`;