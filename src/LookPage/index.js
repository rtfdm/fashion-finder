import React, { Component } from 'react'
import styled from 'styled-components'
import { X, Check } from 'react-feather'
import { Link } from 'react-router-dom'

const LookImage = ({ src, lookId, className }) => {
  return (
    <Link to="/lookinfo" id="look-details-button">
      <img
        className={className}
        id="displayed-look"
        src={src}
        data-look-id={lookId}
      />
    </Link>
  )
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

const LikeDismissButton = ({
  className,
  id,
  IconComponent,
  color,
  onClick,
}) => {
  return (
    <div className={className} id={id} onClick={onClick}>
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

class LookPage extends Component {
  state = {
    looks: [
      {
        id: 2,
        image: 'https://i.imgur.com/iKT9fl6.jpg',
        brands: ['Ralph Lauren', 'Armani'],
        description: 'The description',
      },
      {
        id: 3,
        image: 'https://i.imgur.com/LPPxE3J.png',
        brands: ['Ralph Lauren', 'Armani'],
        description: 'The description',
      },
    ],
    currentLook: {
      id: 1,
      image: 'https://i.imgur.com/n1IqG2c.jpg',
      brands: ['Ralph Lauren', 'Armani'],
      description: 'The description',
    },
  }

  handleClick = () => {
    this.setState({ currentLook: this.state.looks[0] })
    const looks = this.state.looks
    looks.splice(0, 1)
    this.setState({ looks })
    console.log(this.state.looks)
  }

  render() {
    return (
      <div>
        <StyledLookImage
          src={this.state.currentLook.image}
          lookId={this.state.currentLook.id}
        />
        <ButtonContainer>
          <StyledLikeDismissButton
            id="dismiss-button"
            IconComponent={X}
            color="#EE8CA3"
            onClick={this.handleClick}
          />
          <StyledLikeDismissButton
            id="like-button"
            IconComponent={Check}
            color="#A6BEFA"
            onClick={this.handleClick}
          />
        </ButtonContainer>
      </div>
    )
  }
}

const StyledLookPage = styled(LookPage)`
  /* display: grid;
  justify-content: center;
  grid-template-rows: min-content; */
  /* justify-content: center; */
`

export default LookPage
