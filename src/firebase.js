import firebase from 'firebase'

const {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  TEST_API_KEY,
  TEST_AUTH_DOMAIN,
  TEST_DATABASE_URL,
  TEST_PROJECT_ID,
  TEST_STORAGE_BUCKET,
  TEST_MESSAGING_SENDER_ID,
} = process.env

var config = {
  apiKey: process.env.TEST ? TEST_API_KEY : API_KEY,
  authDomain: process.env.TEST ? TEST_AUTH_DOMAIN : AUTH_DOMAIN,
  databaseURL: process.env.TEST ? TEST_DATABASE_URL : DATABASE_URL,
  projectId: process.env.TEST ? TEST_PROJECT_ID : PROJECT_ID,
  storageBucket: process.env.TEST ? TEST_STORAGE_BUCKET : STORAGE_BUCKET,
  messagingSenderId: process.env.TEST
    ? TEST_MESSAGING_SENDER_ID
    : MESSAGING_SENDER_ID,
}

firebase.initializeApp(config)

export const db = firebase.firestore()
export default firebase
