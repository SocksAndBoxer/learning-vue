<script setup>
import { ref } from "vue"

const message = ref("Tuto Vue.js")
const inputMessage = ref("Texte exemple")

function submitInputMessage() {
  console.log(inputMessage.value);
}

</script>

<template>
  <main>
    <h1>{{ message }}</h1>
    <label class="input-message" for="toto">
      Saisir un texte
      <input v-model="inputMessage" type="text" name="toto">
    </label>
    <button @click="submitInputMessage">Valier</button>
    <p>{{ inputMessage }}</p>
  </main>
</template>

<style scoped>
.input-message {
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

</style>
