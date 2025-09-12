<template>
  <div>
    后台首页  
    <pre>{{ user }}</pre>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// 响应式读取 Vuex 的 user
const user = computed(() => store.state.user)
</script>
