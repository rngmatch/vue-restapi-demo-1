<script setup>
import { onMounted } from 'vue'
import { useMonsters } from '@/composables/useMonsters'

const { monsters, clearMonsters, loadNextPage } = useMonsters()

onMounted(async () => {
  await loadNextPage()
})
</script>

<template>
  <main class="min-h-screen bg-gradient-to-t from-green-700 to-blue-700"></main>
  <div>
    <div class="container mx-auto grid grid-cols-8 gap-4 py-8">
      <div v-for="monster in monsters" :key="monster.id">
        <router-link :to="`/${monster.id}`">
          <div class="rounded-lg bg-white shadow-lg">
            <img
              class="w-full rounded-t-lg object-cover"
              :src="monster.imageUrl"
            />
            <div class="p-4">
              <h2 class="text-2xl font-semibold text-gray-800">
                {{ monster.name }}
              </h2>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="text-center">
      <button
        class="mx-auto mt-8 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        @click="loadNextPage"
      >
        Load more monsters
      </button>
      <button
        class="mx-auto mt-4 rounded-full bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700"
        @click="clearMonsters"
      >
        Clear monsters
      </button>
    </div>
  </div>
</template>
