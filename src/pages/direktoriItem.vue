<template>
  <q-page padding class="container" v-if="direktoriItem.object">
    <h1 class="text-center text-weight-bold text-h2 q-mb-sm">
      {{ direktoriItem.object.title }}
    </h1>
    <p class="text-center text-h6"><strong>Lokasi:</strong> {{ direktoriItem.object.metadata.lokasi }}</p>
    <vue-sound
      livestream
      show-download
      :title="direktoriItem.object.title"
      details="All Rights Reserved by Dlajabunyi.id &copy; 2024"
      :file="`/audio/` + direktoriItem.object.metadata.audio"
    />
    <div class="featured-image">
      <q-img :src="direktoriItem.object.metadata.foto_ilustrasi.url" />
    </div>
    <div class="content">
      <div v-html="direktoriItem.object.metadata.deskripsi" />
    </div>
  </q-page>
</template>

<script setup>
import { VueSound } from "vue-sound";
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      direktoriItem: "",
    };
  },
  async mounted() {
    axios
      .get(
        "https://api.cosmicjs.com/v3/buckets/dlaja-bunyi-cms-production/objects/" +
          this.$route.params.id +
          "?read_key=fCWnVnBxtCwAuYRbqUAGj1MfVvptOs05qBAtfP9He4AjAjrLBW&depth=1&props=slug,title,metadata,id"
      )
      .then((response) => {
        this.direktoriItem = response.data;
      });
  },
};
</script>

<style>
@import "vue-sound/style.css";

.featured-image {
  margin: 20px 0 50px 0;
}
.content {
  margin-top: 30px;
}

.player {
  background-color: #222 !important;
}
</style>
