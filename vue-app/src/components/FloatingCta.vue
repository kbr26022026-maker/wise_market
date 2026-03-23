<template>
  <div class="floating-cta" :class="{ show: visible }">
    <a href="#contact" class="btn btn-primary">&#128172; Оставить заявку</a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() {
  const footer = document.querySelector('.footer')
  if (footer) {
    const footerTop = footer.getBoundingClientRect().top
    visible.value = window.scrollY > 600 && footerTop > window.innerHeight
  } else {
    visible.value = window.scrollY > 600
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
