<template>
  <div>Jurnal</div>
  <!-- <q-page padding class="container" v-if="jurnalItem.object">
    <h1 class="text-weight-bold text-h4">
      {{ jurnalItem.object.title }}
    </h1>
    <p class="text-h5">{{ jurnalItem.object.metadata.sub_title }}</p>
    <div class="pdf"></div>
  </q-page> -->
</template>

<!-- <script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      jurnalItem: "",
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
        this.jurnalItem = response.data;
      });
  },
};
</script> -->

<style>
.featured-image {
  margin: 50px 0;
}
.content {
  margin-top: 30px;
}
</style>
