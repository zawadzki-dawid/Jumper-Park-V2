import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    html {
        --white: rgb( 255, 255, 255);
        --black: rgb(0, 0, 0);
        --yellow-main: rgb(249, 212, 35);
        --border-width: 2px;
    }
`