<template>
  <q-page>

<div id="map" style="height: 90vh">
    <l-map ref="map" v-model:zoom="zoom" :center="[-2.5, 112.41]" :useGlobalLeaflet="false">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="item.latlng" v-for="item in dataDummy" :key="item.id">
        <l-popup>
          <router-link :to="`/direktori/` + item.slug">
          <div class="row" style="width: 350px;">
            <div class="col-4 q-pr-md">
              <q-img :src="item.thumbnail" /></div>
            <div class="col">
              <div class="text-weight-bold text-subtitle1"> {{  item.title }}</div>
              <div class="text-weight-medium"> {{  item.location }}</div>
          </div>
        </div>
      </router-link>
    </l-popup>
      </l-marker>
    </l-map>
  </div>
  </q-page>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      direktoris: [],
      zoom: 6,
      dataDummy: [
      {
        id: 1,
        latlng: [-0.4654636,100.3932441],
        title: "Ratok",
        location: "Padang Panjang, West Sumatra, Indonesia",
        slug: "66c799f21c372de233c17c74",
        thumbnail: "https://cdn.cosmicjs.com/cf8f89e0-60c1-11ef-a492-5bdc7520fe60-ratok.jpg"
      },
      {
        id: 2,
        latlng: [-1.6463011, 101.9364738],
        title: "Krinok",
        location: "Rantau Pandan, Jambi, Indonesia",
        slug: "66c799211c372de233c17c69",
        thumbnail: "https://cdn.cosmicjs.com/5452ec90-60c1-11ef-a492-5bdc7520fe60-krinok.jpg"
      },
      {
        id: 3,
        latlng: [-6.5562286376953125, 107.76122283935547],
        title: "Beluk",
        location: "Subang, Jawa Barat, Indonesia",
        slug: "66c7989c1c372de233c17c65",
        thumbnail: "https://cdn.cosmicjs.com/03c2afe0-60c1-11ef-a492-5bdc7520fe60-beluk.jpeg"
      },
      {
        id: 4,
        latlng: [-7.3131593, 108.4048938],
        title: "Ronggeng Gunung",
        location: "Ciamis, Jawa Barat, Indonesia",
        slug: "66c797d91c372de233c17c60",
        thumbnail: "https://cdn.cosmicjs.com/7e74dcf0-60c0-11ef-a492-5bdc7520fe60-ronggeng_gunung.jpeg"
      },
      {
        id: 5,
        latlng: [-6.823274612426758, 107.8369369506836],
        title: "Tarawangsa",
        location: "Sumedang, Jawa Barat, Indonesia",
        slug: "66c7973b1c372de233c17c5a",
        thumbnail: "https://cdn.cosmicjs.com/30b0dfa0-60c0-11ef-a492-5bdc7520fe60-gambar-alat-musik-tarawangsa-3.jpg"
      }

      ],
    };
  },
  // mounted() {
  //   this.getDirektoris();
  // },
  // methods: {
  //   getDirektoris() {
  //     this.$axios
  //       .get(
  //         "https://api.cosmicjs.com/v3/buckets/dlaja-bunyi-cms-production/objects?pretty=true&query=%7B%22type%22:%22direktoris%22%7D&limit=10&read_key=fCWnVnBxtCwAuYRbqUAGj1MfVvptOs05qBAtfP9He4AjAjrLBW&depth=1&props=slug,title,metadata,id,"
  //       )
  //       .then((res) => {
  //         this.direktoris = res.data;
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
  // },
};
</script>

<style>
.leaflet-popup-content a {
  text-decoration: none;
  color: #222
}
</style>
