import { defineStore } from 'pinia'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../js/firebase.js'

const volunteersCollectionRef = collection(db, 'volunteers')

export const useStoreVolunteers = defineStore('storeVolunteers', {
  state: () => {
    return {
      members: []
    }
  },

  actions: {
    async addVolunteer(volunteerContent) {
      await addDoc(volunteersCollectionRef, {
        name: volunteerContent.name,
        email: volunteerContent.email,
        phone: volunteerContent.phone,
        address: volunteerContent.address,
        postnumber: volunteerContent.postnumber,
        city: volunteerContent.city,
        birthday: volunteerContent.birthday
      })
    }
  }
})
