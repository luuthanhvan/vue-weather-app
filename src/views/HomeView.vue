<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <SiteNavigation />
    <main class="container text-white">
      <div class="mt-6">
        <div class="relative block">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <component class="w-[16px] h-[16px] fill-gray-300" :is="Search" />
          </span>
          <input
            type="text"
            v-model="searchQuery"
            @input="getSearchResults"
            placeholder="Search for a city or state"
            class="block placeholder:italic w-full py-2 pl-9 pr-3 bg-weather-secondary rounded-lg focus:border focus:border-weather-active focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
          />
          <span
            @click="clearSearchQuery"
            class="absolute end-2.5 bottom-2.5 cursor-pointer hover:bg-weather-ternary hover:rounded-full"
          >
            <component class="w-[22px] h-[22px] fill-gray-300" :is="Clear" />
          </span>
        </div>
        <ul
          class="w-full py-2 mt-2 rounded-lg shadow-md bg-weather-secondary"
          v-if="mapboxSearchResults"
        >
          <p class="px-2 italic align-middle" v-if="searchError">
            Sorry, something went wrong, please try again.
          </p>
          <p class="px-2 italic text-center" v-if="!searchError && mapboxSearchResults.length === 0">
            No results match your query, try a different term.
          </p>
          <template v-else>
            <li
              class="flex items-center px-2 py-2 cursor-pointer hover:bg-weather-ternary"
              v-for="searchResult in mapboxSearchResults"
              :key="searchResult.id"
            >
              <component class="w-[16px] h-[16px] fill-gray-300 mr-2 " :is="Search" />
              {{ searchResult.place_name }}
            </li>
          </template>
        </ul>
      </div>
    </main>
  </div>
</template>

<script setup>
import SiteNavigation from "@/components/SiteNavigation.vue";
import axios from "axios";
import { ref } from "vue";
import { Search, Clear } from "@/assets/icons/index";

const mapboxAPIKey =
  "pk.eyJ1Ijoiam9obmtvbWFybmlja2kiLCJhIjoiY2t5NjFzODZvMHJkaDJ1bWx6OGVieGxreSJ9.IpojdT3U3NENknF6_WhR2Q";
const searchQuery = ref("");
const mapboxSearchResults = ref(null);
const queryTimeout = ref(null);
const searchError = ref(false);

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
        );
        mapboxSearchResults.value = result.data.features;
      } catch {
        searchError.value = true;
      }
      return;
    }
    mapboxSearchResults.value = null;
  }, 300);
};
const resetData = () => {
  searchQuery.value = "";
  searchError.value = false;
  mapboxSearchResults.value = null;
  queryTimeout.value = null;
};
const clearSearchQuery = () => {
  if (searchQuery.value !== "") {
    resetData();
  }
};
</script>
