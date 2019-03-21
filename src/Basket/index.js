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
  max-width: 1200px;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
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

const ArrowMargin = {
  marginLeft: '25px',
}

const StyledLookPageLink = styled(LookPageLink)``

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
          <h1 >Your Lookbook</h1>
        </HeaderStyle>
        <ul>
        <ListContainer>
            {Object.keys(this.state.MyBasket).map(key => (
              <Item key={key} details={this.state.MyBasket[key]} />
            ))}
          </ListContainer>
        </ul>
      </Container>
    )
  }
}

export default Basket
