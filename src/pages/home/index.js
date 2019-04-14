import React, {Component} from 'react'
import {Hero, Floor, Sky} from '../../components'
import {HeroContainerStyled, FloorContainerStyled, HomeContainer, SkyContainerStyled, HeroWrapperStyled,TitleStyled, BotttomStyled,HeaderStyled, FirstWordStyled, FirstLetterStyled, SecondWordStyled, SubtitleStyled, MenuStyled, MenuItemStyled} from './styles'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

    render(){
        return(
            <Sky>
                <HomeContainer>
                    <HeaderStyled>
                        <div>
                            <TitleStyled><FirstLetterStyled>F</FirstLetterStyled><FirstWordStyled>RONT</FirstWordStyled><br/><SecondWordStyled>AVENTURAS</SecondWordStyled></TitleStyled>
                            <SubtitleStyled>David Esteban Saiz</SubtitleStyled>
                        </div>
                    </HeaderStyled>
                    <MenuStyled>
                        <MenuItemStyled>Inicio</MenuItemStyled>
                        <MenuItemStyled>Perfil</MenuItemStyled>
                    </MenuStyled>
                    <BotttomStyled>
                        <FloorContainerStyled>
                            <Floor>
                                <HeroContainerStyled>
                                    <HeroWrapperStyled>
                                        <Hero />
                                    </HeroWrapperStyled>
                                </HeroContainerStyled>
                            </Floor>
                        </FloorContainerStyled>
                    </BotttomStyled>
                </HomeContainer>
            </Sky>
        )
    }
}

export default Home