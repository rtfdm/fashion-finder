import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

import LookPage from '../LookPage'
import LookInfo from '../LookInfo'

const GlobalStyles = createGlobalStyle`
  * {
    text-rendering: auto;
    box-sizing: border-box;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  #app {
    @media only screen and (min-width: 400px) {
      min-height: 100vh;
      display: grid;
      grid-template-columns: min-content;
      justify-content: center;
      align-items: center;
    }
  }
`

export default () => (
  <BrowserRouter>
    <div>
      <GlobalStyles />
      <Route exact={true} path="/" render={props => <LookPage />} />
      <Route exact={true} path="/lookinfo" render={props => <LookInfo />} />
    </div>
  </BrowserRouter>
)
