import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import Item from '../Item/index'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledBoxContainer = styled.div`
  width: 300px;
  margin: 5px;
  text-align: center;
  background-color: #eee;
  border-radius: 5px;
  padding: 20px;
`

const StyledButton = styled.button`
  background-color: white;
  border: 2px solid black;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);
  margin-top: 2rem;
  border-radius: 3px;
  cursor: pointer;
`

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
      <StyledContainer>
        <StyledBoxContainer>
          <div>
            <h2>Thank you for your order!</h2>
            <CheckoutButton />
            <a href="/">
              <StyledButton onClick={this.clearState}>
                Restart demo
              </StyledButton>
              {/* <button onClick={this.clearState}>Reset State</button> */}
            </a>
          </div>
        </StyledBoxContainer>
      </StyledContainer>
    )
  }
}
