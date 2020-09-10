import { keyframes, css } from 'styled-components'

const pulseKeyframes = keyframes`
    0%, 100% {
        opacity: 0.76;
    }
    50% {
        opacity: 0.38;
    }
`

const theme = {
    'light-grey': '#ededed',
    'dark-grey': '#565656',
    'main-font': `'Open Sans', Arial, Helvetica, sans-serif`,
    placeholder: 0.38,
    pulse: css`
        ${pulseKeyframes} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite
    `,
    'shadow-sm': `0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2)`,
    'shadow-md': `0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)`,
    'shadow-lg': `0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)`,
    'ease-100': '100ms cubic-bezier(0.4, 0, 0.2, 1)'
}

export { theme }
