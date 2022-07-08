<template>
  <div>
    <h1>Home</h1>
    <p>
      <img src="../assets/logo.png" alt="logo" />
    </p>
    <button @click="state.count++">count is: {{ state.count }}</button>
    <Foo />
    <p class="inter">this will be styled with a font-face</p>
    <p class="import-meta-url">{{ state.url }}</p>
    <p class="protocol">protocol: {{ state.protocol }}</p>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Foo } from '../components/Foo'
const url = import.meta.env.SSR
  ? import.meta.url
  : document.querySelector('.import-meta-url')?.textContent
const protocol = url ? new URL(url).protocol : undefined

const state = reactive({
  count: 0,
  protocol,
  url
})
</script>
