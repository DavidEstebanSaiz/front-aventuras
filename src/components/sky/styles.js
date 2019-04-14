import styled, { keyframes } from 'styled-components';
import { colors } from '../../config/vars' 

const trees = keyframes`
    100% { background-position: -${768 * 4}px bottom}
`;

export const SkyStyled = styled.div`
  position: absolute;
  min-height: 100vh;
  background-image: url(assets/clouds.png);
  background-repeat: no-repeat;
  width: 100%;
  background-sice: cover;
  background-position: center 81%;
  background-color: ${props=>props.skyColor?props.skyColor:colors.sky}
  z-index: 0;
`;

export const TreeStyled = styled.div`
  height: 100%;
  background-image: url(assets/trees.png);
  background-repeat: repeat-x;
  width: 100%;
  background-position: left bottom;
  position: absolute;
  bottom: 0px;
  top: 0px;
  animation: ${trees} 40s linear infinite;
`;

export const ContentStyled = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  min-height: 100vh;
`;

export const SeaStyled = styled.div`
  position: absolute;
  bottom: 0px;
  height: 128px;
  background-color: ${colors.seaBlue}
  width: 100%;
  border-top: solid 14px ${colors.seaBlueLight}
`;