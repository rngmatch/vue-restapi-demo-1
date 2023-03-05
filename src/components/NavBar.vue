<script setup></script>

<template>
  <nav>
    <div class="wrapper">
      <p>Monster Hunter API Monster List</p>
      <div>
        <button href="#" class="menu" @click="fetchMonster">
          Monster List
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
nav {
  @apply flex h-20 bg-gradient-to-t from-blue-700 to-slate-700;
  .wrapper {
    @apply container mx-auto flex w-full items-center justify-between text-3xl font-extrabold text-slate-900;
  }
}
.menu {
  @apply flex gap-2 rounded-md bg-green-500 px-4 py-2 text-red-50 hover:bg-red-700 hover:font-bold hover:text-slate-900;
  div {
    @apply py-2;
  }
}
</style>
