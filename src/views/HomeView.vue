<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <SiteNavigation />
    <main class="container text-white">
      <div class="mt-6">
        <input
          type="text"
          v-model="searchQuery"
          @input="getSearchResults"
          placeholder="Search for a city or state"
          class="w-full px-1 py-2 bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
        />
        <ul
          class="w-full px-1 py-2 mt-2 shadow-md bg-weather-secondary"
          v-if="mapboxSearchResults"
        >
          <p v-if="searchError">
            Sorry, something went wrong, please try again.
          </p>
          <p v-if="!searchError && mapboxSearchResults.length === 0">
            No results match your query, try a different term.
          </p>
          <template v-else>
            <li
              class="py-2 cursor-pointer"
              v-for="searchResult in mapboxSearchResults"
              :key="searchResult.id"
            >
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
</script>
