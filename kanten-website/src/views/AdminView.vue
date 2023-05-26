<script setup>
import { ref, reactive, onMounted } from 'vue'
/* ---------- Import Components ---------- */
import AddEvents from '../components/Admin/AddEvents.vue'
import EditEvent from '../components/Admin/EditEvent.vue'
import ExistingEvent from '../components/Admin/ExistingEvent.vue'
import AddPicturesStudio from '../components/Admin/AddPicturesStudio.vue'
import StudioGallery from '../components/Admin/StudioGallery.vue'
import AddPicturesGenres from '../components/Admin/AddPicturesGenres.vue'
import GenresGallery from '../components/Admin/GenresGallery.vue'

/* ---------- Import Databases ---------- */
import allEvents from '../data/eventsDB.js'
import allGallery from '../data/studioGalleryDB.js'
import allGenresGallery from '../data/genresGalleryDB.js'
/* ---------- Import Store ---------- */
import { useStoreEvents } from '../stores/storeEvents'

/* ---------- Evnts store ---------- */
const storeEvents = useStoreEvents()

//Uploading events
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
  ticket: ''
})
const image = ref(null)

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
  image.value = null
}

//Add Event
const addNewEvent = () => {
  storeEvents.addEvent(newEvent)
  valueClear()
}

//Image upload
const handleImageUpload = (file) => {
  image.value = file
  storeEvents.getImageUrl(file.value.name, file.value)
}

const events = ref(allEvents)
const gallery = ref(allGallery)
const genresGallery = ref(allGenresGallery)
const filteredGallery = ref('')

/* ---------- Modal ---------- */
const showDeleteModal = ref(false)
const showEditModal = ref(false)

/* Edit Modal */
const openEditModal = () => {
  showEditModal.value = true
  disableScroll()
}

const closeEditModal = () => {
  showEditModal.value = false
  enableScroll()
}

const confirmEdit = () => {
  console.log('edited')
  showEditModal.value = false
  closeEditModal()
}

/* Delete Modal */
const openDeleteModal = () => {
  showDeleteModal.value = true
  disableScroll()
}

const closeDeleteModal = () => {
  showDeleteModal.value = false
  enableScroll()
}

const confirmDelete = () => {
  console.log('deleted')
  showDeleteModal.value = false
  closeDeleteModal()
}

const disableScroll = () => {
  document.body.classList.add('overflow-hidden')
}

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
  { id: 0, name: 'Mana Club', filter: 'manaClub', active: true },
  { id: 1, name: 'DUB', filter: 'dub', active: false },
  { id: 2, name: 'Vertex', filter: 'vertex', active: false },
  { id: 3, name: 'Deft', filter: 'deft', active: false }
])

const handleGenreState = (id) => {
  genres.forEach((genre) => {
    if (genre.id == id) {
      genre.active = true
      filteredGallery.value = genresGallery.value.filter((image) => image.genre == genre.filter)
    } else {
      genre.active = false
    }
  })
}

/* ---------- Handle File Select ---------- */
/* const selectedFile = ref('')
const handleFileChange = (event) => {
  const file = event.target.files[0]
  selectedFile.value = file
} */

onMounted(() => {
  handleGenreState(genres[0].id)
  storeEvents.getEvents()
})
</script>

<template>
  <!------- Edit Modal ------->
  <div
    v-show="showEditModal"
    class="modal h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 overflow-auto"
  >
    <EditEvent @saved="confirmEdit" @canceled="closeEditModal" />
  </div>
  <!------- Delete Modal ------->
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
      <AddEvents :newEvent="newEvent" @imageSelected="handleImageUpload" @addEvent="addNewEvent" />
      <h2
        class="flex items-center justify-center mx-auto text-[2rem] font-bold mt-[8rem] uppercase xs:text-[2.5rem] md:text-[5rem] md:mt-[10rem]"
      >
        Existing Events
      </h2>
      <div
        v-if="events.length"
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
      <AddPicturesGenres />
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
        v-if="filteredGallery.length"
        class="my-[3rem] md:mt-[4rem] flex justify-center gap-[4rem] flex-wrap"
      >
        <GenresGallery v-for="image in filteredGallery" :key="image.id" :image="image" />
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
      <AddPicturesStudio />
      <h2
        class="flex items-center justify-center mx-auto text-[2rem] font-bold mt-[8rem] uppercase xs:text-[2.5rem] md:text-[5rem] md:mt-[10rem]"
      >
        Studio Gallery
      </h2>
      <div
        v-if="gallery.length"
        class="my-[3rem] md:mt-[4rem] flex justify-center gap-[4rem] flex-wrap"
      >
        <StudioGallery v-for="image in gallery" :key="image.id" :image="image" />
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
