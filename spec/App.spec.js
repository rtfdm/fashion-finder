// test.todo('Please uncomment rest when determined working')
import React from 'react'
import renderer from 'react-test-renderer'
import App from '../src/App'
import '@babel/polyfill'
import firebase from '../src/firebase'
require('react-router-dom')
jest.mock('react-router-dom')

let mockImage = {
  id: 1,
  image: 'https://i.imgur.com/n1IqG2c.jpg',
  brands: ['Ralph Lauren', 'Armani'],
  description: 'The description',
  price: '£299.99',
}

let mockSecondImage = {
  id: 2,
  image: 'https://i.imgur.com/iKT9fl6.jpg',
  brands: ['Pretty Little Thing'],
  description: 'Womens wear',
  price: '£199.99',
}

afterAll(async () => {
  await firebase.app().delete()
})

test('handleClick changes currentLook', () => {
  const component = renderer.create(<App />)
  const componentInstance = component.getInstance()
  componentInstance.setState({
    currentLook: mockImage,
    looks: [mockSecondImage],
  })
  componentInstance.handleClick()
  expect(componentInstance.state.currentLook).toEqual(mockSecondImage)
})

test('render()', () => {
  const component = renderer.create(<App />).toJSON()
  expect(component).toMatchSnapshot()
})
