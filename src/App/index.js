import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import LookPage from '../LookPage'
import Basket from '../Basket'

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500');
    font-family: 'IBM Plex Sans', sans-serif;
  }
  ul {
    padding: 0px;
  }
`

export default () => (
  <BrowserRouter>
    <div>
      <GlobalStyles />
      <Route exact={true} path="/" render={props => <LookPage />} />
      <Route exact={true} path="/lookbook" render={props => <Basket />} />
    </div>
  </BrowserRouter>
)
