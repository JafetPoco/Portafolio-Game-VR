import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Gameplay from '../views/Gameplay.vue'
import Project from '../views/Project.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/gameplay',
      name: 'gameplay',
      component: Gameplay,    
    },
    {
      path: '/project',
      name: 'project',
      component: Project,
    }
  ],
})

export default router