import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'


import LookPage from '../LookPage'
import LookInfo from '../LookInfo'

export default () => (
  <BrowserRouter>
  <div>
    <Route exact={true} path="/" render={props => <LookPage />} />
    <Route exact={true} path="/lookinfo" render={props => <LookInfo />} />
  </div>
  </BrowserRouter>
) 



