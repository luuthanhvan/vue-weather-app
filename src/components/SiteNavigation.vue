<template>
  <header class="sticky top-0 shadow-lg bg-weather-primary">
    <nav class="container flex flex-col items-center justify-between py-6 text-white sm:flex-row">
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3">
          <i class="text-xl fa-solid fa-sun"></i>
          <p class="text-2xl">The Local Weather</p>
        </div>
      </RouterLink>
      <div class="flex gap-3">
        <i class="text-xl duration-150 cursor-pointer hover:text-weather-secondary fa-solid fa-circle-info"></i>
        <i class="text-xl duration-150 cursor-pointer hover:text-weather-secondary fa-solid fa-plus"></i>
      </div>
    </nav>
  </header>
</template>

<script setup>
  import { RouterLink } from "vue-router";
</script>
