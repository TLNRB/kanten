<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import logoLong from '../images/logoRect.svg'
import logo from '../images/logoSquare.svg'

import { useStoreAuth } from '../stores/storeAuth.js'

/*----- Store -----*/
const storeAuth = useStoreAuth()

const { sections } = defineProps(['sections'])
const logOut = () => {
  storeAuth.logOutUser()
  profileDropdownState.value = false
}

/* ---------- Routing---------- */
const router = useRouter()

/* ---------- Pofile & Dropdown click event ---------- */
const profileDropdownState = ref(false)
const profileDropdownStateChange = () => {
  profileDropdownState.value = !profileDropdownState.value
}

// Checking Class Conditions
const isLogged = computed(() => {
  return storeAuth.user.id ? 'profile-dropdown-loggedIn' : 'profile-dropdown-loggedOut'
})
const isLoggedBox = computed(() => {
  return storeAuth.user.id ? 'profile-dropdownBox-loggedIn' : 'profile-dropdownBox-loggedOut'
})
const isLoggedButton = computed(() => {
  return storeAuth.user.id ? 'profile-button-loggedIn' : 'profile-button-loggedOut'
})
const profileDropdown = computed(() => {
  return profileDropdownState.value ? 'profile-dropdown-active' : ''
})
const profileButton = computed(() => {
  return profileDropdownState.value ? 'border-darkerText' : 'border-baseColor'
})

/* ---------- Nav and dropdown click event ---------- */
const screenWidth = ref(window.innerWidth)
const dropdownState = ref(false)

const dropdownStateChange = () => {
  if (screenWidth.value < 1060) {
    dropdownState.value = !dropdownState.value
    if (dropdownState.value) {
      disableScroll()
    } else {
      enableScroll()
    }
  }
}

/* ---------- Disable Scroll ---------- */
const disableScroll = () => {
  document.body.classList.add('overflow-hidden')
}

/* ---------- Enable Scroll ---------- */
const enableScroll = () => {
  document.body.classList.remove('overflow-hidden')
}

/* ---------- Resize handling ---------- */
function handleResize() {
  screenWidth.value = window.innerWidth
  if (screenWidth.value > 1060) {
    dropdownState.value = false
    enableScroll()
  }
}

/* ---------- Scroll handling ---------- */
//Nav move up after scroll position
const isScrollingXL = ref(false)
const isScrollingLG = ref(false)
const isScrollingSM = ref(false)

const handleScroll = () => {
  if (window.pageYOffset > 0 && window.innerWidth > 1199) {
    isScrollingXL.value = true
    isScrollingLG.value = false
    isScrollingSM.value = false
  } else if (window.pageYOffset > 0 && window.innerWidth > 1059) {
    isScrollingXL.value = false
    isScrollingLG.value = true
    isScrollingSM.value = false
  } else if (window.pageYOffset > 0 && window.innerWidth < 1060) {
    isScrollingXL.value = false
    isScrollingLG.value = false
    isScrollingSM.value = true
  } else {
    isScrollingXL.value = false
    isScrollingLG.value = false
    isScrollingSM.value = false
  }
}

const isScrolling = computed(() => {
  if (isScrollingXL.value) {
    return 'scroll-up-xl'
  } else if (isScrollingLG.value) {
    return 'scroll-up-lg'
  } else if (isScrollingSM.value) {
    return 'scroll-up-sm'
  } else {
    return
  }
})

