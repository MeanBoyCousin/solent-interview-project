import 'isomorphic-fetch'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from 'App/App'

const client = (
    <Router>
        <App />
    </Router>
)

const appElement = document.getElementById('app')

render(client, appElement)
