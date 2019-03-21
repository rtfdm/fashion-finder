import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const ListItem = ({ className, src, name, desc, price, size, status }) => {
  return (
    <li className={className}>
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <p>{desc}</p>
      <p>Price: {price}</p>
      <p>Size: {size}</p>
      <p>Status: {status} </p>
    </li>
  )
}

const StyledListItem = styled(ListItem)`
  list-style-type: none;
  width: 300px;
  padding: 10px;
  margin-top: 50px;
  box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);
`

class Item extends Component {
  render() {
    const { name, image, desc, price, size, status } = this.props.details
    return (
      <Fragment>
        <StyledListItem
          src={image}
          name={name}
          desc={desc}
          price={price}
          size={size}
          status={status}
        />
      </Fragment>
    )
  }
}

export default Item
