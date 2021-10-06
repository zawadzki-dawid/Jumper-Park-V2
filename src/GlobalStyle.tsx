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
        --orange-main: rgb(248, 54, 0);
        --border-width: 2px;
        --nav-mobile-height: 80px;
        --footer-mobile-height: 80px;
        --gradient-main: linear-gradient(to right, var(--yellow-main), var(--orange-main));
    }

    ul {
        list-style-type: none;
    }

    button {
        border: none;
        background: none;

        &:hover {
            cursor: pointer;
        }
    }
`