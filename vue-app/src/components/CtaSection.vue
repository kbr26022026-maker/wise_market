<template>
  <section class="section cta-section" id="contact">
    <div class="container">
      <div class="cta-card reveal">
        <div class="section-label">Начните сейчас</div>
        <h2>Сомневаетесь, с чего начать?</h2>
        <p>Оставьте заявку — наш специалист свяжется с вами и подберёт оптимальное решение</p>
        <form class="cta-form" @submit.prevent="handleSubmit">
          <input v-model="name" type="text" placeholder="Ваше имя" required>
          <input v-model="phone" type="tel" placeholder="+7 (___) ___-__-__" required>
          <button type="submit" class="btn btn-primary" ref="submitBtn">
            {{ submitted ? 'Отправлено!' : 'Индивидуальные условия ➔' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'
useReveal()

const name = ref('')
const phone = ref('')
const submitted = ref(false)
const submitBtn = ref(null)

function handleSubmit() {
  submitted.value = true
  if (submitBtn.value) {
    submitBtn.value.style.background = 'linear-gradient(135deg, #f0117e, #d4106e)'
  }
  setTimeout(() => {
    submitted.value = false
    if (submitBtn.value) submitBtn.value.style.background = ''
    name.value = ''
    phone.value = ''
  }, 3000)
}
</script>
