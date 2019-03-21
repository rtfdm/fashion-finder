import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import LookPage from '../LookPage'
import Basket from '../Basket'

export default () => (
  <BrowserRouter>
    <div>
      <Route exact={true} path="/" render={props => <LookPage />} />
      <Route exact={true} path="/lookbook" render={props => <Basket />} />
    </div>
  </BrowserRouter>
)
