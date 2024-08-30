<template>
    <div class="q-pa-md direktoricard">
        <template v-if="direktoris.objects">
            <div class="q-pa-xl" v-for="item in direktoris.objects" :key="item.id">
              <router-link :to="`/direktori/` + item.id">
                <div class="row">
                  <div class="col-5 dlj_imggrey">
                    <q-img :src="item.metadata.foto_ilustrasi.url" :ratio="16 / 9" class="shadow-5"/>
                  </div>
                  <div class="col q-pl-xl">
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
          </template>
          <template v-if="!direktoris.objects">
              <div class="q-pa-xl">
                  <div class="row q-mb-xl">
                      <div class="col-5">
                          <q-skeleton width="100%" height="250px" />
                      </div>
                      <div class="col q-pl-lg">
                          <q-skeleton height="50px" class="q-mb-md" />
                          <q-skeleton bordered class="q-mb-sm" />
                          <q-skeleton bordered class="q-mb-sm" />
                          <q-skeleton bordered />
                          <q-skeleton height="80px" class="q-mt-md" />
                      </div>
                  </div>
                  <div class="row q-mb-xl">
                      <div class="col-5">
                          <q-skeleton width="100%" height="250px" />
                      </div>
                      <div class="col q-pl-lg">
                          <q-skeleton height="50px" class="q-mb-md" />
                          <q-skeleton bordered class="q-mb-sm" />
                          <q-skeleton bordered class="q-mb-sm" />
                          <q-skeleton bordered />
                          <q-skeleton height="80px" class="q-mt-md" />
                      </div>
                  </div>
                  <div class="row q-mb-xl">
                      <div class="col-5">
                          <q-skeleton width="100%" height="250px" />
                      </div>
                      <div class="col q-pl-lg">
                          <q-skeleton height="50px" class="q-mb-md" />
                          <q-skeleton bordered class="q-mb-sm" />
                          <q-skeleton bordered class="q-mb-sm" />
                          <q-skeleton bordered />
                          <q-skeleton height="80px" class="q-mt-md" />
                      </div>
                  </div>
                  <div class="row q-mb-xl">
                      <div class="col-5">
                          <q-skeleton width="100%" height="250px" />
                      </div>
                      <div class="col q-pl-lg">
                          <q-skeleton height="50px" class="q-mb-md" />
                          <q-skeleton bordered class="q-mb-sm" />
                          <q-skeleton bordered class="q-mb-sm" />
                          <q-skeleton bordered />
                          <q-skeleton height="80px" class="q-mt-md" />
                      </div>
                  </div>
              </div>
          </template>
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
