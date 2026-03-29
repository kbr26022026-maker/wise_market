<template>
  <div class="tariffs-page">
    <div class="container">
      <a href="/#pricing" class="tariffs-back" @click.prevent="$router.push({ path: '/', hash: '#pricing' })">← На главную</a>

      <h1 class="tariffs-title">Стоимость тарифов</h1>

      <!-- Main tariffs comparison -->
      <div class="tariffs-main-grid">
        <div
          v-for="(tariff, i) in mainTariffs"
          :key="tariff.name"
          class="tariff-card"
          :class="{ 'tariff-card--hit': tariff.hit }"
        >
          <div v-if="tariff.hit" class="tariff-badge">ХИТ</div>
          <h3 class="tariff-name">{{ tariff.name }}</h3>
          <p class="tariff-desc">{{ tariff.desc }}</p>
          <div class="tariff-price">
            <span class="tariff-price-new">{{ tariff.price }} ₽</span>
            <span class="tariff-price-period">/ мес</span>
          </div>
          <div class="tariff-old-price">
            <span class="tariff-old-value">{{ tariff.oldPrice }} ₽</span>
            <span class="tariff-discount">-30%</span>
          </div>
          <div class="tariff-promo">Действует дополнительная скидка 30% до 15.09</div>
          <a href="#contact" class="btn btn-primary tariff-buy" @click.prevent="$router.push('/')">КУПИТЬ</a>

          <div class="tariff-features">
            <div
              v-for="f in tariff.features"
              :key="f.name"
              class="tariff-feature"
              :class="{ 'tariff-feature--no': !f.included }"
            >
              <span class="tariff-feature-icon">{{ f.included ? '✓' : '✕' }}</span>
              <span>{{ f.name }}</span>
            </div>
          </div>
          <button class="tariff-expand-btn" @click="tariff.expanded = !tariff.expanded">
            {{ tariff.expanded ? 'Свернуть список услуг' : 'Развернуть подробный список услуг' }}
          </button>
        </div>
      </div>

      <!-- Quick Start section -->
      <h2 class="tariffs-subtitle">Быстрый старт с минимальными затратами</h2>
      <div class="tariffs-quick-grid">
        <div v-for="card in quickStart" :key="card.title" class="quick-card">
          <h3 class="quick-card-title">{{ card.title }}</h3>
          <p class="quick-card-desc">{{ card.desc }}</p>
          <div class="quick-card-price">{{ card.price }} ₽</div>
        </div>
      </div>

      <!-- Education section -->
      <h2 class="tariffs-subtitle">Начни с уверенности</h2>
      <div class="tariffs-edu-grid">
        <div v-for="card in education" :key="card.title" class="edu-card">
          <h3 class="edu-card-title">{{ card.title }}</h3>
          <p class="edu-card-desc">{{ card.desc }}</p>
          <div class="edu-card-price">{{ card.price }} ₽</div>
        </div>
      </div>

      <div class="tariffs-cta">
        <a href="/" class="btn btn-primary" @click.prevent="$router.push('/')">На главную страницу</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const allFeatures = [
  'Регистрация', 'Аналитика', 'Стратегия', 'Карточки', 'Контент',
  'Ведение', 'Реклама', 'Цены', 'Менеджер и команда 2+ специалиста',
  'Автоответы', 'Авто', 'Документы', 'KPI', 'Разведка',
  'Прогноз', 'Клуб', 'VIP', 'Обучение: очно и дистанционно'
]

const rostIncluded = [
  'Регистрация', 'Аналитика', 'Стратегия', 'Карточки', 'Контент', 'Цены',
  'Обучение: очно и дистанционно'
]
const prodvIncluded = [
  'Регистрация', 'Аналитика', 'Стратегия', 'Карточки', 'Контент',
  'Ведение', 'Реклама', 'Цены', 'Менеджер и команда 2+ специалиста',
  'Обучение: очно и дистанционно'
]
const masshtabIncluded = [
  'Регистрация', 'Аналитика', 'Стратегия', 'Карточки', 'Контент',
  'Ведение', 'Реклама', 'Цены', 'Менеджер и команда 2+ специалиста',
  'Автоответы', 'Авто', 'Документы',
  'Обучение: очно и дистанционно'
]
const domIncluded = [
  'Регистрация', 'Аналитика', 'Стратегия', 'Карточки', 'Контент',
  'Ведение', 'Реклама', 'Цены', 'Менеджер и команда 2+ специалиста',
  'Автоответы', 'Авто', 'Документы', 'KPI', 'Разведка', 'Прогноз', 'Клуб', 'VIP',
  'Обучение: очно и дистанционно'
]

