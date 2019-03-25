import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import firebase, { db } from '../firebase'
// import 'normalize.css'

import LookPage from '../LookPage'
import LookInfo from '../LookInfo'
import Basket from '../Basket'

const GlobalStyles = createGlobalStyle`
  * {
    text-rendering: auto;
    box-sizing: border-box;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  ul {
    padding: 0;
  }

  #app {
    @media only screen and (min-width: 400px) {
      min-height: 100vh;
      display: grid;
      // grid-template-columns: min-content;
      // justify-content: center;
      align-items: center;
    }
  }
`

export default class App extends Component {
  state = {
    currentLook: {
      id: 1,
      image: 'https://i.imgur.com/iKT9fl6.jpg',
      brands: ['Ralph Lauren', 'Armani'],
      description: 'The description',
      price: '£299.99',
    },
  }

  componentDidMount() {
    const looksTable = db.collection('looks')
    looksTable.get().then(snapshot => {
      const looks = []
      snapshot.docs.forEach(doc => {
        const { brands, description, price, image } = doc.data()

        const look = {
          id: doc.id,
          brands,
          description,
          price,
          image,
        }

        looks.push(look)
      })

      this.setState({ currentLook: looks[0] })
      looks.splice(0, 1)
      this.setState({ looks })
      console.log(this.state)
    })
  }

  handleClick = () => {
    this.setState({ currentLook: this.state.looks[0] })
    const looks = this.state.looks
    looks.splice(0, 1)
    this.setState({ looks })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <GlobalStyles />
          <Route
            exact={true}
            path="/"
            render={props => (
              <LookPage
                currentLook={this.state.currentLook}
                handleClick={this.handleClick}
              />
            )}
          />
          <Route
            exact={true}
            path="/lookinfo"
            render={props => <LookInfo currentLook={this.state.currentLook} />}
          />
          <Route exact={true} path="/lookbook" render={props => <Basket />} />
        </div>
      </BrowserRouter>
    )
  }
}
