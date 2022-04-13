import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Search from "./views/Search.vue";
import Create from "./views/Create.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Home,
  },
  {
    path: "/search",
    name: "Reports",
    component: Search,
  },
  {
    path: "/new",
    name: "New report",
    component: Create,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: "active",
});

export default router;
