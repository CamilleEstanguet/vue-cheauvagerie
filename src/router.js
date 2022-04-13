import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Page1 from './views/Page1.vue';
import Page2 from './views/Page2.vue';

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Home,
  },
  {
    path: '/page1',
    name: 'Page 1',
    component: Page1,
  },
  {
    path: '/page2',
    name: 'Page 2',
    component: Page2,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: 'active',
});

export default router;