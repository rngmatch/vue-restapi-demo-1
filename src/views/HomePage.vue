<script setup>
import { onMounted } from 'vue'
import BaseCard from '@/components/BaseCard.vue'
import useMonsters from '@/composables/useMonsters'

const { monsters, fetchMonsters, firstLoad } = useMonsters()

onMounted(async () => {
  if (firstLoad.value) {
    await fetchMonsters()
    firstLoad.value = false
  }
})
</script>

<template>
  <button
    title="Load Monsters"
    class="z-90 fixed bottom-8 right-8 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-4xl text-white drop-shadow-lg duration-300 hover:scale-110 hover:bg-green-700 hover:drop-shadow-2xl"
    @click="fetchMonsters"
  >
    🚀
  </button>
  <main class="min-h-screen bg-gradient-to-t from-green-500 to-blue-700">
    <div class="container mx-auto grid grid-cols-8 gap-4 py-8">
      <BaseCard
        v-for="monster in monsters"
        :key="monster._id"
        :monster="monster"
      />
    </div>
  </main>
</template>
