import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
}
firebase.initializeApp(config)
      const db = firebase.firestore()
ReactDOM.render(<App />, document.getElementById('app'))