function makeFeatures(included) {
  return allFeatures.map(name => ({ name, included: included.includes(name) }))
}

const mainTariffs = reactive([
  {
    name: 'Рост',
    desc: 'Базовый старт: создание магазина, выбор ниши, карточки и первые шаги по рекламе. Идеален для уверенного запуска',
    price: '238 990',
    oldPrice: '341 414',
    hit: false,
    expanded: false,
    features: makeFeatures(rostIncluded)
  },
  {
    name: 'Продвижение',
    desc: 'Продвижение: для действующих продавцов, которым нужно системно расти. Оптимизируем для уверенного масштабирования',
    price: '281 990',
    oldPrice: '402 843',
    hit: false,
    expanded: false,
    features: makeFeatures(prodvIncluded)
  },
  {
    name: 'Масштаб',
    desc: 'Полное сопровождение: мы берем все на себя. От стратегии и рекламы до команды и конкурентов',
    price: '308 990',
    oldPrice: '441 414',
    hit: true,
    expanded: false,
    features: makeFeatures(masshtabIncluded)
  },
  {
    name: 'Доминация',
    desc: 'Максимум контроля и силы: вы доминируете в нише, опережаете конкурентов с профессиональной командой',
    price: '421 990',
    oldPrice: '602 842',
    hit: false,
    expanded: false,
    features: makeFeatures(domIncluded)
  }
])

const quickStart = reactive([
  {
    title: 'Готовый старт на Ozon: магазин за пару дней',
    desc: 'Идеальный вариант, если вы только планируете начать. Мы оформим все за вас и подскажем, как избежать ошибок на старте. У вас будет готовый магазин с товаром, рекламой и понятной стратегией — остается только запуститься',
    price: '32 990'
  },
  {
    title: 'Быстрый перезапуск: выходим из тупика',
    desc: 'Ваш магазин уже существует, но результата нет? Мы проведем экспресс-аудит. Настроим рекламу, улучшим карточки под поведенческие паттерны, подкорректируем стратегию — и быстро выведем продажи на новый уровень',
    price: '38 990'
  },
  {
    title: 'Помощь в запуске бренда на Ozon: от ниши до роста',
    desc: 'Для тех, кто хочет не просто продавать, а строить узнаваемый бренд на маркетплейсе. Создаем не просто магазин, а сильный продукт: от ниши и упаковки до визуала, УТП и стратегии. Формируем под аудиторию, чтобы запоминали',
    price: '45 990'
  }
])

const education = reactive([
  {
    title: 'Старт с нуля: учитесь, понимайте, внедряйте',
    desc: 'Для тех, кто хочет понять основы маркетплейсов и начать путь самостоятельно. Вы получаете обучающие материалы, 4 онлайн-сессии с менеджером и чат-поддержку. Все в удобном темпе, без перегруза. Учитесь — и внедряете',
    price: '45 990'
  },
  {
    title: 'Полный курс: обучение, практика и поддержка',
    desc: 'Идеален для тех, кто хочет не просто разобраться, а построить бизнес. Личный куратор, 8 онлайн-сессий, практические задания, закрытые материалы, личные встречи и постоянная поддержка. Фокус на результат',
    price: '53 990'
  },
  {
    title: 'Командное развитие: растем вместе с бизнесом',
    desc: 'Подходит тем, кто хочет масштабироваться или уже работает в команде. Обучим вас и до 3 сотрудников: 6 командных сессий, контроль внедрения, чат с куратором, наставничество, доступ к бизнес-кейсам и закрытым материалам',
    price: '78 990'
  }
])
</script>
