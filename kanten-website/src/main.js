import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import solid icons */
import { faUser, faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
/* import brand icons */
import {} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUser, faRightFromBracket, faRightToBracket)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
