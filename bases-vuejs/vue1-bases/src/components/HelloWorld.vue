<script setup>
import { ref } from "vue";

const message = ref("Hello from component");
</script>

<template>
  <h1>{{ message }}</h1>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
