import styled, { keyframes } from 'styled-components';
import {Hero, Floor, Sky} from '../../components'
import pointer from '../../public/assets/pointer.png'


const run = keyframes`
    100% { background-position: -1780px; }
`;

export const HomeContainer = styled.div`
  display: grid
  grid-template-rows: 1fr auto auto;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction:column;
`;

export const HeroContainerStyled = styled.div`
    position: relative;
    bottom: -27px;
`;

export const FloorContainerStyled = styled.div`
  
`;

export const SkyContainerStyled = styled.div`

`;

export const HeroWrapperStyled = styled.div`
    dispaly: inline-block;
    position: relative;
    left: 40%;
    transform: translateX(-50%;)
`;
//text-shadow: 5px 4px 0px orange, 7px 6px 0px #926812, 9px 8px 0px white;
//10px 0px 0 #333, -4px 0px 0 #333, 0px -4px 0 #333, 0px 10px 0 #333, -4px -4px 0 #333, 10px -4px 0 #333, -4px 10px 0 #333, 10px 10px 0 #333
const getShadow = (x, color) =>{
    const more = x + 10
    const less = x + 3
    const lateral = x + 3
    return `${more}px 0px 0 ${color},
    -${less}px 0px 0 ${color},
    0px -${less}px 0 ${color},
    0px ${more}px 0 ${color},
    -${less}px -${less}px 0 ${color},
    ${more}px -${less}px 0 ${color},
    -${less}px ${more}px 0 ${color},
    ${more}px ${more}px 0 ${color}`
}
export const TitleStyled = styled.h1`
    font-family: 'PixelFont';
    font-size: 74px;
    color: #f2e343;
    margin: 0px;
    text-shadow:
    5px 4px 0px orange,
    7px 6px 0px #926812, 
    ${getShadow(0, '#333')},
    ${getShadow(7, 'white')};
    & > span {
        background-color: white;
    }
    line-height: 103px;
    margin-bottom: 20px;
`
export const FirstLetterStyled = styled.span`
    position: relative;
    font-size: 162px;
    line-height: 25px;
    vertical-align: bottom;
    color: #f24343;
    top: 0px;
    left: -4px;
`

export const SecondWordStyled = styled.span`
    position: relative;
    top: 0px;
    left: 92px;
`

export const FirstWordStyled = styled.span`
    position: relative;
    top: 19px;
    left: 0px;
`

export const HeaderStyled = styled.div`
   padding: 40px 20px;
   display: flex;
   flex-grow: 1;
   flex-direction: column;
   align-items: center;
    justify-content: center;
`

export const BotttomStyled = styled.div`
    position : relative;
`

export const SubtitleStyled = styled.p`
    font-family: 'SubtitleFont';
    color: #333;

`

export const MenuStyled = styled.ul`
    display: flex;
    flex-direction: column;
    list-Style: none;
    text-align: center;
    padding: 20px;
    margin-top: 40px;
    font-family: 'SubtitleFont';
    color: white;
    text-shadow: 1px 1px 0px grey;
    flex-grow: 1;
`

export const MenuItemStyled = styled.li`
    display: inline-block;
    position: relative;
    padding: 20px 10px;
    text-shadow: 2px 2px 0px gray;
    cursor: pointer;
    &:hover{
        transform: translate(0px, -2px);
        text-shadow: 3px 3px 0px gray;
        &:before{
            position: absolute;
            top: 50%;
            transform: traslateY(-50%);
            content: url(${pointer});
            transform: translate(-54px, -8px);
        }
    }
`