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
        --grey: rgb(112, 112, 112);
        --yellow-main: rgb(249, 212, 35);
        --orange-main: rgb(248, 54, 0);
        --orange-light: rgb(249, 162, 24);
        --yellow-darker: rgb(249, 196, 31);
        --grey-light: rgb(245, 246, 247);
        --grey: rgb(227, 227, 227);
        --image-loader-gradient: linear-gradient(270deg, rgb(245, 245, 245), rgb(220, 220, 220));
        --shadow-color: rgba(0, 0, 41, 0.2);
        --border-width: 2px;
        --border-radius: 2px;
        --nav-mobile-height: 85px;
        --footer-mobile-height: 80px;
        --gradient-main: linear-gradient(to right, var(--yellow-main), var(--orange-main));
        --link-font-size: 1.8rem;
        --link-font-weight: medium;
        --heading-font-size: 1.8rem;
        --heading-font-weight: medium;
        --default-font-size: 1.6rem;
        --small-font-size: 1.4rem;
        --label-font-size: 1.8rem;
        --section-default-gap: 50px;

        @media only screen and (min-width: 1000px) {
            --section-default-gap: 80px;
        }
    }

    ul {
        list-style-type: none;
        margin-block-end: 0px;
        margin-block-start: 0px;
    }

    button {
        border: none;
        background: none;

        &:hover {
            cursor: pointer;
        }
    }

    input {
        border: none;
        outline: none;
        background: none;
    }

    textarea {
        resize: none;
        border: none;
        outline: none;
    }

    select {
        border: none;
        outline: none;
        appearance: none;
        background: none;
    }
`