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

      <BaseModal class="text-black">
        <div class="pb-3 mb-3 border-b-2">
          <h1 class="my-2 text-2xl font-bold">About</h1>
          <p>The Local Weather allows you to track the current and future weather of cities of your choosing.</p>
        </div>
        
        <div class="mt-3 mb-3">
          <h3 class="mb-2 text-lg font-medium">How it works</h3>
          <div class="flex flex-row" v-for="rule in rules" :key="rule.id">
            <div class="w-5 h-5 mt-1">
              <component class="w-4 h-4 fill-weather-secondary" :is="rule.icon" />
            </div>
            <span class="ms-2">{{ rule.text }}</span>
          </div>
        </div>
      </BaseModal>
    </nav>
  </header>
</template>

<script setup>
  import { RouterLink } from "vue-router";
  import BaseModal from "./BaseModal.vue";
  import Search from '@/assets/icons/Search.vue';
  import Select from '@/assets/icons/Select.vue';
  import Tracking from '@/assets/icons/Tracking.vue';
  import Remove from "@/assets/icons/Remove.vue";

  const rules = [
    {
      id: 'searching',
      icon: Search,
      text: 'Search for your city by entering the name into the search bar.'
    },
    {
      id: 'selecting',
      icon: Select,
      text: 'Select a city within the results, this will take you to the current weather for your selection.'
    },
    {
      id: 'tracking',
      icon: Tracking,
      text: 'Track the city by clicking on the "+" icon in the top right. This will save the city to view at a later time on the home page.'
    },
    {
      id: 'removing',
      icon: Remove,
      text: 'If you no longer wish to track a city, simply select the city within the home page. At the bottom of the page, there will be an option to delete the city.'
    },
  ];

</script>
