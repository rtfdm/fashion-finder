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
        {<IconComponent color={color} size="20" style={ArrowMargin}/>}
        <br />Get inspired
      </div>
    </Link>
  )
}

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
    <div>
      <StyledLookPageLink id="lookpage" IconComponent={ArrowLeft} color="#EE8CA3" />
      <h1> Your Lookbook </h1>
      <ul>
        { Object.keys(this.state.MyBasket).map(key => {
          
          return <li key = {key}>
              {this.state.MyBasket[key].name}  
              {this.state.MyBasket[key].price}
            
          </li>
        console.log(this.state.MyBasket[key]) }
        ) }
      </ul>
      
    </div>
  )
  }
}


















export default Basket
