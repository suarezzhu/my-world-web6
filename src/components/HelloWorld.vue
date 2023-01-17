<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <el-button>hello2</el-button>

  <h1>{{ msg }}</h1>

  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped lang="less">
.text {
  color: red;
}
</style>
