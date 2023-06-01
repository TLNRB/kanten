<script setup>
import { ref, reactive, onMounted } from 'vue'
/* ---------- Import Components ---------- */
import AddEvents from '../components/Admin/AddEvents.vue'
import ExistingEvent from '../components/Admin/ExistingEvent.vue'
import EditEvent from '../components/Admin/EditEvent.vue'
import AddPicturesStudio from '../components/Admin/AddPicturesStudio.vue'
import StudioGallery from '../components/Admin/StudioGallery.vue'
import EditStudioGallery from '../components/Admin/EditStudioGallery.vue'
import AddPicturesGenres from '../components/Admin/AddPicturesGenres.vue'
import GenresGallery from '../components/Admin/GenresGallery.vue'
import EditGenreGallery from '../components/Admin/EditGenreGallery.vue'

/* ---------- Import Stores ---------- */
import { useStoreEvents } from '../stores/storeEvents'
import { useStoreGenres } from '../stores/storeGenres'
import { useStoreStudio } from '../stores/storeStudio'

/* ---------- Stores ---------- */
const storeEvents = useStoreEvents()
const storeGenres = useStoreGenres()
const storeStudio = useStoreStudio()

/*------------------------- Events -------------------------*/
//V-model events info storing
const newEvent = reactive({
  title: '',
  shortDesc: '',
  longDesc: '',
  date: '',
  time: '',
  price: '',
  genre: '',
  age: '',
  performer: '',
  address: '',
  ticket: '',

  coverImg: '',
  coverImgName: ''
})

//Temporary values events
const image = ref(null)
const tempId = ref()
const deleteID = ref()

//Clear values events
const valueClear = () => {
  newEvent.title = ''
  newEvent.shortDesc = ''
  newEvent.longDesc = ''
  newEvent.date = ''
  newEvent.time = ''
  newEvent.price = ''
  newEvent.genre = ''
  newEvent.age = ''
  newEvent.performer = ''
  newEvent.address = ''
  newEvent.ticket = ''

  newEvent.coverImg = ''
  newEvent.coverImgName = ''
  image.value = null
}

//Add event
const addNewEvent = () => {
  storeEvents.addEvent(newEvent)
  valueClear()
}

//Image upload events
const handleImageUpload = (file) => {
  image.value = file
  storeEvents.getImageUrl(file.value.name, file.value)
}

//Edit event
const editEvent = (id) => {
  for (let i = 0; i < storeEvents.events.length; i++) {
    if (storeEvents.events[i].id === id) {
      newEvent.title = storeEvents.events[i].title
      newEvent.shortDesc = storeEvents.events[i].shortDesc
      newEvent.longDesc = storeEvents.events[i].longDesc
      newEvent.date = storeEvents.events[i].date
      newEvent.time = storeEvents.events[i].time
      newEvent.price = storeEvents.events[i].price
      newEvent.genre = storeEvents.events[i].genre
      newEvent.age = storeEvents.events[i].age
      newEvent.performer = storeEvents.events[i].performer
      newEvent.address = storeEvents.events[i].address
      newEvent.ticket = storeEvents.events[i].ticket

      newEvent.coverImg = storeEvents.events[i].coverImg
      newEvent.coverImgName = storeEvents.events[i].coverImgName
      tempId.value = storeEvents.events[i].id
    }
  }
}

//Save event editing
const saveEditEvent = async () => {
  storeEvents.updateImage(tempId.value)
  storeEvents.updateEvents(newEvent, tempId.value)
  valueClear()
  tempId.value = ''
}

//Close event editing
const closeEditEvent = () => {
  storeEvents.closeEditing(tempId.value)
  valueClear()
  tempId.value = ''
}

//Modal events
const showDeleteModal = ref(false)
const showEditModal = ref(false)

//Open Edit Modal events
const openEditModal = (id) => {
  editEvent(id)
  showEditModal.value = true
  disableScroll()
}

//Close Edit Modal events
const closeEditModal = () => {
  closeEditEvent()
  showEditModal.value = false
  enableScroll()
}

//Confirm Edit Modal events
const confirmEdit = () => {
  saveEditEvent()
  showEditModal.value = false
  enableScroll()
}

//Open Delete Modal events
const openDeleteModal = (id) => {
  deleteID.value = id
  showDeleteModal.value = true
  disableScroll()
}

//Close Delete Modal events
const closeDeleteModal = () => {
  showDeleteModal.value = false
  enableScroll()
  deleteID.value = ''
}

//Confirm Delete Modal events
const confirmDelete = () => {
  storeEvents.deleteEvent(deleteID.value)
  showDeleteModal.value = false
  closeDeleteModal()
}

