import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { XCircle, Info } from 'react-feather'
import { Link } from 'react-router-dom'

const ListImageStyle = {
  borderRadius: '5px',
  maxWidth: '100%',
}

const ListItem = ({
  className,
  src,
  name,
  description,
  price,
  DeleteButton,
  InfoButton,
}) => {
  return (
    <li className={className}>
      <img
        src={src}
        alt={name}
        style={ListImageStyle}
        width="300px"
        height="300px"
      />
      <p className="card-text">{description}</p>
      <p className="card-text">
        <strong>Price:</strong> £{(price / 100).toFixed(2)}
      </p>
      <DeleteButton />
      <InfoButton />
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

  ${StyledListItem}:hover {
    background-color: #f7f4f4;
    cursor: pointer;
  }
`

const DeleteButton = ({ className, id, IconComponent, color, handleClick }) => {
  return (
    <div className={className} id={id} onClick={handleClick}>
      {<IconComponent color={color} size="32" />}
    </div>
  )
}
const InfoButton = ({ className, id, IconComponent, color, handleClick }) => {
  return (
    <Link to={`/lookinfo/${id}`} id="look-info-button">
      <div className={className} id={id} onClick={handleClick}>
        {<IconComponent color={color} size="32" />}
      </div>
    </Link>
  )
}

const StyledDeleteButton = styled(DeleteButton)`
  background: rgba(255, 255, 255);
  display: flex;
  border-radius: 100px;
  max-height: 35px;
  max-width: 35px;
  padding: 0px;
  position: absolute;
  right: 14px;
  top: 14px;
`
const StyledInfoButton = styled(InfoButton)`
  background: rgba(255, 255, 255);
  display: flex;
  border-radius: 100px;
  max-height: 35px;
  max-width: 35px;
  padding: 0px;
  position: absolute;
  right: 16px;
  top: 273px;
`

class Item extends Component {
  handleClick = () => {
    this.props.removeFromBasket(this.props.details.id)
  }

  render() {
    const { id, image, description, price } = this.props.details
    return (
      <Fragment>
        <StyledListItem
          src={image}
          id={id}
          description={description.substring(0, 50) + '...'}
          price={price}
          DeleteButton={props => (
            <StyledDeleteButton
              IconComponent={XCircle}
              color="#EE8CA3"
              id={id}
              handleClick={this.handleClick}
            />
          )}
          InfoButton={props => (
            <StyledInfoButton IconComponent={Info} color="#000" id={id} />
          )}
        />
      </Fragment>
    )
  }
}

export default Item
