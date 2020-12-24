import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NotFound from "../views/NotFound.vue";
import Dasboard from "../views/Dasboard/Dasboard.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "index"
  },
  {
    path: "/dasboard",
    name: "AppCovid",
    component: () =>
      import(
        /* webpackChunkName: "AppCovid" */ "../views/AppCovid/AppCovid.vue"
      ),
    children: [
      {
        path: "/index",
        redirect: "dasboard"
      },
      {
        path: "/dasboard",
        name: "dasboard",
        component: Dasboard
      }
    ],
    beforeEnter: (to, from, next) => {
      //Securiry
      next(true);
    }
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
