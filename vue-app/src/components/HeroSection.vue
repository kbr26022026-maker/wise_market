<template>
  <section class="hero">
    <div class="glow glow-purple"></div>
    <div class="glow glow-green"></div>
    <div class="container hero-inner">
      <div class="hero-content">
        <div class="section-label">Маркетплейс-агентство №1 в России</div>
        <h1 class="hero-title">
          Превратите Ozon в ваш <span class="gradient-text">главный источник дохода</span>
        </h1>
        <p class="hero-desc">
          Мы поможем вам начать зарабатывать с нуля или вывести текущие продажи на новый уровень — на основе аналитики и выработанной стратегии
        </p>
        <div class="hero-btns">
          <a href="#contact" class="btn btn-primary">Начать сейчас &#10132;</a>
          <a href="#pricing" class="btn btn-outline">Смотреть тарифы</a>
        </div>
      </div>
      <div class="hero-visual" ref="visualEl">
        <div v-for="e in emojis" :key="e.id" class="hero-emoji" :style="e.style">{{ e.char }}</div>
        <div class="hero-card">
          <div class="hero-card-header">
            <div>
              <div class="hero-card-label">Ваш потенциальный оборот</div>
              <div class="hero-card-desc">Рост оборота клиента за 12 месяцев</div>
            </div>
            <div class="hero-card-badge" :class="{ show: badgeVisible }">LIVE</div>
          </div>

          <div class="hero-income-row">
            <div class="hero-income-block">
              <div class="hero-income-label">Оборот до</div>
              <div class="hero-income-value hero-income-before" :class="{ show: incomeVisible }">₽ 120 000</div>
            </div>
            <div class="hero-income-arrow" :class="{ show: arrowVisible }">→</div>
            <div class="hero-income-block">
              <div class="hero-income-label">Оборот после</div>
              <div class="hero-income-value hero-income-after" :class="{ show: incomeAfterVisible }">
                ₽ <span ref="incomeCounter">0</span>
              </div>
            </div>
          </div>

          <div class="hero-card-growth" :class="{ show: growthVisible }">
            <span class="hero-growth-arrow">↑</span>
            <span class="hero-growth-percent">+<span ref="percentCounter">0</span>%</span>
            <span class="hero-growth-text">рост оборота</span>
          </div>

          <div class="hero-chart-months">
            <span v-for="m in months" :key="m">{{ m }}</span>
          </div>
          <div class="hero-card-chart" ref="chartEl"></div>

          <div class="hero-chart-caption" :class="{ show: captionVisible }">
            Динамика оборота клиента по месяцам работы с WiseMarket
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const chartEl = ref(null)
const visualEl = ref(null)
const incomeCounter = ref(null)
const percentCounter = ref(null)

const badgeVisible = ref(false)
const incomeVisible = ref(false)
const arrowVisible = ref(false)
const incomeAfterVisible = ref(false)
const growthVisible = ref(false)
const captionVisible = ref(false)

const emojis = reactive([])
const emojiChars = ['🤑', '💰', '💵', '🔥', '🚀', '📈', '💎', '🎉', '😍', '💸']
let emojiId = 0

const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
const chartValues = [12, 18, 22, 32, 38, 48, 52, 62, 68, 78, 88, 98]

function animateNumber(el, target, duration, prefix) {
  let start = 0
  let startTime = null
  function step(ts) {
    if (!startTime) startTime = ts
    const progress = Math.min((ts - startTime) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 4)
    const current = Math.floor(eased * target)
    el.textContent = prefix ? current.toLocaleString('ru-RU') : current
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

function spawnEmoji() {
  const char = emojiChars[Math.floor(Math.random() * emojiChars.length)]
  const side = Math.floor(Math.random() * 4) // 0=top, 1=right, 2=bottom, 3=left
  let x, y
  if (side === 0) { x = Math.random() * 100; y = -10 }
  else if (side === 1) { x = 105; y = Math.random() * 100 }
  else if (side === 2) { x = Math.random() * 100; y = 105 }
  else { x = -10; y = Math.random() * 100 }

  const tx = (Math.random() - 0.5) * 60
  const ty = -40 - Math.random() * 80
  const dur = 2 + Math.random() * 1.5
  const delay = Math.random() * 0.3
  const size = 1.2 + Math.random() * 1

  const id = emojiId++
  emojis.push({
    id,
    char,
    style: {
      left: x + '%',
      top: y + '%',
      fontSize: size + 'rem',
      '--tx': tx + 'px',
      '--ty': ty + 'px',
      animationDuration: dur + 's',
      animationDelay: delay + 's'
    }
  })
  setTimeout(() => {
    const idx = emojis.findIndex(e => e.id === id)
    if (idx !== -1) emojis.splice(idx, 1)
  }, (dur + delay) * 1000 + 200)
}

function spawnBurst(count, interval) {
  for (let i = 0; i < count; i++) {
    setTimeout(spawnEmoji, i * interval)
  }
}

onMounted(() => {
  if (!chartEl.value) return

  // Phase 1: badge appears
  setTimeout(() => { badgeVisible.value = true }, 400)

  // Phase 2: "Before" income fades in
  setTimeout(() => { incomeVisible.value = true }, 800)

  // Phase 3: chart bars grow one by one (slow, dramatic)
  chartValues.forEach((v, i) => {
    const bar = document.createElement('div')
    bar.className = 'chart-bar'
    bar.style.height = '0%'
    chartEl.value.appendChild(bar)
    setTimeout(() => { bar.style.height = v + '%' }, 1400 + i * 250)
  })

  // Phase 4: arrow appears mid-chart
  setTimeout(() => { arrowVisible.value = true }, 2800)

  // Phase 5: "After" income with counting animation
  setTimeout(() => {
    incomeAfterVisible.value = true
    if (incomeCounter.value) {
      animateNumber(incomeCounter.value, 1176000, 2200, true)
    }
    spawnBurst(4, 300)
  }, 3200)

  // Phase 6: growth badge + more emojis
  setTimeout(() => {
    growthVisible.value = true
    if (percentCounter.value) {
      animateNumber(percentCounter.value, 880, 1800, false)
    }
    spawnBurst(6, 200)
  }, 4200)

  // Phase 7: caption + final burst
  setTimeout(() => {
    captionVisible.value = true
    spawnBurst(8, 150)
  }, 5200)
})
</script>
