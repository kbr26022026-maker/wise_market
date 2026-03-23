<template>
  <section class="stats">
    <div class="container">
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.text" class="stat-item reveal">
          <div class="stat-number" ref="counterEls" :data-count="stat.count">0</div>
          <div class="stat-text">{{ stat.text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stats = [
  { count: 1000, text: 'Пользователей доверяют нам' },
  { count: 5, text: 'Лет опыта в маркетплейсах' },
  { count: 98, text: '% рост продаж за первую неделю' },
  { count: 100, text: '% клиентов экономят до 100 000 ₽' }
]

const counterEls = ref([])
let observer = null

function animateCounter(el) {
  if (el.dataset.animated) return
  el.dataset.animated = '1'
  const target = parseInt(el.dataset.count)
  const duration = 2000
  let startTime = null
  function step(ts) {
    if (!startTime) startTime = ts
    const progress = Math.min((ts - startTime) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.floor(eased * target) + '+'
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        const counter = entry.target.querySelector('[data-count]')
        if (counter) animateCounter(counter)
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.stat-item.reveal').forEach(el => observer.observe(el))
})

onUnmounted(() => { if (observer) observer.disconnect() })
</script>
