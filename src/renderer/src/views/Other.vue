<template>
  <main>
    <el-button @click="goHome">home</el-button>
    <span>返回home</span>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>
