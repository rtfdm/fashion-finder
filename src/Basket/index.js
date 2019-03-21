import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { ArrowLeft, ShoppingBag } from 'react-feather'
import { Link } from 'react-router-dom'
import basketItems from './sampleItems'
import Item from '../Item/index'

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
  margin: auto;
`

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  max-width: 1200px;
  background-color: #fff;
  padding: 0;
  margin: 0;
  list-style: none;
  margin-bottom: 120px;

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
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #000000;
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
  box-shadow: 0px 4px 20px rgba(100, 100, 100, 100);
  border-radius: 100px;
  max-height: 62px;
  padding: 10px;
  max-width: 60px;
  margin: 0 auto;
`



const ArrowMargin = {
  marginLeft: '25px',
}

const StyledLookPageLink = styled(LookPageLink)`
 
`

class Basket extends Component {
  state = { MyBasket: {} }

  componentDidMount() {
    this.setState({ MyBasket: basketItems })
  }

  render() {
    return (
      <Container>
        <HeaderStyle>
          <StyledLookPageLink
            id="lookpage"
            IconComponent={ArrowLeft}
            color="#EE8CA3"
          />
        </HeaderStyle>
        <HeaderStyle>
          <h1 >Your Lookbook</h1>
        </HeaderStyle>
        <ul>
          <ListContainer>
            {Object.keys(this.state.MyBasket).map(key => (
              <Item key={key} details={this.state.MyBasket[key]} />
            ))}
          </ListContainer>
        </ul>   
        <FooterStyling>
          <footer>
            <StyledBuyButton
              id="buy-button"
              IconComponent={ShoppingBag}
              color="#ffff"
            />
          </footer>
        </FooterStyling>
      </Container>
    )
  }
}

export default Basket
