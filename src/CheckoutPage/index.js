import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import Item from '../Item/index'

const CheckoutButton = () => {
  return <div />
}

export default class Checkout extends Component {
  state = {}

  clearState = () => {
    this.props.resetState()
    return <Redirect to="/" />
  }

  render() {
    return (
      <div>
        <h2>Thank you for your order!</h2>
        <CheckoutButton />
        <a href="/">
          <button onClick={this.clearState}>Reset State</button>
        </a>
      </div>
    )
  }
}
