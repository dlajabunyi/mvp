<template>
  <q-page>
    <HomeHero />
    <HomeTentang />
    <HomeProfil />
    <HomeFitur />
    <HomeReinforcement />
  </q-page>
</template>

<script setup>
import HomeFitur from "src/components/home/homeFitur.vue";
import HomeHero from "src/components/home/homeHero.vue";
import HomeProfil from "src/components/home/homeProfil.vue";
import HomeReinforcement from "src/components/home/homeReinforcement.vue";
import HomeTentang from "src/components/home/homeTentang.vue";

defineOptions({
  name: "BerandaPage",
});
</script>

<script>
import { createMetaMixin } from "quasar";

const metaData = {
  // sets document title
  title: "Dlajabunyi.id",
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: (title) => `${title} - Official Site`,

  // CSS tags
  link: {
    material: {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
    },
  },
  // <html> attributes
  htmlAttr: {
    "xmlns:cc": "http://creativecommons.org/ns#", // generates <html xmlns:cc="http://creativecommons.org/ns#">
    empty: undefined, // generates <html empty>
  },

  // <body> attributes
  bodyAttr: {
    "action-scope": "xyz", // generates <body action-scope="xyz">
    empty: undefined, // generates <body empty>
  },

  // <noscript> tags
  noscript: {
    default: "This is content for browsers with no JS (or disabled JS)",
  },
};

export default {
  mixins: [createMetaMixin(metaData)],
};
</script>

<style></style>
