import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AgregarTarea from '../views/AgregarTarea.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/agregar',
    name: 'AgregarTarea',
    component: AgregarTarea,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
