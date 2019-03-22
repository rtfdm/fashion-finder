import React from 'react'
import renderer from 'react-test-renderer'
import LookPage from '../src/LookPage'

require('react-router-dom');
jest.mock('react-router-dom')


test('handleClick changes currentLook', () => {
  const component = renderer.create(<LookPage/>)
  const componentInstance = component.getInstance()
  componentInstance.handleClick()
  expect(componentInstance.state.currentLook).toEqual({
    id: 2,
    image: 'https://i.imgur.com/iKT9fl6.jpg',
    brands: ['Ralph Lauren', 'Armani'],
    description: 'The description',
  })
})

test('renders as expected', () => {
  const component = renderer.create( <LookPage /> )
  const componentInstance = component.getInstance()
  let renderedComponent = componentInstance.render()
  expect(renderedComponent).toMatchSnapshot()
})




