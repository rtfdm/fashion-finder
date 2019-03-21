import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { ArrowLeft } from 'react-feather'
import { Link } from 'react-router-dom'
// import basketItems from './sampleBasketItems'
import basketItems from './sampleitems'

// const MyBasket = basketItems

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
  max-width: 1200px;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`

const ArrowMargin = {
  marginLeft: '25px'
}

const StyledLookPageLink = styled(LookPageLink)``

class Basket extends Component {
  state = { MyBasket: {} }  


  componentDidMount() {
    this.setState( { MyBasket: basketItems })
  }


  render() {
  return (
      <Container>
        <StyledLookPageLink
          id="lookpage"
          IconComponent={ArrowLeft}
          color="#EE8CA3"
        />
        <h1>Your Lookbook</h1>
      <ul>
        { Object.keys(this.state.MyBasket).map(key => {
          
          return <li key = {key}>
              {this.state.MyBasket[key].name}  
              {this.state.MyBasket[key].price}
            
          </li>
        console.log(this.state.MyBasket[key]) }
        ) }
      </ul>
      </Container>
  )
  }
}


















export default Basket