/*------------------------- Studio -------------------------*/
//V-model studio info storing
const newStudio = reactive({
  title: '',

  coverImg: '',
  coverImgName: ''
})

//Temporary values studio
const imageStudio = ref()
const tempIdStudio = ref()
const deleteIDStudio = ref()

//Values clear studio
const valueClearStudio = () => {
  newStudio.title = ''

  newStudio.coverImg = ''
  newStudio.coverImgName = ''
  imageStudio.value = null
}

//Add Image to Studio Gallery
const addNewStudio = () => {
  storeStudio.addStudio(newStudio)
  valueClearStudio()
}

//Image upload studio
const handleImageUploadStudio = (file) => {
  imageStudio.value = file
  storeStudio.getImageUrl(file.value.name, file.value)
}

//Edit Studio Gallery
const editStudio = (id) => {
  for (let i = 0; i < storeStudio.studios.length; i++) {
    if (storeStudio.studios[i].id === id) {
      newStudio.title = storeStudio.studios[i].title

      newStudio.coverImg = storeStudio.studios[i].coverImg
      newStudio.coverImgName = storeStudio.studios[i].coverImgName
      tempIdStudio.value = storeStudio.studios[i].id
    }
  }
}

//Save Studio Gallery editing
const saveEditStudio = async () => {
  storeStudio.updateImage(tempIdStudio.value)
  storeStudio.updateStudio(newStudio, tempIdStudio.value)
  valueClearStudio()
  tempIdStudio.value = ''
}

//Close Studio Gallery editing
const closeEditStudio = () => {
  storeStudio.closeEditing(tempIdStudio.value)
  valueClearStudio()
  tempIdStudio.value = ''
}

//Modal Studio Gallery
const showDeleteModalStudio = ref(false)
const showEditModalStudio = ref(false)

//Open Edit Modal Studio Gallery
const openEditModalStudio = (id) => {
  editStudio(id)
  showEditModalStudio.value = true
  disableScroll()
}

//Close Edit Modal Studio Gallery
const closeEditModalStudio = () => {
  closeEditStudio()
  showEditModalStudio.value = false
  enableScroll()
}

//Confirm Edit Modal Studio Gallery
const confirmEditStudio = () => {
  saveEditStudio()
  showEditModalStudio.value = false
  enableScroll()
}

//Open Delete Modal Studio Gallery
const openDeleteModalStudio = (id) => {
  deleteIDStudio.value = id
  showDeleteModalStudio.value = true
  disableScroll()
}

//Close Delete Modal Studio Gallery
const closeDeleteModalStudio = () => {
  showDeleteModalStudio.value = false
  enableScroll()
  deleteIDStudio.value = ''
}

//Confirm Delete Modal Studio Gallery
const confirmDeleteStudio = () => {
  storeStudio.deleteStudio(deleteIDStudio.value)
  showDeleteModalStudio.value = false
  closeDeleteModalStudio()
}

/*------------------------- Genres -------------------------*/
//V-model genres info storing
const newGenre = reactive({
  title: '',
  genre: '',

  coverImg: '',
  coverImgName: ''
})

//Temporary values genres
const imageGenre = ref()
const tempIdGenre = ref()
const deleteIDGenre = ref()

//Values clear genres
const valueClearGenre = () => {
  newGenre.title = ''
  newGenre.genre = ''

  newGenre.coverImg = ''
  newGenre.coverImgName = ''
  imageGenre.value = null
}

//Add Genre
const addNewGenre = () => {
  storeGenres.addGenre(newGenre)
  valueClearGenre()
}

//Image upload genres
const handleImageUploadGenre = (file) => {
  imageGenre.value = file
  storeGenres.getImageUrl(file.value.name, file.value)
}

//Edit Genre
const editGenre = (id) => {
  for (let i = 0; i < storeGenres.genres.length; i++) {
    if (storeGenres.genres[i].id === id) {
      newGenre.title = storeGenres.genres[i].title
      newGenre.genre = storeGenres.genres[i].genre

      newGenre.coverImg = storeGenres.genres[i].coverImg
      newGenre.coverImgName = storeGenres.genres[i].coverImgName
      tempIdGenre.value = storeGenres.genres[i].id
    }
  }
}

//Save genre editing
const saveEditGenre = async () => {
  storeGenres.updateImage(tempIdGenre.value)
  storeGenres.updateGenres(newGenre, tempIdGenre.value)
  valueClearGenre()
  tempIdGenre.value = ''
}

//Close genre editing
const closeEditGenre = () => {
  storeGenres.closeEditing(tempIdGenre.value)
  valueClearGenre()
  tempIdGenre.value = ''
}

