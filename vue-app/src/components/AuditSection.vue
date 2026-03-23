<template>
  <section class="section audit" id="audit">
    <div class="container">
      <div class="section-label reveal">Аудит</div>
      <h2 class="section-title reveal">По итогам аудита вы получите чёткий план роста продаж</h2>
      <p class="section-subtitle reveal">От стратегии до конкретных действий — полный анализ вашего магазина.</p>
      <div class="audit-grid">
        <div v-for="item in items" :key="item" class="audit-item reveal">
          <div class="audit-check">&#10003;</div>
          <span>{{ item }}</span>
        </div>
      </div>
      <div class="checklist-banner reveal">
        <div>
          <h3>&#128196; Скачайте чек-лист «10 шагов для постоянных продаж»</h3>
          <p>Бесплатный гайд для старта и роста на Ozon</p>
        </div>
        <a href="/checklist.pdf" download="Чек-лист_10_шагов_для_постоянных_продаж.pdf" class="btn btn-green">Скачать бесплатно</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const items = [
  'Сроки и детали отгрузки товара',
  'Отзывы и рейтинг',
  'Ключевые слова в названии',
  'Ключевые слова в описании',
  'Медиа-контент',
  'Анализ конкурентов'
]
</script>
