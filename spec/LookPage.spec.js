import React from 'react'
import renderer from 'react-test-renderer'
import App from '../src/App'
import LookPage from '../src/LookPage'
import { separateMessageFromStack } from 'jest-message-util';

require('react-router-dom');
jest.mock('react-router-dom')


test('handleClick changes currentLook', () => {
  const mockProps = {
    id: 1,
    image: 'https://i.imgur.com/n1IqG2c.jpg',
    brands: ['Ralph Lauren', 'Armani'],
    description: 'The description',
    price: '£299.99'
  }

  const component = renderer.create(<LookPage currentLook={mockProps}/>);
  let tree = component.toJSON();
  console.log(component.getInstance().props.currentLook)


//   const app = new App()
//   const handleClick = app.handleClick
  
//   const component = renderer.create(<LookPage currentLook=
//   {mockProps} handleClick={handleClick}/>)

//   console.log(component.props)
//   const componentInstance = component.getInstance()
//   componentInstance.props.handleClick()
//   expect(componentInstance.state.currentLook).toEqual({
//     id: 2,
//     image: 'https://i.imgur.com/iKT9fl6.jpg',
//     brands: ['Ralph Lauren', 'Armani'],
//     description: 'The description',
//   })
})

test('renders as expected', () => {
  const mockProps = {
      id: 1,
      image: 'https://i.imgur.com/n1IqG2c.jpg',
      brands: ['Ralph Lauren', 'Armani'],
      description: 'The description',
      price: '£299.99'
    }


  // const component = renderer.create( <LookPage /> )
  // const componentInstance = component.getInstance()
  // let renderedComponent = componentInstance.render()
  // expect(renderedComponent).toMatchSnapshot()
  const component = renderer.create(<LookPage currentLook={mockProps}/>);
  let tree = component.toJSON();
  console.log(component.getInstance().props.currentLook)
})




