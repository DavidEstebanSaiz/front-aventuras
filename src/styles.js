
import { createGlobalStyle } from 'styled-components'
import { PUBLIC_URL } from './config/vars' 

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: PixelFont;
        src: url(${PUBLIC_URL}/fonts/04b_30/04B30.TTF);
    }
    @font-face {
        font-family: SubtitleFont;
        src: url(${PUBLIC_URL}/fonts/8_bit/8BITWONDER.TTF);
    }
`