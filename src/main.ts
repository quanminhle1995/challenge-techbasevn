import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import PrimeVue from 'primevue/config';
import primeVue from "./primevue";
import CustomComponents from "./components/index";
const app = createApp(App);
app.use(PrimeVue);
primeVue.forEach(cop => {
  app.component(cop.name, cop.component);
})
CustomComponents.forEach(cop => {
  app.component(cop.name, cop.component);
})
app.use(store)
  .use(router)
  .mount("#app");
