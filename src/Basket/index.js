import React, { Component } from 'react'
import styled from 'styled-components'
import { ArrowLeft } from 'react-feather'
import { Link } from 'react-router-dom'

const LookPageLink = ({ className, id, IconComponent, color }) => {
  return (
    <Link to="/">
      <div className={className} id={id}>
        Get inspired <nbsp />
        {<IconComponent color={color} size="20" />}
      </div>
    </Link>
  )
}

const Basket = () => {
  return (
    <div>
      <LookPageLink id="lookpage" IconComponent={ArrowLeft} color="#EE8CA3" />
      <h1> Hello World </h1>
    </div>
  )
}














export default Basket
