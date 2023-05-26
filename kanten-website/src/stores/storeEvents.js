import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { db } from '../js/firebase.js'

const eventsCollectionRef = collection(db, 'events')

export const useStoreEvents = defineStore('storeEvents', {
  state: () => {
    return {
      events: [],
      coverImageName: null,
      coverImage: null
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
            coverImgName: doc.data().coverImage,
            coverImg: doc.data().coverImage,
            date: doc.data().date,
            time: doc.data().time,
            price: doc.data().datpricee,
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
        coverImgName: this.coverImageName,
        coverImg: this.coverImage,
        date: eventContent.date,
        time: eventContent.time,
        price: eventContent.price,
        genre: eventContent.genre,
        age: eventContent.age,
        performer: eventContent.performer,
        address: eventContent.address,
        ticket: eventContent.ticket
      })
      this.coverImageName = null
      this.coverImage = null
    },
    async getImageUrl(imageName, file) {
      // Create a root reference
      const storage = getStorage()
      // Create a reference to the image
      const imageRef = ref(storage, imageName)

      this.coverImageName = imageName
      await uploadBytes(imageRef, file)
      await getDownloadURL(ref(storage, imageName)).then((url) => {
        this.coverImage = url
        /* return url */
      })
    }
  }
})
