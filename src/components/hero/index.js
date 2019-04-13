import React, {Component} from 'react'
import { HeroStyled, ShadowStyled, SpriteStyled } from './styles'


const MODE_RUN = 'run'

class Hero extends Component {
    constructor(props){
        super(props)
        this.state = {
            mode: MODE_RUN
        }
    }

    render(){
        return(
            <HeroStyled>
                <SpriteStyled/>
                <ShadowStyled/>
            </HeroStyled>
        )
    }
}

export default Hero