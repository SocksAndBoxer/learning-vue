<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const productApi = 'https://dummyjson.com/products/search'

type Product = {
  brand: string
  price: number
  title: string
  id: number
}

const products = ref<Product[]>([])
const isLoading = ref(false)
const searchTerm = ref('')

async function fetchProducts(searchTerm: string) {
  const res = await window.fetch(`${productApi}/?q=${searchTerm}`)
  const json = await res.json()
  return json.products as Product[]
}

async function findProducts(searchTerm: string) {
  products.value = await fetchProducts(searchTerm)
  isLoading.value = false
}

watch(searchTerm, () => (isLoading.value = true))

watch(searchTerm, useDebounceFn(findProducts, 500))
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input type="text" class="p-2 border-2 border-gray-dark" v-model="searchTerm" placeholder="Start typing..." />
    <ul v-if="!isLoading" class="list-disc">
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.brand }}: {{ product.price }}
      </li>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>
