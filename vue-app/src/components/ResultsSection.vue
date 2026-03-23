<template>
  <section class="section results" id="results">
    <div class="glow glow-green"></div>
    <div class="container">
      <div class="section-label reveal">Результаты</div>
      <h2 class="section-title reveal">Результаты наших клиентов на Ozon</h2>
      <p class="section-subtitle reveal">Цифры, которые говорят сами за себя</p>
      <div class="results-grid">
        <div v-for="r in results" :key="r.number" class="result-card reveal">
          <div class="result-number">{{ r.number }}</div>
          <h3>{{ r.title }}</h3>
          <p>{{ r.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const results = [
  { number: '100%', title: 'Экономят до 100 000 ₽', desc: 'Избегая ошибок новичков благодаря нашему опыту' },
  { number: '70%', title: 'Получают продажи с первого дня', desc: 'Без тестов и ожидания' },
  { number: '86%', title: 'Выходят на пассивный доход', desc: 'В первый месяц благодаря комплексному управлению' }
]
</script>
