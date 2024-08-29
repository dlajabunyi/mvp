<template>
  <div class="q-pa-md direktoricard">
    <div class="q-pa-xl" v-for="item in direktoris.objects" :key="item.id">
      <router-link :to="`/direktori/` + item.id">
        <div class="row">
          <div class="col-5">
            <q-img :src="item.metadata.foto_ilustrasi.url" :ratio="16 / 9" />
          </div>
          <div class="col q-pl-lg">
            <div class="text-h4 text-weight-bold">{{ item.title }}</div>
            <div class="text-subtitle1 text-weight-bold q-pb-md">
              {{ item.metadata.lokasi }}
            </div>
            <div
              class="ellipsis-3-lines text-paragraph"
              v-html="item.metadata.deskripsi"
            ></div>
            <q-btn
              :to="`/direktori/` + item.id"
              color="dark"
              class="q-mt-md text-capitalize"
              >Selengkapnya</q-btn
            >
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      direktoris: [],
    };
  },
  mounted() {
    this.getDirektoris();
  },
  methods: {
    getDirektoris() {
      this.$axios
        .get(
          "https://api.cosmicjs.com/v3/buckets/dlaja-bunyi-cms-production/objects?pretty=true&query=%7B%22type%22:%22direktoris%22%7D&limit=10&read_key=fCWnVnBxtCwAuYRbqUAGj1MfVvptOs05qBAtfP9He4AjAjrLBW&depth=1&props=slug,title,metadata,id,"
        )
        .then((res) => {
          this.direktoris = res.data;
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
.direktoricard a {
  text-decoration: none;
  color: #222;
}
</style>