//Modal Genre
const showDeleteModalGenre = ref(false)
const showEditModalGenre = ref(false)

//Open Edit Modal Genre
const openEditModalGenre = (id) => {
  editGenre(id)
  showEditModalGenre.value = true
  disableScroll()
}

//Close Edit Modal Genre
const closeEditModalGenre = () => {
  closeEditGenre()
  showEditModalGenre.value = false
  enableScroll()
}

//Confirm Edit Modal Genre
const confirmEditGenre = () => {
  saveEditGenre()
  showEditModalGenre.value = false
  enableScroll()
}

//Open Delete Modal Genre
const openDeleteModalGenre = (id) => {
  deleteIDGenre.value = id
  showDeleteModalGenre.value = true
  disableScroll()
}

//Close Delete Modal Genre
const closeDeleteModalGenre = () => {
  showDeleteModalGenre.value = false
  enableScroll()
  deleteIDGenre.value = ''
}

//Confirm Delete Modal Genre
const confirmDeleteGenre = () => {
  storeGenres.deleteGenre(deleteIDGenre.value)
  showDeleteModalGenre.value = false
  closeDeleteModalGenre()
}

/* ---------- Disable Scroll ---------- */
const disableScroll = () => {
  document.body.classList.add('overflow-hidden')
}

/* ---------- Enable Scroll ---------- */
const enableScroll = () => {
  document.body.classList.remove('overflow-hidden')
}

/* ---------- Options with filter ---------- */
const options = reactive([
  { id: 0, name: 'Events', filter: 'event', active: true },
  { id: 1, name: 'Genres Gallery', filter: 'genre', active: false },
  { id: 2, name: 'Studio Gallery', filter: 'studio', active: false }
])

const handleOptionState = (id) => {
  options.forEach((option) => {
    if (option.id == id) {
      option.active = true
    } else {
      option.active = false
    }
  })
}

/* ---------- Genres with filter ---------- */
const genres = reactive([
  { id: 0, name: 'Mana Club', filter: 'manaClub', active: false },
  { id: 1, name: 'DUB', filter: 'dub', active: false },
  { id: 2, name: 'Vertex', filter: 'vertex', active: false },
  { id: 3, name: 'Deft', filter: 'deft', active: false }
])

const handleGenreState = (id) => {
  genres.forEach((genre) => {
    if (genre.id == id) {
      genre.active = true

      storeGenres.filteredGenres = storeGenres.genres.filter((image) => image.genre == genre.filter)
    } else {
      genre.active = false
    }
  })
}

onMounted(() => {
  storeGenres.getGenres()
  storeEvents.getEvents()
  storeStudio.getStudio()
})
</script>

