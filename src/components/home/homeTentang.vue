<template>
  <div class="hometentang">
    <div class="row container">
      <div class="col q-pr-xl">
        <h1 class="text-h4 text-weight-bold">Tentang</h1>
        <p class="text-subtitle1">
          Dlaja Bunyi adalah project pelestarian, pengarsipan, dan dokumentasi
          bunyi, musik, alat musik, serta bunyi lingkungan...
        </p>
        <q-btn size="md" color="dark" class="text-capitalize" to="/tentang"
          >Baca Selengkapnya</q-btn
        >
      </div>
      <div class="col">
        <q-img
          src="https://placehold.co/300x400/000000/FFF?text=Dummy"
          :ratio="16 / 9"
        />
      </div>
    </div>
  </div>
</template>

<style>
.hometentang {
  padding: 100px 0 30px;
  background-color: #dedede;
}
</style>
