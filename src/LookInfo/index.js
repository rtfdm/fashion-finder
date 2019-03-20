import React, { Component } from 'react'
import styled from 'styled-components'

const LookImage = ({ src, className}) => {
  return <img className={className} id="look-image" src={src} />
}

const StyledLookImage = styled(LookImage)`
  height: 500px;
  width: 500px;
  box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);
`



const LookInfo = () => {
  return (
    <div>
      < StyledLookImage src='https://i.imgur.com/n1IqG2c.jpg' />

    </div>
  )
}



export default LookInfo