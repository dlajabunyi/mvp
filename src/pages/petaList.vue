<template>
  <q-page>
    <div>
      Map
    </div>
    <!-- <div class="openstreetmap"> -->
      <!-- <l-map style="height: 550px" :zoom="zoom" :center="center" @click="onMapClick">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker v-for="(location, index) in locations" :lat-lng="location.position" v-bind:key="index">
          <l-popup :content="location.name" ></l-popup>
        </l-marker>
        <l-marker ref="marker" :lat-lng="[newLt, newLng]" :icon="icon">
          <l-popup ref="popup" :content="newLoc" :options="{ autoClose: false, closeOnClick: false }"></l-popup>
        </l-marker>
      </l-map> -->
    <!-- </div> -->
    <!-- <div id="map" style="height: 90vh"></div> -->
  </q-page>
</template>



<!--
<script setup>
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import "leaflet.markercluster";
import { addressPoints } from '../../public/markerDemo';
import icon from '../../public/icons/icon.png';
import markerShadow from '../../public/icons/marker-shadow.png';

const initialMap = ref(null);
const myIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 30],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: markerShadow,
    shadowSize: [60, 30],
    shadowAnchor: [22, 94]
});

onMounted(()=> {
    initialMap.value = L.map('map', {zoomControl: true,zoom:1,zoomAnimation:false,fadeAnimation:true,markerZoomAnimation:true}).setView([-2.5, 112.41], 6);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(initialMap.value);

    L.marker([24.3746, 88.6004], {icon: myIcon}).addTo(initialMap.value);
    L.marker([22.3752, 91.8349], {icon: myIcon}).addTo(initialMap.value);

    const markers = L.markerClusterGroup();

    addressPoints.forEach((element, index) => {
        const each_marker = new L.marker(
            [element.latitude, element.longitude], {icon: myIcon})
            .bindPopup(`<strong> Hello Bangladesh! </strong> <br> I am a popup number ${index}`);
        markers.addLayer(each_marker);
    });

    initialMap.value.addLayer(markers);

});


// onMounted(() => {
//   initialMap.value = L.map("map").setView([-2.5, 112.41], 5);
//   L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     maxZoom: 19,
//     attribution:
//       '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//   }).addTo(initialMap.value);

//   L.marker([24.3746, 88.6004], {icon: myIcon}).addTo(initialMap.value);
//     L.marker([22.3752, 91.8349], {icon: myIcon}).addTo(initialMap.value);

//     const markers = L.markerClusterGroup();

//     addressPoints.forEach((element, index) => {
//         const each_marker = new L.marker(
//             [element.latitude, element.longitude], {icon: myIcon})
//             .bindPopup(`<strong> Hello Bangladesh! </strong> <br> I am a popup number ${index}`);
//         markers.addLayer(each_marker);
//     });

//     initialMap.value.addLayer(markers);


// });
</script> -->
