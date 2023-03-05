<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import { useMonsters } from '@/composables/useMonsters'

const route = useRoute()
const { fetchMonster, currentMonster } = useMonsters()

onMounted(async () => {
  await fetchMonster(route.params.id)
})

onUnmounted(() => {
  currentMonster.value = null
})
</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-r from-fuchsia-900 to-blue-700 py-8 text-white"
  >
    <div
      v-if="currentMonster"
      class="flex flex-col items-center justify-center gap-6"
    >
      <img :src="currentMonster.imageUrl" :alt="currentMonster.name" />
      <h1 class="text-white-800 text-6xl font-bold">
        Hi, I'm {{ currentMonster.name }}
      </h1>
      <pre>{{ currentMonster }}</pre>
    </div>
  </main>
</template>
