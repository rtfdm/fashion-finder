import React, { Component } from 'react'
import styled from 'styled-components'

const LookImage = ({ src, className }) => {
  return <img className={className} id="displayed-look" src={src} />
}

const StyledLookImage = styled(LookImage)`
  display: block;
  margin: 0 auto;
  margin-top: 100px;
  width: 400px;
  height: 400px;
  border-radius: 5px;
  box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);
`

const LookPage = () => {
  return <StyledLookImage src="https://i.imgur.com/n1IqG2c.jpg" />
}

export default LookPage
