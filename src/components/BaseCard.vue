<script setup>
const props = defineProps({
  monster: {
    type: Object,
    default: () => ({
      id: -1,
      name: 'Unknown',
      imageUrl: 'https://via.placeholder.com/150',
    }),
  },
})
</script>

<template>
  <RouterLink
    :to="`/monster/${props.monster.id}`"
    class="rounded-lg bg-white shadow-lg"
  >
    <img
      class="w-full rounded-t-lg object-cover"
      :src="props.monster.imageUrl"
    />
    <div class="p-4">
      <h2 class="text-2xl font-semibold text-gray-800">
        {{ props.monster.name }}
      </h2>
    </div>
  </RouterLink>
</template>
