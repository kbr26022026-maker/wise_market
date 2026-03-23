<template>
  <section class="section services" id="services">
    <div class="glow glow-green"></div>
    <div class="container">
      <div class="section-label reveal">Что мы делаем</div>
      <h2 class="section-title reveal">Мы создаём прибыльный бизнес на Ozon</h2>
      <p class="section-subtitle reveal">Вы — в деле, мы — в деталях. Никаких рисков и лишних затрат. Работаем на результат.</p>
      <div class="services-grid">
        <div v-for="s in services" :key="s.title" class="service-card reveal">
          <div class="service-step">{{ s.step }}</div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
          <span class="service-tag" :class="s.tagClass">{{ s.tag }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const services = [
  { step: 'Этап 1', title: 'Рост', desc: 'Создаем магазин, настраиваем все и передаем вам. Обучаем и консультируем весь первый месяц — без ведения, но с полной готовностью к продажам.', tag: 'Запуск', tagClass: 'tag-blue' },
  { step: 'Этап 2', title: 'Масштаб', desc: 'Берем на себя полное управление бизнесом на Ozon — от самого старта до стабильного роста. Вам не потребуется погружаться в детали.', tag: 'Управление', tagClass: 'tag-green' },
  { step: 'Этап 3', title: 'Доминация', desc: 'От стратегии до доминации. Вы не просто продаете, вы лидируете: обходите конкурентов, масштабируетесь и закрепляете лидерство.', tag: 'Лидерство', tagClass: 'tag-orange' },
  { step: 'Этап 4', title: 'Продвижение', desc: 'Разрабатываем и внедряем персонализированные рекламные стратегии для привлечения новых клиентов и роста вашего дохода.', tag: 'Реклама', tagClass: 'tag-pink' }
]
</script>
