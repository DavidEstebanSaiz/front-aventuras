import React, {Component} from 'react'
import { FloorStyled, ChildrenStyled, FloorFrontStyled, FloorBackStyled, ContainerStyled } from './styles'

class Floor extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

    render(){
        const {children} = this.props
        return(
            <ContainerStyled>
                <FloorBackStyled />
                <FloorStyled/>
                <ChildrenStyled>{children}</ChildrenStyled>
                <FloorFrontStyled />
            </ContainerStyled>
        )
    }
}

export default Floor