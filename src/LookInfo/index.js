import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { ArrowLeft } from 'react-feather'

const LookImage = ({ src, className}) => {
  return <img className={className} id="look-image" src={src} />
}

const Button = styled.button `
  background-color: transparent;
  border-color: transparent;
`

const BackButton = ({ IconComponent }) => {
  return <Button id="button">{ <IconComponent/> }</Button>
}

const StyledLookImage = styled(LookImage)`
  height: 500px;
  width: 500px;
  box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);
`

const Heading = styled.h2 `
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #3B3B3B;

  :not(:first-of-type) {
    margin-top: 30px;
  }
`

const Paragraph = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  line-height: 150%;
  font-weight: normal;
  color: #3B3B3B;
`

const Price = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  color: #aaaaaa;
  margin-top: 30px;
`

const StyledBackButton = styled(BackButton)`
  height: 50px;
  width: 100px;
  background-color: transparent;
`

const LookDetails = () => {
  return ( 
    <div>
      <Heading>Brands</Heading>
      <Paragraph>Ralph Lauren</Paragraph>

      <Heading>Description </Heading>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Paragraph>
      <Price>£299.99</Price>
    </div>
  ) 
}

const StyledLookDetails = styled(LookDetails)`
  color: #3B3B3B;
`

const Container = styled.div`
  width: min-content;
  margin: 0 auto;
  padding-top: 30px;
`

const InnerContainer = styled.div`
  padding-top: 50px;
  display: grid;
  width: min-content;
  grid-template-columns: 500px 500px;
  grid-column-gap: 50px;
`

const LookInfoPage = () => {
  return (
    <Container>
      <StyledBackButton IconComponent={ArrowLeft}/>
      <InnerContainer>
        <StyledLookImage src='https://i.imgur.com/n1IqG2c.jpg' />
        <LookDetails />
      </InnerContainer>
    </Container>
  )
}



export default LookInfoPage