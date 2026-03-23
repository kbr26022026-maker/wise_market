<template>
  <AppHeader @scrollTo="scrollTo" />
  <MobileNav :open="mobileOpen" @close="mobileOpen = false" @scrollTo="scrollTo" />
  <router-view />
  <FooterSection />
</template>

<script setup>
import { ref, provide } from 'vue'
import AppHeader from './components/AppHeader.vue'
import MobileNav from './components/MobileNav.vue'
import FooterSection from './components/FooterSection.vue'

const mobileOpen = ref(false)
provide('mobileOpen', mobileOpen)

function scrollTo(id) {
  mobileOpen.value = false
  document.body.style.overflow = ''
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
  }
}
</script>
