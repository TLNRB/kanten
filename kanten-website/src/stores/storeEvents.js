import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { db } from '../js/firebase.js'

const eventsCollectionRef = collection(db, 'events')

export const useStoreEvents = defineStore('storeEvents', {
  state: () => {
    return {
      events: [],
      coverImgName: null,
      coverImg: null
    }
  },

  actions: {
    async getEvents() {
      const unsubscribe = onSnapshot(eventsCollectionRef, (querySnapshot) => {
        let events = []
        querySnapshot.forEach((doc) => {
          let event = {
            id: doc.id,
            title: doc.data().title,
            shortDesc: doc.data().shortDesc,
            longDesc: doc.data().longDesc,
            coverImgName: doc.data().coverImgName,
            coverImg: doc.data().coverImg,
            date: doc.data().date,
            time: doc.data().time,
            price: doc.data().price,
            genre: doc.data().genre,
            age: doc.data().age,
            performer: doc.data().performer,
            address: doc.data().address,
            ticket: doc.data().ticket
          }
          events.push(event)
        })
        this.events = events
      })
    },
    async addEvent(eventContent) {
      await addDoc(eventsCollectionRef, {
        title: eventContent.title,
        shortDesc: eventContent.shortDesc,
        longDesc: eventContent.longDesc,
        coverImgName: this.coverImgName,
        coverImg: this.coverImg,
        date: eventContent.date,
        time: eventContent.time,
        price: eventContent.price,
        genre: eventContent.genre,
        age: eventContent.age,
        performer: eventContent.performer,
        address: eventContent.address,
        ticket: eventContent.ticket
      })
      this.coverImgName = null
      this.coverImg = null
    },
    async getImageUrl(imageName, file) {
      // Create a root reference
      const storage = getStorage()
      // Create a reference to the image
      const imageRef = ref(storage, imageName)

      this.coverImgName = imageName
      await uploadBytes(imageRef, file)
      await getDownloadURL(ref(storage, imageName)).then((url) => {
        this.coverImg = url
      })
    },
    async deleteEvent(id) {
      const filteredEvent = this.events.filter((event) => event.id === id)

      // Create a reference to the image
      const imageRef = ref(getStorage(), filteredEvent[0].coverImgName)

      //Check if another event uses the same picture
      let coverImageCondition = false
      for (let i = 0; i < this.events.length; i++) {
        if (
          this.events[i].coverImgName === filteredEvent[0].coverImgName &&
          this.events[i].id !== filteredEvent[0].id
        ) {
          coverImageCondition = true
        }
      }

      if (!coverImageCondition && filteredEvent[0].coverImgName) {
        deleteObject(imageRef)
      }
      await deleteDoc(doc(eventsCollectionRef, id))
      coverImageCondition = false
    },

    closeEditing(id) {
      const filteredEvent = this.events.filter((event) => event.id === id)

      if (filteredEvent[0].coverImgName !== this.coverImgName && this.coverImg != null) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), this.coverImgName)
        deleteObject(imageRef)
      }
      this.coverImg = null
      this.coverImgName = null
    },

    async updateEvents(eventContent, id) {
      await updateDoc(doc(eventsCollectionRef, id), {
        title: eventContent.title,
        shortDesc: eventContent.shortDesc,
        longDesc: eventContent.longDesc,
        date: eventContent.date,
        time: eventContent.time,
        price: eventContent.price,
        genre: eventContent.genre,
        age: eventContent.age,
        performer: eventContent.performer,
        address: eventContent.address,
        ticket: eventContent.ticket
      })
    },
    async updateImage(id) {
      const filteredEvent = this.events.filter((event) => event.id === id)

      if (filteredEvent[0].coverImg !== this.coverImg && this.coverImg !== null) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), filteredEvent[0].coverImgName)
        deleteObject(imageRef)

        await updateDoc(doc(eventsCollectionRef, id), {
          coverImgName: this.coverImgName,
          coverImg: this.coverImg
        })
      }
      this.coverImg = null
      this.coverImgName = null
    }
  }
})
