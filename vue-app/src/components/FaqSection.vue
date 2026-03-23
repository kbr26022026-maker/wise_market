<template>
  <section class="section faq" id="faq">
    <div class="container">
      <div class="section-label reveal" style="text-align:center;display:block;">FAQ</div>
      <h2 class="section-title reveal" style="text-align:center;">Часто задаваемые вопросы</h2>
      <div class="faq-list reveal">
        <div v-for="(item, i) in items" :key="i" class="faq-item" :class="{ active: activeIndex === i }">
          <div class="faq-question" @click="toggle(i)">
            <span>{{ item.q }}</span>
            <div class="faq-icon">+</div>
          </div>
          <div class="faq-answer" ref="answerEls" :style="{ maxHeight: activeIndex === i ? answerHeights[i] + 'px' : '0px' }">
            <div class="faq-answer-inner">{{ item.a }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { useReveal } from '../composables/useReveal'
useReveal()

const items = [
  { q: 'Я новичок, не знаю с чего начать. Вы поможете?', a: 'Абсолютно! Мы сопровождаем как новичков, так и опытных продавцов. Ваш персональный менеджер поможет с выбором подходящего формата, подскажет, с чего начать, и составит для вас подробную дорожную карту: от подбора товара до запуска магазина и выхода на стабильные продажи. Вы не останетесь один — каждый шаг мы проходим вместе.' },
  { q: 'Все ли официально? Есть ли гарантия и договор?', a: 'Да, мы работаем полностью официально. Заключаем договор, предоставляем все необходимые документы. Вы защищены юридически на каждом этапе сотрудничества.' },
  { q: 'У вас можно купить «магазин под ключ»?', a: 'Да! Мы создаём магазин «под ключ» — от регистрации и выбора ниши до настройки карточек, рекламы и первых продаж. Вы получаете полностью готовый к работе бизнес на Ozon.' },
  { q: 'У меня уже есть магазин. Что вы можете предложить?', a: 'Мы проведём аудит вашего магазина, выявим точки роста, оптимизируем карточки товаров, настроим рекламные кампании и поможем масштабировать продажи. Наша цель — вывести ваш бизнес на новый уровень дохода.' },
  { q: 'Какие услуги дополнительно входят в тариф?', a: 'В каждый тариф включены базовые услуги: аналитика, стратегия, контент и реклама. Расширенные тарифы включают автоответы, KPI-контроль, конкурентную разведку, VIP-клуб и индивидуальное обучение. Подробности — на странице тарифов.' }
]

const activeIndex = ref(-1)
const answerEls = ref([])
const answerHeights = ref([])

function toggle(i) {
  if (activeIndex.value === i) {
    activeIndex.value = -1
  } else {
    activeIndex.value = i
    nextTick(() => {
      if (answerEls.value[i]) {
        answerHeights.value[i] = answerEls.value[i].scrollHeight
      }
    })
  }
}

onMounted(() => {
  answerHeights.value = items.map(() => 0)
})
</script>
