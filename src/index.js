import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

firebase.initializeApp(config)
      const db = firebase.firestore()
ReactDOM.render(<App />, document.getElementById('app'))
