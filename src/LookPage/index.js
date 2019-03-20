import React, { Component } from 'react'
import styled from 'styled-components'
import { X, Check, Gift } from 'react-feather'
import { Link } from 'react-router-dom'

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

const LikeDismissButton = ({ className, id, IconComponent, color }) => {
  return (
    <div className={className} id={id}>
      {<IconComponent color={color} size="32" />}
    </div>
  )
}

const LookBookLink = ({ className, id, IconComponent, color }) => {
  return (
    <Link to="/lookbook">
      <div className={className} id={id}>
        Your lookbook <nbsp />
        {<IconComponent color={color} size="20" />}
      </div>
    </Link>
  )
}

const StyledLikeDismissButton = styled(LikeDismissButton)`
  display: inline-grid;
  margin: 0 auto;
  box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);
  border-radius: 100px;
  padding: 15px;

  :first-of-type {
    margin-right: 20px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  width: min-content;
  margin: 0 auto;
  margin-top: 40px;
`

const LookPage = () => {
  return (
    <div>
      <LookBookLink id="lookbook" IconComponent={Gift} color="#EE8CA3" />
      <StyledLookImage src="https://i.imgur.com/n1IqG2c.jpg" />
      <ButtonContainer>
        <StyledLikeDismissButton
          id="dismiss-button"
          IconComponent={X}
          color="#EE8CA3"
        />
        <StyledLikeDismissButton
          id="like-button"
          IconComponent={Check}
          color="#A6BEFA"
        />
      </ButtonContainer>
    </div>
  )
}

export default LookPage
