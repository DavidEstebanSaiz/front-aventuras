import React, {Component} from 'react'
import { SkyStyled, TreeStyled, ContentStyled } from './styles'
import {colors} from '../../config/vars'

class Sky extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

    render(){
        const config ={
            skyColor: colors.sky
        }
        const { children, className } = this.props
        return(
            <SkyStyled className={className} {...config} >
                <ContentStyled>
                    {children}
                </ContentStyled>
            </SkyStyled>
        )
    }
}

export default Sky