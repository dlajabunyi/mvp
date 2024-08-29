<template>
  <div>
    <div class="q-pa-lg row items-start q-gutter-lg eventcard">
      <router-link
        :to="`/event/` + item.id"
        v-for="item in events.objects"
        :key="item.id"
      >
        <q-card class="eventcarditem">
          <q-img :src="item.metadata.foto_poster_event.url" :ratio="1" />
          <q-card-section>
            <h6 class="text-weight-bold">{{ item.title }}</h6>
            <div class="text-subtitle1 text-weight-bold q-pb-md">
              {{ item.metadata.tanggal_event }}
            </div>
          </q-card-section>
        </q-card>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    this.getEvents();
  },
  methods: {
    getEvents() {
      this.$axios
        .get(
          "https://api.cosmicjs.com/v3/buckets/dlaja-bunyi-cms-production/objects?pretty=true&query=%7B%22type%22:%22events%22%7D&limit=10&read_key=fCWnVnBxtCwAuYRbqUAGj1MfVvptOs05qBAtfP9He4AjAjrLBW&depth=1&props=slug,title,metadata,id,"
        )
        .then((res) => {
          this.events = res.data;
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
.eventcard a {
  text-decoration: none;
  color: #222;
}
.eventcarditem {
  width: 100%;
  max-width: 310px;
}
.eventcarditem h6 {
  font-size: 20px;
  line-height: 20px;
  margin: 10px 0;
}
</style>
