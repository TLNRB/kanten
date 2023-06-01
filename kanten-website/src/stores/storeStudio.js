import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { db } from '../js/firebase.js'

const studioCollectionRef = collection(db, 'studio')

export const useStoreStudio = defineStore('storeStudio', {
  state: () => {
    return {
      studios: [],
      coverImgName: null,
      coverImg: null
    }
  },

  actions: {
    async getStudio() {
      const unsubscribe = onSnapshot(studioCollectionRef, (querySnapshot) => {
        let studios = []
        querySnapshot.forEach((doc) => {
          let studio = {
            id: doc.id,
            title: doc.data().title,
            coverImgName: doc.data().coverImgName,
            coverImg: doc.data().coverImg
          }
          studios.push(studio)
        })
        this.studios = studios
      })
    },
    async addStudio(studioContent) {
      await addDoc(studioCollectionRef, {
        title: studioContent.title,
        coverImgName: this.coverImgName,
        coverImg: this.coverImg
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
    async deleteStudio(id) {
      const filteredStudio = this.studios.filter((studio) => studio.id === id)

      // Create a reference to the image
      const imageRef = ref(getStorage(), filteredStudio[0].coverImgName)

      //Check if another event uses the same picture
      let coverImageCondition = false
      for (let i = 0; i < this.studios.length; i++) {
        if (
          this.studios[i].coverImgName === filteredStudio[0].coverImgName &&
          this.studios[i].id !== filteredStudio[0].id
        ) {
          coverImageCondition = true
        }
      }

      if (!coverImageCondition) {
        deleteObject(imageRef)
      }
      await deleteDoc(doc(studioCollectionRef, id))
      coverImageCondition = false
    },

    closeEditing(id) {
      const filteredStudio = this.studios.filter((studio) => studio.id === id)

      if (
        filteredStudio[0].coverImgName !== this.coverImgName &&
        this.coverImgName != null &&
        this.coverImg != null
      ) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), this.coverImgName)
        //Check if another event uses the same picture
        let coverImageCondition = false
        for (let i = 0; i < this.studios.length; i++) {
          if (this.studios[i].coverImgName === this.coverImgName) {
            coverImageCondition = true
          }
        }

        if (!coverImageCondition) {
          deleteObject(imageRef)
        }
      }
      this.coverImg = null
      this.coverImgName = null
    },

    async updateStudio(studioContent, id) {
      await updateDoc(doc(studioCollectionRef, id), {
        title: studioContent.title
      })
    },
    async updateImage(id) {
      const filteredStudio = this.studios.filter((studio) => studio.id === id)

      if (
        filteredStudio[0].coverImg !== this.coverImg &&
        this.coverImgName != null &&
        this.coverImg != null
      ) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), filteredStudio[0].coverImgName)
        //Check if another event uses the same picture
        let coverImageCondition = false
        for (let i = 0; i < this.studios.length; i++) {
          if (
            this.studios[i].coverImgName === filteredStudio[0].coverImgName &&
            this.studios[i].id !== filteredStudio[0].id
          ) {
            coverImageCondition = true
          }
        }
        if (!coverImageCondition) {
          deleteObject(imageRef)
        }

        await updateDoc(doc(studioCollectionRef, id), {
          coverImgName: this.coverImgName,
          coverImg: this.coverImg
        })
      }
      this.coverImg = null
      this.coverImgName = null
    }
  }
})
