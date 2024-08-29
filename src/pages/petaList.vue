<template>
  <q-page class="map">
    <!-- <h1 class="text-weight-bold text-h2">Peta</h1> -->
    <div id="map" style="height: 90vh"></div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

const initialMap = ref(null);

onMounted(() => {
  initialMap.value = L.map("map").setView([-2.5, 112.41], 5);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(initialMap.value);
});
</script>
