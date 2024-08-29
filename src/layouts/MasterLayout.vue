<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <Header />
      <router-view />
    </q-page-container>
    <GlobalFooter />
  </q-layout>
</template>

<script setup>
import GlobalFooter from "src/components/master/globalFooter.vue";
import Header from "src/components/master/globalHeader.vue";
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}
.content p {
  font-size: 18px;
  line-height: 30px;
}
.q-page.container i {
  font-size: 40px;
}

</style>
