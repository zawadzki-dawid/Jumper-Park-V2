import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    html {
        font-family: 'Roboto', sans-serif;
        font-size: 62.5%;
        --white: rgb( 255, 255, 255);
        --black: rgb(0, 0, 0);
        --yellow-main: rgb(249, 212, 35);
        --orange-main: rgb(248, 54, 0);
        --shadow-color: rgba(0, 0, 41, 0.15);
        --border-width: 2px;
        --nav-mobile-height: 80px;
        --footer-mobile-height: 80px;
        --gradient-main: linear-gradient(to right, var(--yellow-main), var(--orange-main));
        --link-font-size: 1.6rem;
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