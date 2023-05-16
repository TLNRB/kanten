<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import logoLong from '../images/logoLong.png'
import logo from '../images/logo.png'

const { sections } = defineProps(['sections'])

/* ---------- Pofile & Dropdown click event ---------- */
const loggedIn = ref(true)
const profileDropdownState = ref(false)

const profileDropdownStateChange = () => {
  profileDropdownState.value = !profileDropdownState.value
}

// Checking Class Conditions
const isLogged = computed(() => {
  return loggedIn.value ? 'profile-dropdown-loggedIn' : 'profile-dropdown-loggedOut'
})
const isLoggedBox = computed(() => {
  return loggedIn.value ? 'profile-dropdownBox-loggedIn' : 'profile-dropdownBox-loggedOut'
})
const profileDropdown = computed(() => {
  return profileDropdownState.value ? 'profile-dropdown-active' : ''
})

/* ---------- Nav and dropdown click event ---------- */
const screenWidth = ref(window.innerWidth)
const dropdownState = ref(false)

const dropdownStateChange = () => {
  dropdownState.value = !dropdownState.value
}

/* ---------- Resize handling ---------- */
function handleResize() {
  screenWidth.value = window.innerWidth
}

/*---------- Add resize event listener when component is mounted ---------- */
onMounted(() => {
  window.addEventListener('resize', handleResize)
})
/*---------- Remove resize event listener when component is mounted ---------- */
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="py-[1.5rem] px-[1rem] md:py-[2.5rem] md:px-[2rem] xl:p-[3rem]">
    <nav
      class="flex justify-between items-center z-10 border-t-[1px] border-b-[1px] border-darkerText py-[1rem] fixed top-[1.5rem] right-[1rem] left-[1rem] md:top-[2.5rem] md:right-[2rem] md:left-[2rem] xl:top-[3rem] xl:right-[3rem] xl:left-[3rem]"
    >
      <!------- Logo Image ------->
      <div>
        <a href="#">
          <img class="h-[3.25rem]" :src="screenWidth < 560 ? logo : logoLong" alt="Kanten logo" />
        </a>
      </div>

      <!------- Dropdown Text ------->
      <div
        class="flex gap-[6px] ml-auto mr-[1rem] text-[1.5rem] translate-y-[2px] group cursor-pointer uppercase leading-none md:hidden"
        @click="dropdownStateChange"
      >
        <div
          class="h-[9px] w-[9px] my-auto rounded-full bg-baseColor ease-in duration-[.2s]"
          :class="{ 'dropdown-activeState': dropdownState }"
        ></div>
        <div class="h-[24px] flex flex-col overflow-hidden">
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
        class="flex flex-col items-center w-[100%] ml-auto h-fit absolute top-[8rem] translate-x-[110%] text-[2.5rem] uppercase leading-[60px] ease-in duration-[.3s] xs:leading-[70px] sm:leading-[90px] md:pl-[60px] md:bg-darkBG md:translate-x-0 md:w-auto md:right-[4rem] md:top-[1.125rem] md:items-start md:leading-[45px] xl:right-[5rem]"
        :class="{ 'dropdown-nav-active': dropdownState }"
      >
        <div v-for="section in sections" :key="section.id" class="overflow-hidden">
          <p
            class="h-[50px] flex flex-col cursor-pointer group xs:h-[60px] sm:h-[80px] md:h-[35px]"
          >
            <span
              class="group-hover:translate-y-[-45px] ease-in duration-[.2s] xs:text-[3rem] xs:group-hover:translate-y-[-55px] sm:text-[4rem] sm:group-hover:translate-y-[-75px] md:text-[1.5rem] md:font-[500] md:group-hover:translate-y-[-35px]"
              :class="{ 'text-darkerText': section.active }"
              >{{ section.title }}</span
            >
            <span
              class="font-[500] text-baseColor rotate-6 translate-y-[-15px] group-hover:translate-y-[-60px] group-hover:rotate-0 ease-in duration-[.2s] xs:text-[3rem] xs:group-hover:translate-y-[-70px] sm:text-[4rem] sm:group-hover:translate-y-[-90px] sm:translate-y-[-10px] md:text-[1.5rem] md:group-hover:translate-y-[-45px]"
              >{{ section.title }}</span
            >
          </p>
        </div>
      </div>

      <!------- Profile ------->
      <button
        class="w-[2rem] h-[2rem] rounded-full border-[2px] border-baseColor ease-in duration-[.2s]"
        @click="profileDropdownStateChange"
        :class="{ 'border-darkerText': profileDropdownState }"
      >
        <font-awesome-icon
          class="h-[1.125rem] text-baseColor translate-y-[2px]"
          :icon="['fas', 'user']"
        />
      </button>

      <!-- Profile Dropdown -->
      <div
        class="translate-x-[150%] ease-in duration-[.3s] absolute border-[1px] border-baseColor bg-darkBG z-[1]"
        :class="[profileDropdown, isLogged]"
      >
        <div class="py-[1rem] px-[1.5rem] text-[1.125rem]" :class="[loggedIn ? 'hidden' : 'flex']">
          <button class="flex gap-[.75rem] group text-normalText">
            <font-awesome-icon
              class="w-[1rem] my-auto text-lightText group-hover:scale-125 ease-in duration-[.2s]"
              :icon="['fas', 'right-to-bracket']"
            />Login
          </button>
        </div>
        <div
          class="flex-col items-start gap-[.5rem] py-[1rem] px-[1.5rem] text-[1.125rem]"
          :class="[loggedIn ? 'flex' : 'hidden']"
        >
          <button class="flex gap-[.75rem] group text-normalText">
            <font-awesome-icon
              class="w-[1rem] my-auto text-lightText group-hover:scale-125 ease-in duration-[.2s]"
              :icon="['fas', 'user']"
            />Profile
          </button>
          <button class="flex gap-[.75rem] items-center group text-normalText">
            <font-awesome-icon
              class="w-[1rem] my-auto text-lightText group-hover:scale-125 ease-in duration-[.2s]"
              :icon="['fas', 'right-from-bracket']"
            />
            Log out
          </button>
        </div>
      </div>
      <div
        class="border-[1px] border-textLight absolute bg-darkBG z-[0] translate-x-[150%] ease-in duration-[.3s]"
        :class="[profileDropdown, isLoggedBox]"
      ></div>
    </nav>

    <!-- Dark Background for nav dropdown -->
    <div
      class="absolute top-0 right-0 bottom-0 opacity-0 w-0 ease-in duration-[.3s] z-[-1]"
      :class="{ 'bg-darkBG dropdown-background-active': dropdownState }"
    ></div>
  </div>
</template>

<style scoped>
.dropdown-nav-active {
  transform: translateX(0);
  transition-delay: all ease-in 1s;
}

.dropdown-background-active {
  opacity: 1;
  width: 100%;
  transition-delay: all 0.15s ease-in 0.3s;
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
  right: 0;
}

.profile-dropdownBox-loggedIn {
  width: 127px;
  height: 94px;
  bottom: -6.5rem;
  right: -0.5rem;
}

.profile-dropdown-loggedOut {
  bottom: -3.8rem;
  right: 0rem;
}

.profile-dropdownBox-loggedOut {
  width: 113px;
  height: 59px;
  bottom: -4.3rem;
  right: -0.5rem;
}

.profile-dropdown-active {
  transform: translateX(0);
  transition: transform ease-in 0.3s;
}
</style>