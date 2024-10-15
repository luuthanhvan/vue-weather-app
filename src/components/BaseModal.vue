<template>
  <div class="absolute top-0 left-0 flex justify-center w-full h-screen px-8 bg-black bg-opacity-30">
    <div class="self-start max-w-screen-md p-4 mt-32 bg-white rounded-lg shadow-xl">
      <slot />
      <button class="px-6 py-2 mt-6 mb-2 text-white rounded-full float-end bg-weather-primary hover:bg-weather-secondary">
        Close
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
