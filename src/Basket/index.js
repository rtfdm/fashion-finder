import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { ArrowLeft, ShoppingBag } from 'react-feather'
import { Link } from 'react-router-dom'
import basketItems from './sampleItems'
import Item from '../Item/index'

const BackButton = ({ IconComponent, className }) => (
  <Link to="/" id="back-button" className={className}>
    <div>{<IconComponent size="24" color="#838383" />}</div>
    <div>Back</div>
  </Link>
)

const StyledBackButton = styled(BackButton)`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-column-gap: 10px;
  width: min-content;
  align-items: center;
  font-size: 18px;
  color: #838383;
  margin-top: -35px;
  margin: 0 0 50px 0;
  transition: all ease 0.5s;

  text-decoration: none;

  @media only screen and (max-width: 800px) {
    margin: 0;
    padding: 20px 10px;
  }
`

const LookPageLink = ({ className, id, IconComponent, color }) => {
  return (
    <Link to="/">
      <div className={className} id={id}>
        {<IconComponent color={color} size="20" style={ArrowMargin} />}
        <br />
        Get inspired
      </div>
    </Link>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: stretch;
  justify-items: center;
  grid-template-rows: auto;
  grid-gap: 40px;
  max-width: 1000px;
  background-color: #fff;
  padding: 0;
  margin: 0;
  list-style: none;
  margin-bottom: 120px;

  @media only screen and (max-width: 599px) {
    margin: 0 auto;
    grid-gap: 0px;
  }

  @media only screen and (max-width: 1029px) {
    grid-gap: 40px;
    justify-items: space-evenly;
  }
`

const HeaderStyle = styled.div`
  max-width: 1200px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 50px;
  margin: 0;
  list-style: none;
`
const FooterStyling = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 2fr);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  opacity: 0.8;
  padding: 10px;
  color: #ffff
  text-align: center;
  min-width: 80vw;
`

const BuyButton = ({ className, id, IconComponent, color }) => {
  return (
    <div className={className} id={id}>
      {<IconComponent color={color} size="32" />}
    </div>
  )
}

const StyledBuyButton = styled(BuyButton)`
  grid-column: 6;
  background-color: #a6befa;
  box-shadow: 0px 4px 20px rgba(100, 100, 100, 100);
  border-radius: 100px;
  max-height: 62px;
  padding: 10px;
  margin: 0 auto;
`

const ArrowMargin = {
  marginLeft: '25px',
}

class Basket extends Component {
  state = { MyBasket: {} }

  componentDidMount() {
    this.setState({ MyBasket: basketItems })
  }

  render() {
    return (
      <Container>
        <HeaderStyle>
          <StyledBackButton IconComponent={ArrowLeft} />
        </HeaderStyle>
        <HeaderStyle>
          <h1>Your Lookbook</h1>
        </HeaderStyle>
        <ul>
          <ListContainer>
            {Object.keys(this.state.MyBasket).map(key => (
              <Item key={key} details={this.state.MyBasket[key]} />
            ))}
          </ListContainer>
        </ul>
        <FooterStyling>
          <StyledBuyButton
            id="buy-button"
            IconComponent={ShoppingBag}
            color="#ffff"
          />
        </FooterStyling>
      </Container>
    )
  }
}

export default Basket
