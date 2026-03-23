<template>
  <section class="section testimonials" id="testimonials">
    <div class="glow glow-purple"></div>
    <div class="container">
      <div class="section-label reveal">Отзывы</div>
      <h2 class="section-title reveal">С нами работают — нас рекомендуют</h2>
      <p class="section-subtitle reveal">Более 1000 брендов уже работают с нами</p>
      <div class="testimonials-slider reveal">
        <div v-for="t in testimonials" :key="t.name" class="testimonial-card">
          <div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div class="testimonial-text">{{ t.text }}</div>
          <div class="testimonial-author">
            <div class="testimonial-avatar">{{ t.initials }}</div>
            <div>
              <div class="testimonial-name">{{ t.name }}</div>
              <div class="testimonial-role">{{ t.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const testimonials = [
  {
    initials: 'ВП', name: 'Вадим Полозов', role: 'Бренд товаров для питомцев',
    text: 'Сначала хотел просто проконсультироваться. Был скепсис — думал, как и везде: пообещают, пропадут. Но уже на первом этапе понял — здесь всё иначе. Не шаблонные фразы, а конкретные действия. Через полторы недели я увидел первые стабильные заказы.'
  },
  {
    initials: 'АК', name: 'Алексей К.', role: 'Электроника на Ozon',
    text: 'Что понравилось больше всего — это подход. Не «продали услугу и забыли», а реально включились в процесс, как будто запускали свой бизнес. Уровень и вовлечённость команды — на 10 из 10. Работаем уже 3 месяц!'
  },
  {
    initials: 'МД', name: 'Марина Д.', role: 'Товары для дома',
    text: 'Я не из тех, кто оставляет отзывы, но в данном случае — заслужили. Вместе разобрали мой товар, полностью переработали позиционирование. Результат превзошел все ожидания — продажи стабильно растут каждую неделю.'
  },
  {
    initials: 'ИС', name: 'Игорь С.', role: 'Спортивные товары',
    text: 'С WiseMarket вышли на стабильный оборот за 2 месяца. Команда работает как единый механизм — каждый шаг продуман. Рекомендую всем, кто хочет не просто продавать, а доминировать на маркетплейсе.'
  }
]
</script>
