<template>
  <div class="mobile-nav" :class="{ open }">
    <a href="#" @click.prevent="nav('services')">Услуги</a>
    <a href="#" @click.prevent="nav('pricing')">Тарифы</a>
    <a href="#" @click.prevent="nav('cases')">Кейсы</a>
    <a href="#" @click.prevent="nav('testimonials')">Отзывы</a>
    <a href="#" @click.prevent="nav('faq')">FAQ</a>
    <a href="#" @click.prevent="nav('contact')">Контакты</a>
    <a href="#" class="btn btn-primary" @click.prevent="nav('contact')">Оставить заявку</a>
  </div>
</template>

<script setup>
const props = defineProps({ open: Boolean })
const emit = defineEmits(['close', 'scrollTo'])

function nav(id) {
  emit('scrollTo', id)
  emit('close')
}
</script>
