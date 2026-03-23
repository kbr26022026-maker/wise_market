<template>
  <section class="section trust" id="trust">
    <div class="glow glow-purple"></div>
    <div class="container">
      <div class="section-label reveal">Почему мы?</div>
      <h2 class="section-title reveal">Почему нам доверяют?</h2>
      <p class="section-subtitle reveal">
        Мы знаем, как превратить магазин на Ozon в стабильный источник дохода — с нуля или с масштабированием действующего бизнеса.
      </p>
      <div class="trust-grid">
        <div v-for="card in cards" :key="card.title" class="trust-card reveal">
          <div class="trust-icon" :class="card.color" v-html="card.icon"></div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const cards = [
  { icon: '&#9881;', color: 'purple', title: 'Избегаем ошибок', desc: 'Избегаем ошибок, которые мешают продажам. Наш опыт позволяет обходить типичные «грабли» и сразу двигаться к результату.' },
  { icon: '&#9733;', color: 'green', title: 'Настраиваем карточки', desc: 'Настраиваем карточки товаров так, чтобы они привлекали всех покупателей. Качественная оптимизация = рост конверсии.' },
  { icon: '&#9889;', color: 'orange', title: 'Оптимизируем рекламу', desc: 'Оптимизируем рекламные кампании и применяем собственные стратегии для максимального возврата инвестиций.' }
]
</script>
