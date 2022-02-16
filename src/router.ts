import { createRouter, createWebHistory } from 'vue-router';
import Counter from '@/views/Counter.vue';
import Home from '@/views/Home.vue';
import Tea from '@/views/Tea.vue';
import Offline from '@/views/Offline.vue';
import SpaceXMissions from '@/views/SpaceXMissions.vue';

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
  {
    path: '/space-x-missions',
    name: 'SpaceXMissions',
    component: SpaceXMissions,
  },
  {
    path: '/space-x-missions/:missionId',
    name: 'SpaceXMissions',
    component: SpaceXMissions,
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
