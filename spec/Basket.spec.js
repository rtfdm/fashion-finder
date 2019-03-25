import React from 'react'
import renderer from 'react-test-renderer'
import Basket from '../src/Basket'
import { exportAllDeclaration } from '@babel/types'
import { JestEnvironment } from '@jest/environment'
require('react-router-dom')
jest.mock('react-router-dom')

let basketItems

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

test('Basket', () => {
  const renderedComponent = renderer
    .create(<Basket basketItems={basketItems} />)
    .toJSON()
  expect(renderedComponent).toMatchSnapshot()
})
