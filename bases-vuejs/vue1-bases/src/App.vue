<script setup>
import { ref } from "vue"

let id = 0
const message = ref("Tuto Vue.js")
const items = ref([
  { 
    text: "truc",
    id: id++
  },
  { 
    text: "machin",
    id: id++
  },
  { 
    text: "bidule",
    id: id++
  }
])
</script>

<template>
  <main>
    <h1>{{ message }}</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.text }}</li>
    </ul>
  </main>
</template>

<style scoped>

</style>
