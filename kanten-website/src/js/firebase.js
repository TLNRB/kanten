import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCHEl8cLsaC2ZAq--2wiyRzP8_OobTolZE',
  authDomain: 'kanten-c95d9.firebaseapp.com',
  projectId: 'kanten-c95d9',
  storageBucket: 'kanten-c95d9.appspot.com',
  messagingSenderId: '835176997624',
  appId: '1:835176997624:web:73dd08e35734c8b0a3510d'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
