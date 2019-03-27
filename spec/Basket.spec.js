import React from 'react'
import renderer from 'react-test-renderer'
import Basket from '../src/Basket'
import '@babel/polyfill'
import { exportAllDeclaration } from '@babel/types'
import { JestEnvironment } from '@jest/environment'
require('react-router-dom')
jest.mock('react-router-dom')

let basketItems

afterAll(async () => {
  await firebase.app().delete()
})

beforeEach(() => {
  basketItems = {
    id: 1,
    brand: 'J',
    desc: 'J is awesome',
    price: 3000,
    image: 'https://i.imgur.com/iKT9fl6.jpg',
    gender: 'M',
  }
})

// afterAll(() => setTimeout(() => process.exit(), 1000))

test('Basket', () => {
  const renderedComponent = renderer
    .create(<Basket basket={basketItems} />)
    .toJSON()
  expect(renderedComponent).toMatchSnapshot()
})

test('renderBasket', () => {
  const component = renderer.create(<Basket basket={{}} />)
  const componentInstance = component.getInstance()
  const error = <h2>You don't have any basket items</h2>
  expect(componentInstance.renderBasket()).toEqual(error)
})
