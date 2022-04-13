import { createRouter, createWebHistory } from "vue-router"
import Home from "./views/Home.vue"
import Search from "./views/Search.vue"
import Create from "./views/Create.vue"
import Login from "./views/Login.vue"

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Home,
  },
  {
    path: "/search",
    name: "Rapports",
    component: Search,
  },
  {
    path: "/new",
    name: "Nouveau rapport",
    component: Create,
  },
  {
    path: "/login",
    name: "Se connecter",
    component: Login,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: "active",
});

export default router;
