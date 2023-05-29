import { defineStore } from 'pinia'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../js/firebase.js'

const membersCollectionRef = collection(db, 'members')

export const useStoreMembers = defineStore('storeMembers', {
  state: () => {
    return {
      members: []
    }
  },

  actions: {
    async addMember(memberContent) {
      await addDoc(membersCollectionRef, {
        name: memberContent.name,
        email: memberContent.email,
        phone: memberContent.phone,
        address: memberContent.address,
        postnumber: memberContent.postnumber,
        city: memberContent.city,
        birthday: memberContent.birthday
      })
    }
  }
})
