import styled, { keyframes } from 'styled-components';
import {colors} from '../../config/vars'


const run = keyframes`
    100% { background-position: -960px; }
`;

export const HeroStyled = styled.div`
    width: 96px;
    height: 96px;
    position: relative;
`;

export const ShadowStyled = styled.div`
   position: absolute;
   bottom: 0px;
   width: 100%;
   border-radius: 100%;
   height: 7px;
   width: 50px;
   z-index: 0;
   left: 25px;
   background-color: ${colors.shadow}
`;

export const SpriteStyled = styled.div`
    position: absolute;
    top: 0px;
    left: 0px
    height: 100%;
    width: 100%;
    background: url(assets/theHero.png) left center
    animation: ${run} 1.1s steps(10) infinite;
    z-index: 1;
`;
