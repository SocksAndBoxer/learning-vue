<script setup>
import { ref } from "vue"

const message = ref("Modifier le nombre")
const count = ref(0)

function incrementCount() {
  count.value += 1
}

function resetCount() {
  count.value = 0
}
</script>

<template>
  <main>
    <h1>{{ message }}</h1>
    <h2 :id="'id_'+count" :class="count < 10 ? 'blueviolet' : 'red'">Nombre = {{ count }}</h2>
    <button @click="incrementCount">Incrémenter la valeur</button>
    <button :style="count <= 0 && 'display:none;'" @click="resetCount">Réinitialiser la valeur</button>
  </main>
</template>

<style scoped>
  .blueviolet {
    color: blueviolet
  }

  .red {
    color: red;
  }
</style>
