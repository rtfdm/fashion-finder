import React, { Component } from 'react'
import styled from 'styled-components'
import { X, Check } from 'react-feather'

const LookImage = ({ src, className }) => {
  return <img className={className} id="displayed-look" src={src} />
}

const StyledLookImage = styled(LookImage)`
  max-width: 400px;
  display: block;
  margin: 0 auto;

  border-radius: 5px;
  box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);

  @media only screen and (max-width: 400px) {
    max-width: 100%;
    border-radius: 0;
  }
`

const LikeDismissButton = ({ className, id, IconComponent, color }) => {
  return (
    <div className={className} id={id}>
      {<IconComponent color={color} size="32" />}
    </div>
  )
}

const StyledLikeDismissButton = styled(LikeDismissButton)`
  box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);
  border-radius: 100px;
  max-height: 62px;
  padding: 15px;

  :first-of-type {
    margin-right: 20px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 40px;
`

const LookPage = () => {
  return (
    <div>
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

const StyledLookPage = styled(LookPage)`
  /* display: grid;
  justify-content: center;
  grid-template-rows: min-content; */
  /* justify-content: center; */
`

export default LookPage