<template>
  <!-------------- Event --------------->
  <!-- Edit Modal Event -->
  <div
    v-show="showEditModal"
    class="modal h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 overflow-auto"
  >
    <EditEvent
      @saved="confirmEdit"
      @canceled="closeEditModal"
      @imageSelected="handleImageUpload"
      :newEvent="newEvent"
      :storeEvents="storeEvents"
    />
  </div>
  <!-- Delete Modal Event -->
  <div
    v-show="showDeleteModal"
    @click.self="closeDeleteModal"
    class="modal h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 bottom-0"
  >
    <div
      class="flex flex-col justify-center items-center py-[2rem] px-[1rem] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto bg-darkBG border-[1px] border-baseColor w-[250px] sm:w-[350px] sm:py-[3rem] sm:gap-[.5rem]"
    >
      <p class="font-[500] sm:text-[1.25rem]">Are you sure you want to delete?</p>
      <div class="flex gap-[1rem] mx-auto text-[1.25rem] px-[.5rem] sm:gap-[1.5rem]">
        <button
          class="flex flex-col mt-[1.5rem] w-fit mx-auto text-[1rem] relative group"
          @click="confirmDelete"
        >
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] bg-green-700 border-green-700 z-[1] group-hover:border-lightText ease-in duration-[.15s] delay-[.05s]"
            >Yes</span
          >
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s]"
            >Yes</span
          >
        </button>
        <button
          class="flex flex-col mt-[1.5rem] w-fit mx-auto text-[1rem] relative group"
          @click="closeDeleteModal"
        >
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] bg-red-700 border-red-700 z-[1] group-hover:border-lightText ease-in duration-[.15s] delay-[.05s]"
            >No</span
          >
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s]"
            >No</span
          >
        </button>
      </div>
    </div>
  </div>

  <!-------------- Genre --------------->
  <!-- Edit Modal Genre -->
  <div
    v-show="showEditModalGenre"
    class="modal h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 overflow-auto"
  >
    <EditGenreGallery
      @saved="confirmEditGenre"
      @canceled="closeEditModalGenre"
      @imageSelected="handleImageUploadGenre"
      :newGenre="newGenre"
      :storeGenres="storeGenres"
    />
  </div>
  <!-- Delete Modal Genre -->
  <div
    v-show="showDeleteModalGenre"
    @click.self="closeDeleteModalGenre"
    class="modal h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 bottom-0"
  >
    <div
      class="flex flex-col justify-center items-center py-[2rem] px-[1rem] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto bg-darkBG border-[1px] border-baseColor w-[250px] sm:w-[350px] sm:py-[3rem] sm:gap-[.5rem]"
    >
      <p class="font-[500] sm:text-[1.25rem]">Are you sure you want to delete?</p>
      <div class="flex gap-[1rem] mx-auto text-[1.25rem] px-[.5rem] sm:gap-[1.5rem]">
        <button
          class="flex flex-col mt-[1.5rem] w-fit mx-auto text-[1rem] relative group"
          @click="confirmDeleteGenre"
        >
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] bg-green-700 border-green-700 z-[1] group-hover:border-lightText ease-in duration-[.15s] delay-[.05s]"
            >Yes</span
          >
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s]"
            >Yes</span
          >
        </button>
        <button
          class="flex flex-col mt-[1.5rem] w-fit mx-auto text-[1rem] relative group"
          @click="closeDeleteModalGenre"
        >
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] bg-red-700 border-red-700 z-[1] group-hover:border-lightText ease-in duration-[.15s] delay-[.05s]"
            >No</span
          >
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s]"
            >No</span
          >
        </button>
      </div>
    </div>
  </div>

  <!-------------- Studio --------------->
  <!-- Edit Modal Studio Gallery -->
  <div
    v-show="showEditModalStudio"
    class="modal h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 overflow-auto"
  >
    <EditStudioGallery
      @saved="confirmEditStudio"
      @canceled="closeEditModalStudio"
      @imageSelected="handleImageUploadStudio"
      :newStudio="newStudio"
      :storeStudio="storeStudio"
    />
  </div>
  <!-- Delete Modal Studio Gallery -->
  <div
    v-show="showDeleteModalStudio"
    @click.self="closeDeleteModalStudio"
    class="modal h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 bottom-0"
  >
    <div
      class="flex flex-col justify-center items-center py-[2rem] px-[1rem] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto bg-darkBG border-[1px] border-baseColor w-[250px] sm:w-[350px] sm:py-[3rem] sm:gap-[.5rem]"
    >
      <p class="font-[500] sm:text-[1.25rem]">Are you sure you want to delete?</p>
      <div class="flex gap-[1rem] mx-auto text-[1.25rem] px-[.5rem] sm:gap-[1.5rem]">
        <button
          class="flex flex-col mt-[1.5rem] w-fit mx-auto text-[1rem] relative group"
          @click="confirmDeleteStudio"
        >
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] bg-green-700 border-green-700 z-[1] group-hover:border-lightText ease-in duration-[.15s] delay-[.05s]"
            >Yes</span
          >
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s]"
            >Yes</span
          >
        </button>
        <button
          class="flex flex-col mt-[1.5rem] w-fit mx-auto text-[1rem] relative group"
          @click="closeDeleteModalStudio"
        >
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] bg-red-700 border-red-700 z-[1] group-hover:border-lightText ease-in duration-[.15s] delay-[.05s]"
            >No</span
          >
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s]"
            >No</span
          >
        </button>
      </div>
    </div>
  </div>

  <!------- Content ------->
  <main
    class="bg-[url('../images/gridGray.svg')] overflow-x-hidden flex flex-col mt-[6.875rem] py-[4rem] px-[1rem] md:px-[4rem] md:mt-[7.875rem] xl:mt-[8.375rem] xxl:px-[12.5rem]"
    :class="{ 'overflow-y-hidden': showModal }"
  >
    <h1
      class="flex items-center justify-center relative mx-auto text-[2rem] uppercase xs:text-[2.5rem] md:text-[5rem] leading-none"
    >
      <span class="font-bold text-baseColor z-[1]">Admin</span>
      <span class="font-bold absolute top-[1.5px] left-[1.5px] z-[0] md:top-[2.5px] md:left-[2.5px]"
        >Admin</span
      >
    </h1>
    <div
      class="mt-[3rem] md:mt-[4rem] flex flex-wrap items-center justify-center gap-[1.25rem] md:gap-[2rem]"
    >
      <button
        v-for="option in options"
        :key="option.id"
        class="flex flex-col text-center text-[1.25rem] relative group"
        @click="handleOptionState(option.id)"
      >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
          :class="[option.active ? 'active' : '']"
          >{{ option.name }}</span
        >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
          >{{ option.name }}</span
        >
      </button>
    </div>
    <!-- Sections goes here -->
    <!-- Events -->
    <div v-if="options[0].active">
      <AddEvents
        :newEvent="newEvent"
        :storeEvents="storeEvents"
        @imageSelected="handleImageUpload"
        @addEvent="addNewEvent"
      />
      <h2
        class="flex items-center justify-center mx-auto text-[2rem] font-bold mt-[8rem] uppercase xs:text-[2.5rem] md:text-[5rem] md:mt-[10rem]"
      >
        Existing Events
      </h2>
      <div
        v-if="storeEvents.events.length"
        class="my-[3rem] md:mt-[4rem] flex justify-center gap-[4rem] flex-wrap"
      >
        <ExistingEvent
          v-for="event in storeEvents.events"
          :key="event.id"
          :event="event"
          @modal-delete-open="openDeleteModal"
          @modal-edit-open="openEditModal"
        />
      </div>
      <div
        v-else
        class="mt-[2rem] text-[1rem] flex justify-center text-normalText italic md:text-[1.25rem]"
      >
        No events found
      </div>
    </div>
    <!-- Genres -->
    <div v-else-if="options[1].active">
      <AddPicturesGenres
        :newGenre="newGenre"
        :storeGenres="storeGenres"
        @imageSelected="handleImageUploadGenre"
        @addGenre="addNewGenre"
      />
      <h2
        class="flex items-center justify-center mx-auto text-[2rem] font-bold mt-[8rem] uppercase xs:text-[2.5rem] md:text-[5rem] md:mt-[10rem]"
      >
        Genre Gallery
      </h2>
      <div
        class="mt-[3rem] md:mt-[4rem] flex flex-wrap items-center justify-center gap-[1.25rem] md:gap-[2rem]"
      >
        <button
          v-for="genre in genres"
          :key="genre.id"
          class="flex flex-col text-center text-[1.25rem] relative group"
          @click="handleGenreState(genre.id)"
        >
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
            :class="[genre.active ? 'active' : '']"
            >{{ genre.name }}</span
          >
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
            >{{ genre.name }}</span
          >
        </button>
      </div>
      <div
        v-if="storeGenres.filteredGenres.length"
        class="my-[3rem] md:mt-[4rem] flex justify-center gap-[4rem] flex-wrap"
      >
        <GenresGallery
          v-for="genre in storeGenres.filteredGenres"
          :key="genre.id"
          :genre="genre"
          @modal-delete-open="openDeleteModalGenre"
          @modal-edit-open="openEditModalGenre"
        />
      </div>
      <div
        v-else-if="!genres[0].active && !genres[1].active && !genres[2].active && !genres[3].active"
        class="mt-[2rem] text-[1rem] flex justify-center text-normalText italic md:text-[1.25rem]"
      >
        Choose a filter option
      </div>
      <div
        v-else
        class="mt-[3rem] text-[1rem] flex justify-center text-normalText italic md:text-[1.25rem]"
      >
        No images found
      </div>
    </div>

    <!-- Studio -->
    <div v-else-if="options[2].active">
      <AddPicturesStudio
        :newStudio="newStudio"
        :storeStudio="storeStudio"
        @imageSelected="handleImageUploadStudio"
        @addStudio="addNewStudio"
      />
      <h2
        class="flex items-center justify-center mx-auto text-[2rem] font-bold mt-[8rem] uppercase xs:text-[2.5rem] md:text-[5rem] md:mt-[10rem]"
      >
        Studio Gallery
      </h2>
      <div
        v-if="storeStudio.studios.length"
        class="my-[3rem] md:mt-[4rem] flex justify-center gap-[4rem] flex-wrap"
      >
        <StudioGallery
          v-for="studio in storeStudio.studios"
          :key="studio.id"
          :studio="studio"
          @modal-delete-open="openDeleteModalStudio"
          @modal-edit-open="openEditModalStudio"
        />
      </div>
      <div
        v-else
        class="mt-[2rem] text-[1rem] flex justify-center text-normalText italic md:text-[1.25rem]"
      >
        No images found
      </div>
    </div>
  </main>
</template>

<style scoped>
.modal {
  background-color: #181818bb;
  backdrop-filter: blur(4px);
}
.active {
  background-color: #1ecece;
  transition: ease-in 0.2s;
}

.active:hover {
  color: #f4f4f4;
  transition: ease-in 0.2s;
}
</style>
