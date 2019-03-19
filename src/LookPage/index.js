import React, { Component } from 'react'
import styled from 'styled-components'
import { X } from 'react-feather'

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

const DismissButton = ({IconComponent, className}) => {
  return <div className={className} id="dismiss-button">{<IconComponent color="#EE8CA3" size="32"/>}</div>
}
const StyledDismissButton = styled(DismissButton)`
  display: inline-grid;
  margin: 0 auto;
  box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);
  border-radius: 100px;
  padding: 10px;
`


const LookPage = () => {
  return (
    <div>
      {console.log(X)}
      <StyledLookImage src="https://i.imgur.com/n1IqG2c.jpg" />
      <StyledDismissButton IconComponent={X} />
    </div>
  )
}

export default LookPage
