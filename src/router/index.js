import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'App',
      path: '/',
      component: () => import('../App.vue')  // 👈 points to App.vue instead of missing file
    },
  ],
})

export default router