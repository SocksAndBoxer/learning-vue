<script setup>
import { ref } from "vue"

const message = ref("Tuto Vue.js")
const sun = ref(true)

</script>

<template>
  <main>
    <h1>{{ message }}</h1>
    <h2 v-if="sun">Jour</h2>
    <h2 v-else>Nuit</h2>
    <button @click="sun = !sun">Toggle</button>
  </main>
</template>

<style scoped>

</style>
