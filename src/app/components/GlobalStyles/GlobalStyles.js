import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body, h1, h2, h3, h4, h5, h6, p, input {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        line-height: 1;
        font-family: ${props => props.theme['main-font']};
    }

    body {
        background-color: ${props => props.theme['light-grey']};
        /* Stops scroll bar hiding when only one result in search. */
        overflow-y: scroll;
    }
`

export { GlobalStyles }
