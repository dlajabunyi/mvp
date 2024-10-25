<template>
  <q-page padding id="dlj_direktori">
    <div id="dlj_green"><q-img src="/img/green.webp" /></div>
    <div  class="container">
    <h1 class="text-weight-bold text-h2 text-center">Direktori</h1>
    <DirektoriCard />
  </div>
  </q-page>
</template>

<script setup>
import DirektoriCard from "src/components/direktoriCard.vue";
</script>
