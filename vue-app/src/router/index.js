import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import TariffsPage from '../components/TariffsPage.vue'
import OfferPage from '../components/OfferPage.vue'
import PolicyPage from '../components/PolicyPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/tariffs', component: TariffsPage },
  { path: '/offer', component: OfferPage },
  { path: '/policy', component: PolicyPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, top: 70 }
    return { top: 0 }
  }
})

export default router
