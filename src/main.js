import {createApp} from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from "@/router";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.js"
import 'remixicon/fonts/remixicon.css'

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app');
