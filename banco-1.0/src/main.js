import { createApp } from 'vue'
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from "./router/router";


createApp(App)
  .use( router )
  .use( bootstrap )
  .mount('#app')
