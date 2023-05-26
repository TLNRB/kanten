import { defineStore } from 'pinia'
import { auth } from '../js/firebase.js'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => ({
    user: {},
    error: null
  }),

  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
          this.router.push('/admin')
        } else {
          this.user = {}
        }
      })
    },
    loginUser(email, password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user
          /* console.log('successfully logged in', user) */
          this.error = ''
        })
        .catch((error) => {
          this.error = error.message
          console.log('error message: ', error.message)
          setInterval(() => {
            this.error = ''
          }, 5000)
        })
    },
    logOutUser() {
      signOut(auth)
        .then(() => {
          /* console.log('user signed out') */
          this.router.replace('/')
        })
        .catch((error) => {
          console.log('error message: ', error.message)
        })
    }
  }
})
