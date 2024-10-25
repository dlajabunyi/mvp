<template>
  <q-header class="dlj_mainnav text-black">
    <div class="row container">
      <q-toolbar class="col">
        <q-toolbar-title>
          <q-btn flat to="/" class="text-uppercase text-center">
            <h1 class="text-h6">
              <!-- <q-img src="/public/logo.jpg" width="50px"/> -->
              dlajabunyi
            </h1>
          </q-btn>

          <div class="desktop-only float-right q-pt-md">
            <q-tabs
              indicator-color="transparent"
              dense
              inline-label
              class="text-black"
            >
              <!-- <q-route-tab
                exact
                class="text-capitalize"
                label="Beranda"
                to="/"
              /> -->
              <q-route-tab
                exact
                class="text-capitalize"
                label="Direktori"
                to="/direktori"
              />
              <q-route-tab
                exact
                class="text-capitalize"
                label="Jurnal/ Artikel"
                to="/jurnal"
              />
              <!-- <q-route-tab
                exact
                class="text-capitalize"
                label="Event"
                to="/event"
              /> -->
              <q-route-tab
                exact
                class="text-capitalize"
                label="Tentang Kami"
                to="/tentang"
              />
              <q-route-tab
                exact
                class="text-capitalize"
                label="Dukung"
                to="/"
              />
              <q-route-tab
                exact
                class="text-capitalize"
                label="Cari"
                to="/"
              />
              <!-- <q-route-tab exact class="text-capitalize" label="About" to="/" /> -->
            </q-tabs>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </div>
  </q-header>
</template>
