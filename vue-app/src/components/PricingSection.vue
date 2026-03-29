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
          <div class="price-card-footer">
            <a href="#contact" class="btn" :class="p.popular ? 'btn-primary' : 'btn-outline'">Купить</a>
            <button class="who-toggle who-toggle--center" @click="allExpanded = !allExpanded">
              Кому подойдет <span class="who-arrow" :class="{ rotated: allExpanded }"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></span>
            </button>
            <div class="who-collapse" :class="{ open: allExpanded }">
              <div class="who-list">
                <div v-for="item in p.audience" :key="item" class="who-item">
                  <span class="who-dot"></span>
                  <span>{{ item }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <router-link to="/tariffs" class="btn btn-outline reveal" style="margin-top: 36px;">Полный список тарифов &#10132;</router-link>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { useReveal } from '../composables/useReveal'
useReveal()

const allExpanded = ref(false)

watch(allExpanded, (val) => {
  const lists = document.querySelectorAll('.who-list')
  if (val) {
    const first = document.querySelector('.who-collapse')
    if (!first) return
    const onEnd = () => {
      first.removeEventListener('transitionend', onEnd)
      let maxH = 0
      lists.forEach(el => { maxH = Math.max(maxH, el.scrollHeight) })
      lists.forEach(el => { el.style.minHeight = maxH + 'px' })
    }
    first.addEventListener('transitionend', onEnd)
  } else {
    lists.forEach(el => { el.style.minHeight = '' })
  }
})

const plans = reactive([
  {
    name: 'Рост', popular: false, price: '341 414 ₽', expanded: false,
    desc: 'Базовый старт: создание магазина, выбор ниши, карточки и первые шаги по рекламе. Идеален для уверенного запуска.',
    features: ['Регистрация', 'Аналитика', 'Стратегия', 'Карточки', 'Контент', 'Реклама', 'Ведение', 'Менеджер'],
    audience: ['Новички, которые только планируют выйти на Ozon', 'Предприниматели, запускающие первый продукт или категорию', 'Селлеры без опыта анализа ниши и выбора товара', 'Пользователи, которым нужен уверенный старт без лишних рисков']
  },
  {
    name: 'Продвижение', popular: false, price: '402 843 ₽', expanded: false,
    desc: 'Для действующих продавцов, которым нужно системно расти. Оптимизируем для уверенного масштабирования.',
    features: ['Все из «Рост»', 'Цены', 'Автоответы', 'Документы', 'Прогноз', 'Команда 2+ специалиста'],
    audience: ['Селлеры с активной рекламой и нестабильными результатами', 'Предприниматели с высоким ДРР и неэффективными расходами', 'Бизнесы, которым важно увеличить прибыль без роста бюджета', 'Пользователи, которым нужна системная работа с рекламой']
  },
  {
    name: 'Масштаб', popular: true, price: '441 414 ₽', expanded: false,
    desc: 'Полное сопровождение: мы берем все на себя. От стратегии и рекламы до команды и конкурентов.',
    features: ['Все из «Продвижение»', 'KPI', 'Разведка', 'Авто', 'VIP Клуб', 'Обучение: очно и дистанционно'],
    audience: ['Селлеры со стабильными продажами без системного роста', 'Предприниматели, стремящиеся выстроить управляемый бизнес', 'Бизнесы с потенциалом масштабирования', 'Пользователи, ориентированные на рост через аналитику и оптимизацию']
  },
  {
    name: 'Доминация', popular: false, price: '602 842 ₽', expanded: false,
    desc: 'Максимум контроля и силы: вы доминируете в нише, опережаете конкурентов с профессиональной командой.',
    features: ['Все из «Масштаб»', 'Полная команда', 'Персональная стратегия', 'Приоритетная поддержка', 'Конкурентный анализ'],
    audience: ['Селлеры с текущим оборотом, готовые к масштабированию', 'Бизнесы с командой и распределёнными процессами', 'Предприниматели, ориентированные на кратный рост', 'Пользователи, которым нужна максимальная автоматизация и контроль']
  }
])


</script>
