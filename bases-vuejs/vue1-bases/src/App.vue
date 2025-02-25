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
const newItem = ref("")

function addItem() {
 if (newItem.value.length === 0) return

//  items.value = [...items.value, { text: newItem.value, id: id++ } ]
 items.value.push({ text: newItem.value, id: id++ })
 newItem.value = '' 
}

function removeItem(itemToDelete) {  
  items.value = items.value.filter((item) => item !== itemToDelete)
}
</script>

<template>
  <main>
    <h1>{{ message }}</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
        <button @click="removeItem(item)">X</button>
      </li>
    </ul>
    <input type="text" v-model="newItem">
    <button v-show="newItem.length > 0" @click="addItem">Ajouter à la liste</button>
  </main>
</template>

<style scoped>

</style>
