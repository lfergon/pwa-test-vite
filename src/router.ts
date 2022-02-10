import Counter from '@/views/Counter.vue';
import Home from '@/views/Home.vue';
import Tea from '@/views/Tea.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Offline from '@/views/Offline.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    name: 'Counter',
    component: Counter,
  },
  {
    path: '/offline',
    name: 'Offline',
    component: Offline,
  },
  {
    path: '/tea',
    name: 'Tea',
    component: Tea,
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
