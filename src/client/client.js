import 'isomorphic-fetch'

import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { theme } from './theme'
import App from 'App/App'
import { GlobalStyles } from 'App/components/GlobalStyles/GlobalStyles'

const client = (
    <Router>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Router>
)

const appElement = document.getElementById('app')

render(client, appElement)
