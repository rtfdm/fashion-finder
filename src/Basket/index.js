import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { ArrowLeft, ShoppingBag, CreditCard } from 'react-feather'
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
  margin: 10px 0;
  transition: all ease 0.5s;
  text-decoration: none;

  @media only screen and (max-width: 800px) {
    margin: 0;
    padding: 20px 10px;
  }
`

const Container = styled.div`
  max-width: 1000px;
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
  margin-bottom: 50px;

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
  margin: 0;
  list-style: none;
  margin-bottom: 20px;
`
const FooterStyling = styled.div`
  display: flex;
  justify-content: flex-end;
  opacity: 0.8;
  padding: 10px;
  color: #ffff;

  @media only screen and (max-width: 599px) {
    margin-top: 50px;
    justify-content: center;
  }
`

const ShoppingBasket = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const BuyButton = ({ className, id, IconComponent, color }) => {
  return (
    <div className={className} id={id}>
      <Link to="/checkout">{<IconComponent color={color} size="26" />}</Link>
    </div>
  )
}
const ActualBuyButton = ({
  className,
  id,
  IconComponent,
  color,
  totalPrice,
}) => {
  return (
    <div className={className} id={id}>
      <Link to="/checkout">{<IconComponent color={color} size="26" />}</Link>
    </div>
  )
}

const StyledBuyButton = styled(BuyButton)``

const StyledPrice = styled.div`
  color: black;
  display: block;
  font-size: 20px;
  padding-left: 10px;
  padding-top: 2px;
`

const ArrowMargin = {
  marginLeft: '25px',
}

const StyledActualBuyButton = styled.button`
  background-color: black;
  border-radius: 5px;
  padding: 5px;
  color: black;
  display: flex;
  padding: 8px 10px;
  box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);
  cursor: pointer;
  margin-bottom: 100px;
`

const P = styled.p`
  color: white;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
`

class Basket extends Component {
  state = {
    basket: this.props.basket,
  }
  _isBasketEmpty(object) {
    if (Object.keys(object).length === 0) return true
    return false
  }

  renderBasket() {
    if (this._isBasketEmpty(this.props.basket)) {
      return <h2>You don't have any basket items</h2>
    } else {
      return Object.keys(this.props.basket).map(key => (
        <Item
          key={key}
          details={this.props.basket[key]}
          removeFromBasket={this.props.removeFromBasket}
        />
      ))
    }
  }

  totalPrice(basket) {
    let totalPrice = 0
    Object.keys(basket).map(key => {
      totalPrice += basket[key].price
    })
    return (totalPrice / 100).toFixed(2)
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
          <ListContainer>{this.renderBasket()}</ListContainer>
        </ul>
        <FooterStyling>
          <StyledBuyButton
            id="buy-button"
            IconComponent={ShoppingBag}
            color="#000"
            totalPrice={this.totalPrice(this.state.basket)}
          />
          <StyledPrice>
            Total: £{this.totalPrice(this.props.basket)}
          </StyledPrice>
        </FooterStyling>
        <FooterStyling>
          <Link to="/checkout">
            <StyledActualBuyButton>
              <ActualBuyButton
                id="actual-buy-button"
                IconComponent={CreditCard}
                color="#fff"
              />
              <P>Buy</P>
            </StyledActualBuyButton>
          </Link>
        </FooterStyling>
      </Container>
    )
  }
}

export default Basket
