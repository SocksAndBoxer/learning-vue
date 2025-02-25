<script setup>
import { ref } from "vue"

const message = ref("Modifier le nombre")
const count = ref(0)

function incrementCount() {
  count.value += 1
}
</script>

<template>
  <main>
    <h1>{{ message }}</h1>
    <h2>Nombre = {{ count }}</h2>
    <button @click="incrementCount">Incrémenter la valeur</button>
  </main>
</template>

<style scoped></style>
