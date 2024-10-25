<template>
  <q-page>
    <HomeHero />
    <div id="dlj_wrap">
    <HomeFeatured />
    <HomeTentang />
    <HomeProfil />
    <HomeVisi />
    <HomeMisi />
    <!-- <HomeFitur />
    <HomeReinforcement /> -->
  </div>
  </q-page>
</template>

<script setup>
import HomeFeatured from "src/components/home/homeFeatured.vue";
import HomeFitur from "src/components/home/homeFitur.vue";
import HomeHero from "src/components/home/homeHero.vue";
import HomeProfil from "src/components/home/homeProfil.vue";
import HomeReinforcement from "src/components/home/homeReinforcement.vue";
import HomeTentang from "src/components/home/homeTentang.vue";
import HomeVisi from "src/components/home/homeVisi.vue";
import HomeMisi from "src/components/home/homeMisi.vue";


defineOptions({
  name: "BerandaPage",
});
</script>

