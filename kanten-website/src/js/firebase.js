//Import firebase config
import firebaseConfig from './firebase-config.js'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
