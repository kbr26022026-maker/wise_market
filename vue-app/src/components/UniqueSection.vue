<template>
  <section class="section unique" id="unique">
    <div class="glow glow-pink"></div>
    <div class="container">
      <div class="section-label reveal">Уникальность</div>
      <h2 class="section-title reveal">В чём наша уникальность?</h2>
      <p class="section-subtitle reveal">Берём на себя всю работу — вы не теряете время и деньги на эксперименты.</p>
      <div class="unique-grid">
        <div v-for="item in items" :key="item.num" class="unique-card reveal">
          <div class="unique-num">{{ item.num }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const items = [
  { num: '01', title: 'Магазин «под ключ»', desc: 'Создаём магазин «под ключ» под ваши цели. От регистрации до первых продаж.' },
  { num: '02', title: 'Продвижение бизнеса', desc: 'Продвигаем действующий бизнес на лидирующие позиции с проверенными стратегиями.' },
  { num: '03', title: 'Готовые карточки', desc: 'Продаём готовые прибыльные карточки товаров, чтобы вы начали зарабатывать сразу.' }
]
</script>
