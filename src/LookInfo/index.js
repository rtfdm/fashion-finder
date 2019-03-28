import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import firebase, { db } from '../firebase'

import { ArrowLeft } from 'react-feather'

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

const LookImage = ({ src, className }) => {
  return <img className={className} id="look-image" src={src} />
}

const StyledLookImage = styled(LookImage)`
  width: 100%;
  box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);
`

const Heading = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #3b3b3b;

  :not(:first-of-type) {
    margin-top: 30px;
  }
`

const Paragraph = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  line-height: 150%;
  font-weight: normal;
  color: #3b3b3b;
`

const Price = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  color: #aaaaaa;
  margin-top: 30px;
`

const LookDetails = ({ className, brands, description, price }) => (
  <div className={className}>
    <Heading>Brands</Heading>
    <Paragraph>{brands.join(', ')}</Paragraph>

    <Heading>Description </Heading>
    <Paragraph>{description}</Paragraph>
    <Price>£{(price / 100).toFixed(2)}</Price>
  </div>
)

const StyledLookDetails = styled(LookDetails)`
  color: #3b3b3b;
  margin: 20px;
`

const Container = styled.div``

const InnerContainer = styled.div`
  display: grid;
  width: min-content;
  grid-template-columns: 500px 500px;
  transition: all ease 0.5s;

  @media only screen and (max-width: 1440px) {
    grid-template-columns: 400px 400px;
  }
  @media only screen and (max-width: 1440px) {
    grid-template-columns: 300px 300px;
  }
  grid-column-gap: 50px;

  @media only screen and (max-width: 800px) {
    display: block;
    width: 100vw;
  }
`

class LookInfoPage extends Component {
  state = {
    look: null,
  }

  componentDidMount() {
    const { id } = this.props.match.params
    const looksTable = db.collection('looks')
    looksTable
      .doc(id)
      .get()
      .then(doc => {
        const { brands, description, price, image } = doc.data()
        this.setState({
          look: {
            id,
            brands,
            description,
            price,
            image,
          },
        })
      })
  }

  render() {
    return (
      <Container>
        <StyledBackButton IconComponent={ArrowLeft} />
        {this.state.look && (
          <InnerContainer>
            <StyledLookImage src={this.state.look.image} />
            <StyledLookDetails
              brands={this.state.look.brands}
              description={this.state.look.description}
              price={this.state.look.price}
            />
          </InnerContainer>
        )}
      </Container>
    )
  }
}

export default LookInfoPage
