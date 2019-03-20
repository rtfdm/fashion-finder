import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { ArrowLeft } from 'react-feather'
import { Link } from 'react-router-dom'
import basketItems from './sampleBasketItems'

const MyBasket = basketItems

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

const Basket = () => {
  return (
    <div>
      <StyledLookPageLink id="lookpage" IconComponent={ArrowLeft} color="#EE8CA3" />
      <h1> Hello World </h1>
      <ul>
      {Object.entries(MyBasket).map( (item, index) => {
        return (
          <Fragment key={index}>
            <li>{item[1].name} £ {item[1].price}</li>
          </Fragment>
        )
      })}
      </ul>
    </div>
  )
}


















export default Basket
