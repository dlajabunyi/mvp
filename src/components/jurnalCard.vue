<template>
  <div class="q-pa-md jurnalcard flex flex-column">
    <q-card
      class="my-card jurnalcarditem"
      v-for="item in jurnals.objects"
      :key="item.id"
    >
      <router-link :to="`/jurnal/` + item.id">
        <q-img :src="item.metadata.cover.url" :ratio="16 / 9" />
        <q-card-section>
          <h3 class="text-h6 text-weight-bold">{{ item.title }}</h3>
          <p class="text-weight-medium">by {{ item.metadata.authors }}</p>
        </q-card-section>
      </router-link>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jurnals: [],
    };
  },
  mounted() {
    this.getJurnals();
  },
  methods: {
    getJurnals() {
      this.$axios
        .get(
          "https://api.cosmicjs.com/v3/buckets/dlaja-bunyi-cms-production/objects?pretty=true&query=%7B%22type%22:%22jurnal-artikels%22%7D&limit=10&read_key=fCWnVnBxtCwAuYRbqUAGj1MfVvptOs05qBAtfP9He4AjAjrLBW&depth=1&props=slug,title,metadata,id,"
        )
        .then((res) => {
          this.jurnals = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.jurnalcard a {
  text-decoration: none;
  color: #222;
}
.my-card {
  width: 100%;
  max-width: 310px;
  margin: 10px;
}
.jurnalcarditem h3 {
  line-height: 25px;
}
</style>
