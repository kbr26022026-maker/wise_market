<template>
  <section class="section cases" id="cases">
    <div class="glow glow-pink"></div>
    <div class="container">
      <div class="section-label reveal">Кейсы</div>
      <h2 class="section-title reveal">От первых шагов до многомиллионных оборотов</h2>
      <p class="section-subtitle reveal">Ознакомьтесь с реальными результатами наших клиентов</p>
      <div class="cases-grid">
        <div v-for="c in cases" :key="c.title" class="case-card reveal">
          <div class="case-category">{{ c.category }}</div>
          <h3>{{ c.title }}</h3>
          <div class="case-results">
            <div v-for="r in c.results" :key="r.text" class="case-result">
              <span v-html="r.icon"></span> {{ r.text }}
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

const cases = [
  {
    category: 'Одежда и аксессуары', title: 'Термоноски мужские',
    results: [
      { icon: '&#8599;', text: 'Продажи выросли с 463 до 1 320 шт./мес. за 1,5 месяца' },
      { icon: '&#127942;', text: 'Закрепились в ТОП-3 термоносков' },
      { icon: '&#128200;', text: 'Конверсия из карточки — 32,8%' }
    ]
  },
  {
    category: 'Техника и гаджеты', title: 'Квадрокоптер DJI Mavic 3 Pro',
    results: [
      { icon: '&#8599;', text: 'Оборот 6 904 600 рублей за 2 месяца' },
      { icon: '&#128176;', text: 'ROI превысил 220%' },
      { icon: '&#128200;', text: 'Запуски новых партий проходят без задержек' }
    ]
  },
  {
    category: 'Товары для дома', title: 'Рум-спрей',
    results: [
      { icon: '&#8599;', text: 'Выручка 742 300 рублей за 2 месяца' },
      { icon: '&#128200;', text: 'Количество продаж выросло на 185%' },
      { icon: '&#128230;', text: 'Оптимизация логистики увеличила маржу' }
    ]
  },
  {
    category: 'Электроника', title: 'Зарядный комплект 20W',
    results: [
      { icon: '&#8599;', text: 'Продажи с 351 до 1 935 шт./мес. за 1,5 месяца' },
      { icon: '&#127942;', text: 'Закрепились в ТОП-1 аксессуаров для смартфонов' },
      { icon: '&#128200;', text: 'Высокая конверсия и стабильный рост' }
    ]
  }
]
</script>
