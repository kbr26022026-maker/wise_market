<template>
  <section class="section pricing" id="pricing">
    <div class="glow glow-purple"></div>
    <div class="container">
      <div class="section-label reveal">Тарифы</div>
      <h2 class="section-title reveal">Тарифы для каждого бизнеса</h2>
      <p class="section-subtitle reveal">Выберите подходящий формат работы — от старта до полного доминирования на маркетплейсе.</p>

      <div class="pricing-grid">
        <div v-for="p in plans" :key="p.name" class="price-card reveal" :class="{ popular: p.popular }">
          <div class="price-name">{{ p.name }}</div>
          <div class="price-desc">{{ p.desc }}</div>
          <div class="price-amount">{{ p.price }}</div>
          <div class="price-period">/ мес</div>
          <div class="price-features">
            <div v-for="f in p.features" :key="f" class="price-feature">
              <span class="check">&#10003;</span> {{ f }}
            </div>
          </div>
          <a href="#contact" class="btn" :class="p.popular ? 'btn-primary' : 'btn-outline'">Купить</a>
        </div>
      </div>

      <h3 class="section-title reveal" style="margin-top: 80px; font-size: 1.8rem;">Обучение</h3>
      <div class="education-grid">
        <div v-for="e in education" :key="e.title" class="edu-card reveal">
          <h3>{{ e.title }}</h3>
          <p>{{ e.desc }}</p>
          <div class="edu-price">{{ e.price }}</div>
          <a href="#contact" class="btn btn-outline">Подробности</a>
        </div>
      </div>

      <router-link to="/tariffs" class="btn btn-outline reveal" style="margin-top: 36px;">Полный список тарифов &#10132;</router-link>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const plans = [
  {
    name: 'Рост', popular: false, price: '341 414 ₽',
    desc: 'Базовый старт: создание магазина, выбор ниши, карточки и первые шаги по рекламе. Идеален для уверенного запуска.',
    features: ['Регистрация', 'Аналитика', 'Стратегия', 'Карточки', 'Контент', 'Реклама', 'Ведение', 'Менеджер']
  },
  {
    name: 'Продвижение', popular: false, price: '402 843 ₽',
    desc: 'Для действующих продавцов, которым нужно системно расти. Оптимизируем для уверенного масштабирования.',
    features: ['Все из «Рост»', 'Цены', 'Автоответы', 'Документы', 'Прогноз', 'Команда 2+ специалиста']
  },
  {
    name: 'Масштаб', popular: true, price: '441 414 ₽',
    desc: 'Полное сопровождение: мы берем все на себя. От стратегии и рекламы до команды и конкурентов.',
    features: ['Все из «Продвижение»', 'KPI', 'Разведка', 'Авто', 'VIP Клуб', 'Обучение: очно и дистанционно']
  },
  {
    name: 'Доминация', popular: false, price: '602 842 ₽',
    desc: 'Максимум контроля и силы: вы доминируете в нише, опережаете конкурентов с профессиональной командой.',
    features: ['Все из «Масштаб»', 'Полная команда', 'Персональная стратегия', 'Приоритетная поддержка', 'Конкурентный анализ']
  }
]

const education = [
  { title: 'Базовый курс', desc: 'Получаете обучающие материалы, 4 онлайн-сессии с менеджером и чат-поддержку. Всё в удобном темпе, без перегруза. Учитесь — и внедряете.', price: '45 990 ₽' },
  { title: 'Полный курс', desc: 'Личный куратор, 8 онлайн-сессий, практические задания, закрытые материалы, личные встречи и постоянная поддержка. Фокус на результат.', price: '53 990 ₽' },
  { title: 'Командное развитие', desc: 'Обучим вас и до 3 сотрудников: 6 командных сессий, контроль внедрения, чат с куратором, наставничество, бизнес-кейсы.', price: '78 990 ₽' }
]
</script>
