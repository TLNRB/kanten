import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { db } from '../js/firebase.js'

const genresCollectionRef = collection(db, 'genres')

export const useStoreGenres = defineStore('storeGenres', {
  state: () => {
    return {
      genres: [],
      filteredGenres: [],
      coverImgName: null,
      coverImg: null
    }
  },

  actions: {
    async getGenres() {
      const unsubscribe = onSnapshot(genresCollectionRef, (querySnapshot) => {
        let genres = []
        querySnapshot.forEach((doc) => {
          let genre = {
            id: doc.id,
            title: doc.data().title,
            coverImgName: doc.data().coverImgName,
            coverImg: doc.data().coverImg,
            genre: doc.data().genre
          }
          genres.push(genre)
        })
        this.genres = genres
      })
    },
    async addGenre(genreContent) {
      await addDoc(genresCollectionRef, {
        title: genreContent.title,
        coverImgName: this.coverImgName,
        coverImg: this.coverImg,
        genre: genreContent.genre
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
    async deleteGenre(id) {
      const filteredGenre = this.genres.filter((genre) => genre.id === id)

      // Create a reference to the image
      const imageRef = ref(getStorage(), filteredGenre[0].coverImgName)

      //Check if another event uses the same picture
      let coverImageCondition = false
      for (let i = 0; i < this.genres.length; i++) {
        if (
          this.genres[i].coverImgName === filteredGenre[0].coverImgName &&
          this.genres[i].id !== filteredGenre[0].id
        ) {
          coverImageCondition = true
        }
      }

      if (!coverImageCondition) {
        deleteObject(imageRef)
      }
      await deleteDoc(doc(genresCollectionRef, id))
      coverImageCondition = false
    },

    closeEditing(id) {
      const filteredGenre = this.genres.filter((genre) => genre.id === id)

      if (filteredGenre[0].coverImgName !== this.coverImgName && this.coverImg != null) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), this.coverImgName)
        deleteObject(imageRef)
      }
      this.coverImg = null
      this.coverImgName = null
    },

    async updateGenres(genresContent, id) {
      await updateDoc(doc(genresCollectionRef, id), {
        title: genresContent.title,
        genre: genresContent.genre
      })
    },
    async updateImage(id) {
      const filteredGenre = this.genres.filter((genre) => genre.id === id)

      if (filteredGenre[0].coverImg !== this.coverImg && this.coverImg !== null) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), filteredGenre[0].coverImgName)
        deleteObject(imageRef)

        await updateDoc(doc(genresCollectionRef, id), {
          coverImgName: this.coverImgName,
          coverImg: this.coverImg
        })
      }
      this.coverImg = null
      this.coverImgName = null
    }
  }
})
