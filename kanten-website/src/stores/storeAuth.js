import { defineStore } from 'pinia'
import { auth } from '../js/firebase.js'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => ({
    user: {}
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
          console.log('successfully logged in', user)
        })
        .catch((error) => {
          console.log('error message: ', error.message)
        })
    },
    logOutUser() {
      signOut(auth)
        .then(() => {
          console.log('user signed out')
          this.router.replace('/')
        })
        .catch((error) => {
          console.log('error message: ', error.message)
        })
    }
  }
})
