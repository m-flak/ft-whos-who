import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import configureStore from './configureStore'
import App from './components/App'

import background from './resrc/bg_fractal.jpg'
import proximaNovaW1 from './resrc/font_proxima.woff'
import proximaNovaW2 from './resrc/font_proxima.woff2'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Proxima Nova';
        font-style: normal;
        font-weight: normal;
        src: url(${proximaNovaW2}) format('woff2'),
             url(${proximaNovaW1}) format('woff');
    }

    html, body {
        height: 100%;
    }

    body {
        background: url(${background}) center / cover;
        color: lightgray;
        font-family: 'Proxima Nova', sans-serif;
    }

    #app {
        min-height: 100%;
        height: auto;
        background: linear-gradient(180deg, rgba(205,185,213,0.5) 0%, rgba(162,139,166,0.8) 51%, rgba(43,35,50,0.8) 100%);
        margin: 5vh;
    }
`

const store = configureStore()

const MOUNT_NODE = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <GlobalStyle />
      <App/>
    </Router>
  </Provider>,
  MOUNT_NODE
)
