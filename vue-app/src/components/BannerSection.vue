<template>
  <section class="section" style="padding: 60px 0;">
    <div class="container">
      <div class="checklist-banner reveal" style="background: linear-gradient(135deg, rgba(0,102,255,.1), rgba(240,17,126,.08)); border-color: rgba(0,102,255,.2);">
        <div>
          <h3>&#128640; Хотите, чтобы мы сделали ваш товар бестселлером?</h3>
          <p>Наши эксперты знают, как вывести его в топ и обеспечить вам высокий доход.</p>
        </div>
        <a href="#contact" class="btn btn-primary">Хочу сейчас &#10132;</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()
</script>
