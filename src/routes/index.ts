import { createRouter, createWebHistory } from 'vue-router'
import SearchResult from './SearchResult.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: SearchResult
    }
  ]
})