/*---------- Add resize event listener when component is mounted ---------- */
onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll)
})
/*---------- Remove resize event listener when component is mounted ---------- */
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <nav
      class="flex justify-between items-center z-10 bg-darkBG border-t-[1px] border-b-[1px] border-darkerText p-[1rem] fixed top-[1.5rem] right-0 left-0 ease-in-out duration-[.3s] md:px-[2rem] lg:top-[2.5rem] xl:top-[3rem] xl:px-[3rem]"
      :class="[isScrolling]"
    >
      <!------- Logo Image ------->
      <div>
        <a href="#">
          <img
            class="h-[3.25rem]"
            :src="screenWidth < 560 ? logo : logoLong"
            alt="Kanten logo"
            @click="router.replace('/')"
          />
        </a>
      </div>

      <!-- Profile -->
      <button
        class="w-[2rem] h-[2rem] ml-[1.5rem] rounded-full border-[2px] ease-in duration-[.2s] md:mr-auto"
        @click="profileDropdownStateChange"
        :class="[profileButton, isLoggedButton]"
      >
        <font-awesome-icon
          class="h-[1.125rem] text-baseColor translate-y-[2px]"
          :icon="['fas', 'user']"
        />
      </button>

      <div
        class="translate-x-[-150%] ease-in duration-[.3s] absolute border-[1px] border-baseColor bg-darkBG z-[1]"
        :class="[profileDropdown, isLogged]"
      >
        <div
          class="flex-col items-start gap-[.5rem] py-[1rem] px-[1.5rem] text-[1.125rem]"
          :class="[storeAuth.user.id ? 'flex' : 'hidden']"
        >
          <RouterLink
            to="admin"
            class="flex gap-[.75rem] group text-normalText"
            @click="profileDropdownStateChange"
          >
            <font-awesome-icon
              class="w-[1rem] my-auto text-lightText group-hover:scale-125 ease-in duration-[.2s]"
              :icon="['fas', 'user']"
            /><span class="translate-y-[3px]">Admin</span>
          </RouterLink>
          <button class="flex gap-[.75rem] items-center group text-normalText" @click="logOut">
            <font-awesome-icon
              class="w-[1rem] my-auto text-lightText group-hover:scale-125 ease-in duration-[.2s]"
              :icon="['fas', 'right-from-bracket']"
            />
            <span class="translate-y-[3px]">Log Out</span>
          </button>
        </div>
      </div>
      <div
        class="border-[1px] border-textLight absolute bg-darkBG z-[0] translate-x-[-150%] ease-in duration-[.3s]"
        :class="[profileDropdown, isLoggedBox]"
      ></div>

      <!------- Dropdown Text ------->
      <div
        class="flex gap-[6px] ml-auto mr-[1rem] text-[1.5rem] translate-y-[2px] group cursor-pointer uppercase leading-none lg:hidden"
        @click="dropdownStateChange"
      >
        <div
          class="h-[9px] w-[9px] my-auto rounded-full bg-baseColor ease-in duration-[.2s]"
          :class="{ 'dropdown-activeState': dropdownState }"
        ></div>
        <div class="h-[24px] flex flex-col pt-[1.5px] overflow-hidden">
          <span
            class="tetx-lightText ease-in duration-[.2s]"
            :class="{ 'translate-y-[-24px]': dropdownState }"
            >Menu</span
          >
          <span
            class="rotate-6 ease-in duration-[.2s]"
            :class="{ 'dropdown-close-active': dropdownState }"
            >Close</span
          >
        </div>
      </div>

      <!------- Nav Links ------->
      <div
        class="flex flex-col gap-[1.25rem] items-center w-[100%] ml-auto h-fit absolute top-[12rem] xs:top-[10rem] translate-x-[110%] text-[2.5rem] uppercase leading-[60px] ease-in duration-[.3s] xs:leading-[70px] xs:gap-[1.5rem] sm:leading-[90px] lg:flex-row lg:gap-[2.5rem] lg:items-end lg:translate-x-0 lg:w-auto lg:relative lg:right-0 lg:top-[-.25rem] lg:leading-[45px]"
        :class="{ 'dropdown-nav-active': dropdownState }"
      >
        <div v-for="section in sections" :key="section.id" class="overflow-hidden">
          <RouterLink
            :to="section.route"
            class="h-[50px] flex flex-col cursor-pointer group xs:h-[60px] sm:h-[80px] lg:h-[35px]"
            @click="dropdownStateChange"
          >
            <span
              class="group-hover:translate-y-[-45px] ease-in duration-[.2s] xs:text-[3rem] xs:group-hover:translate-y-[-55px] sm:text-[4rem] sm:group-hover:translate-y-[-75px] lg:text-[1.5rem] lg:font-[500] lg:group-hover:translate-y-[-35px]"
              :class="{ 'text-darkerText': section.active }"
              >{{ section.title }}</span
            >
            <span
              class="font-[500] text-baseColor rotate-6 translate-y-[-5px] group-hover:translate-y-[-60px] group-hover:rotate-0 ease-in duration-[.2s] xs:text-[3rem] xs:group-hover:translate-y-[-70px] sm:text-[4rem] sm:group-hover:translate-y-[-95px] lg:text-[1.5rem] lg:group-hover:translate-y-[-45px]"
              >{{ section.title }}</span
            >
          </RouterLink>
        </div>
      </div>
      <!-- Dark Background for nav dropdown -->
      <div
        class="absolute min-h-[100vh] top-0 right-0 bottom-0 w-0 opacity-0 ease-in duration-[.3s] z-[-1]"
        :class="{ 'bg-darkBG dropdown-background-active': dropdownState }"
      ></div>
    </nav>
  </div>
</template>

<style scoped>
.scroll-up-sm {
  transform: translateY(-1.5rem);
  padding: 1rem;
  left: 0;
  right: 0;
  border-top: 1px solid #181818;
  transition: all 0.3s ease-in-out;
}
.scroll-up-lg {
  transform: translateY(-2.5rem);
  padding: 1rem 2rem;
  left: 0;
  right: 0;
  border-top: 1px solid #181818;
  transition: all 0.3s ease-in-out;
}

.scroll-up-xl {
  transform: translateY(-3rem);
  padding: 1rem 3rem;
  left: 0;
  right: 0;
  border-top: 1px solid #181818;
  transition: all 0.3s ease-in-out;
}

.dropdown-nav-active {
  transform: translateX(-1rem);
  transition-delay: all ease-in 1s;
}

.dropdown-background-active {
  opacity: 1;
  width: 100%;
  transition-delay: all ease-in 0.3s;
}
.dropdown-activeState {
  background-color: #666666;
  transition: background-color ease-in 0.2s;
}
.dropdown-close-active {
  transform: rotate(0);
  transform: translateY(-24px);
}

.profile-dropdown-loggedIn {
  bottom: -6rem;
  left: 0.5rem;
}

.profile-dropdownBox-loggedIn {
  width: 127px;
  height: 94px;
  bottom: -6.5rem;
  left: 0rem;
}

.profile-button-loggedIn {
  display: block;
}

.profile-dropdown-loggedOut {
  display: none;
}

.profile-dropdownBox-loggedOut {
  display: none;
}

.profile-button-loggedOut {
  display: none;
}

.profile-dropdown-active {
  transform: translateX(0);
  transition: transform ease-in 0.3s;
}
</style>
