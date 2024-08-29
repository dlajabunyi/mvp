<template>
  <q-page padding class="container" v-if="eventItem.object">
    <h1 class="text-center text-weight-bold text-h2">
      {{ eventItem.object.title }}
    </h1>
    <p class="text-center text-weight-bold text-h5"> Tanggal: {{ eventItem.object.metadata.tanggal_event }} </p>
    <div class="featured-image">
      <q-img :src="eventItem.object.metadata.foto_poster_event.url" />
    </div>
    <div class="content">
      <div v-html="eventItem.object.metadata.teks_event" />
    </div>
  </q-page>
</template>

<script>
import axios from "axios";



export default {
  data() {
    return {
      eventItem: "",
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
        this.eventItem = response.data;
      });
  },
};
</script>

<style>
.featured-image {
  margin: 50px 0;
}
.content {
  margin-top: 30px;
}
</style>
