<template>
  <header class="header" :class="{ scrolled }">
    <div class="container header-inner">
      <a href="#" class="logo"><img src="/logo.png" alt="WiseMarket" class="logo-img"></a>
      <nav class="nav">
        <a href="#" @click.prevent="$emit('scrollTo', 'services')">Услуги</a>
        <a href="#" @click.prevent="$emit('scrollTo', 'pricing')">Тарифы</a>
        <a href="#" @click.prevent="$emit('scrollTo', 'cases')">Кейсы</a>
        <a href="#" @click.prevent="$emit('scrollTo', 'testimonials')">Отзывы</a>
        <a href="#" @click.prevent="$emit('scrollTo', 'faq')">FAQ</a>
        <a href="#" @click.prevent="$emit('scrollTo', 'contact')">Контакты</a>
      </nav>
      <div class="header-cta">
        <a href="#" class="btn btn-primary" @click.prevent="$emit('scrollTo', 'contact')">Оставить заявку</a>
      </div>
      <div class="burger" :class="{ active: mobileOpen }" @click="toggleMobile">
        <span></span><span></span><span></span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue'

defineEmits(['scrollTo'])

const mobileOpen = inject('mobileOpen')
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 60
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
  document.body.style.overflow = mobileOpen.value ? 'hidden' : ''
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
