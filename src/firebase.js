import firebase from 'firebase'

const isTestEnv = process.env.TEST != undefined

var config = {
  apiKey: isTestEnv ? process.env.TEST_API_KEY : process.env.API_KEY,
  authDomain: isTestEnv
    ? process.env.TEST_AUTH_DOMAIN
    : process.env.AUTH_DOMAIN,
  databaseURL: isTestEnv
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL,
  projectId: isTestEnv ? process.env.TEST_PROJECT_ID : process.env.PROJECT_ID,
  storageBucket: isTestEnv
    ? process.env.TEST_STORAGE_BUCKET
    : process.env.STORAGE_BUCKET,
  messagingSenderId: isTestEnv
    ? process.env.TEST_MESSAGING_SENDER_ID
    : process.env.MESSAGING_SENDER_ID,
}

firebase.initializeApp(config)

export const db = firebase.firestore()
export default firebase
