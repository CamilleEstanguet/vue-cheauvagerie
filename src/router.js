import { createRouter, createWebHistory } from "vue-router"
import Home from "./views/Home.vue"
import Login from "./views/Login.vue"
import Search from "./views/Reports/Search.vue"
import Create from "./views/Reports/Create.vue"
import Customers from "./views/Customers/Customers.vue"
import NewCustomer from "./views/Customers/CreateCustomer.vue"
import NewBoiler from "./views/Customers/CreateBoiler.vue"
import Technicians from "./views/Technicians/Technicians.vue"
import NewTechnician from "./views/Technicians/CreateTechnician.vue"

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Home,
  },
  {
    path: "/login",
    name: "Se connecter",
    component: Login,
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
    path: "/customers",
    name: "Clients et chaudières",
    component: Customers,
  },
  {
    path: "/customers/new-customer",
    name: "Nouveau client",
    component: NewCustomer,
  },
  {
    path: "/customers/new-boiler",
    name: "Nouvelle chaudière",
    component: NewBoiler,
  },
  {
    path: "/technicians",
    name: "Techniciens",
    component: Technicians,
  }, 
  {
    path: "/technicians/new",
    name: "Nouveau technicien",
    component: NewTechnician,
  },  
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: "active",
});

export default router;
