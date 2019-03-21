import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { ArrowLeft } from 'react-feather'
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
  margin-bottom: 80px;

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
  height: 50px;
  background-color: #000000;
  opacity: 0.8;
  padding: 10px;
  color: #ffff
  text-align: center;
  min-width: 80vw;
`

const ButtonStyle = {
  borderRadius: '25px',
}

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
            <button style={ButtonStyle}>Get the looks</button>
          </footer>
        </FooterStyling>
      </Container>
    )
  }
}

export default Basket
