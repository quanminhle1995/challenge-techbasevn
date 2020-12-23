import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import primeVue from "./primevue";
import CustomComponents from "./components/index";
import firebase from "firebase";
import { firebaseConfig } from "./config/firebase";
const app = createApp(App);
app.use(PrimeVue);
firebase.initializeApp(firebaseConfig);
primeVue.forEach(cop => {
  app.component(cop.name, cop.component);
});
CustomComponents.forEach(cop => {
  app.component(cop.name, cop.component);
});
app
  .use(store)
  .use(router)
  .mount("#app");
