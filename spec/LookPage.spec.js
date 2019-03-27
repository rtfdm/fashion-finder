import React from 'react'
import renderer from 'react-test-renderer'
import LookPage from '../src/LookPage'

require('react-router-dom')
jest.mock('react-router-dom')

let currentLook
let handleClick

afterAll(async () => {
  await firebase.app().delete()
})

beforeEach(() => {
  ;(currentLook = {
    id: 1,
    image: 'https://i.imgur.com/n1IqG2c.jpg',
    brands: ['Ralph Lauren', 'Armani'],
    description: 'The description',
    price: '£299.99',
  }),
    (handleClick = jest.fn())
})

test('LookPage takes currentLook and handleClick()', () => {
  const component = renderer.create(
    <LookPage currentLook={currentLook} handleClick={handleClick} />
  )

  const componentInstance = component.getInstance()

  expect(componentInstance.props.currentLook).toEqual(currentLook)
  expect(componentInstance.props.handleClick).toEqual(handleClick)
})

test('render()', () => {
  const renderedComponent = renderer
    .create(<LookPage currentLook={currentLook} handleClick={handleClick} />)
    .toJSON()
  expect(renderedComponent).toMatchSnapshot()
})
