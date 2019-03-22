import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { XCircle } from 'react-feather'


const ListImageStyle = {
  borderRadius: '5px',
  maxWidth: '100%',
}

const ListItem = ({ className, src, name, desc, price, size, status, DeleteButton }) => {
  return (
    <li className={className}>
      <img src={src} alt={name} style={ListImageStyle} />
      <h3>{name}</h3>
      <p>{desc}</p>
      <p>Price: {price}</p>
      <p>Size: {size}</p>
      <p>Status: {status} </p>
      <DeleteButton/>
    </li>
  )
}

const StyledListItem = styled(ListItem)`
  list-style-type: none;
  width: 300px;
  padding: 10px;
  box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);
  border-radius: 5px;
  position: relative;
`

const DeleteButton = ({ className, id, IconComponent, color }) => {
  return (
    <div className={className} id={id}>
      {<IconComponent color={color} size="32" />}
    </div>
  )
}

const StyledDeleteButton = styled(DeleteButton)`
  background: rgba(255,255,255);
  display: flex;
  border-radius: 100px;
  max-height: 35px;
  max-width: 35px;
  padding: 0px;
  position: absolute;
  right: 5px;
  top: 8px;
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
          DeleteButton={(props) => <StyledDeleteButton IconComponent={XCircle} color="#EE8CA3" id={name}/>}
        />
      </Fragment>
    )
  }
}

export default Item
