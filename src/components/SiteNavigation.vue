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
        <i 
          class="text-xl transition duration-150 ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-slate-200 fa-solid fa-circle-info"
          @click="toggleModal"
        ></i>
        <i class="text-xl transition duration-150 ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-slate-200 fa-solid fa-plus"></i>
      </div>

      <BaseModal :modalActive="modalActive" @closeModal="toggleModal">
        <div class="pb-3 mb-3 border-b-2 text-slate-950">
          <h1 class="mb-1 text-2xl font-bold">About</h1>
          <p>The Local Weather allows you to track the current and future weather of cities of your choosing.</p>
        </div>
        
        <div class="mt-3 mb-3">
          <h3 class="mb-2 text-lg font-medium text-slate-950">How it works</h3>
          <div class="flex items-center mb-2" v-for="rule in rules" :key="rule.id">
            <div class="w-[20px] h-[20px] mt-1">
              <component class="w-[20px] h-[20px] fill-weather-secondary" :is="rule.icon" />
            </div>
            <div class="ms-2">
              <h6 class="font-medium text-weather-secondary">{{ rule.name }}</h6>
              <p class="text-sm font-normal text-gray-600">{{ rule.text }}</p>
            </div>
          </div>
        </div>
      </BaseModal>
    </nav>
  </header>
</template>

<script setup>
  import { RouterLink } from "vue-router";
  import BaseModal from "./BaseModal.vue";
  import * as ruleIcons from '@/assets/icons/index';
  import { ref } from "vue";
  
  const modalActive = ref(false);
  const rules = [
    {
      id: 'searching',
      name: 'Search for your city',
      text: 'Search for your city by entering the name into the search bar.',
      icon: ruleIcons.Search,
    },
    {
      id: 'selecting',
      name: "Select a city",
      text: 'Select a city within the results, this will take you to the current weather for your selection.',
      icon: ruleIcons.Select,
    },
    {
      id: 'tracking',
      name: "Tracking a city",
      text: 'Track a city by clicking on the "+" icon in the top right. This will save the city to view at a later time on the home page.',
      icon: ruleIcons.Tracking,
    },
    {
      id: 'removing',
      name: 'Remove a city',
      text: 'If you no longer wish to track a city, simply select the city within the home page. At the bottom of the page, there will be an option to delete the city.',
      icon: ruleIcons.Remove,
    },
  ];
  const toggleModal = () => {
    modalActive.value = !modalActive.value;
  };
</script>
