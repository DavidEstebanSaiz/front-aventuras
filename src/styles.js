
import { createGlobalStyle } from 'styled-components'
import PixelFont from './public/fonts/04b_30/04B30.TTF'
import bitWonder from './public/fonts/8_bit/8BITWONDER.TTF'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: PixelFont;
        src: url(${PixelFont});
    }
    @font-face {
        font-family: SubtitleFont;
        src: url(${bitWonder});
    }
`
/*
export const GlobalStyle = styled.div`
    @font-face{
        font-family: 'titleFont';
        src: url('public/fonts/04b_30/04b30.woff2') format('woff2'),
            url('public/fonts/04b_30/04b30.woff') format('woff'),
            url('public/fonts/04b_30/04b30.TTF')  format('truetype'),
    }
`;
*/