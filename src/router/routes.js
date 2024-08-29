const routes = [
  {
    path: "/",
    component: () => import("layouts/MasterLayout.vue"),
    children: [{ path: "", component: () => import("pages/BerandaPage.vue") }],
  },
  {
    path: "/tentang",
    component: () => import("layouts/MasterLayout.vue"),
    children: [{ path: "", component: () => import("pages/tentangKami.vue") }],
  },
  {
    path: "/profil",
    component: () => import("layouts/MasterLayout.vue"),
    children: [{ path: "", component: () => import("pages/profilKami.vue") }],
  },
  {
    path: "/kontak",
    component: () => import("layouts/MasterLayout.vue"),
    children: [{ path: "", component: () => import("pages/hubungiKami.vue") }],
  },
  {
    path: "/hakcipta",
    component: () => import("layouts/MasterLayout.vue"),
    children: [{ path: "", component: () => import("pages/hakCipta.vue") }],
  },
  {
    path: "/disclaimer",
    component: () => import("layouts/MasterLayout.vue"),
    children: [
      { path: "", component: () => import("pages/disclaimerItem.vue") },
    ],
  },
  {
    path: "/ketentuan",
    component: () => import("layouts/MasterLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ketentuanLayanan.vue") },
    ],
  },

  {
    path: "/jurnal",
    component: () => import("layouts/MasterLayout.vue"),
    children: [
      { path: "", component: () => import("pages/jurnalArtikel.vue") },
      { path: ":id", component: () => import("pages/jurnalItem.vue") },
    ],
  },

  {
    path: "/event",
    component: () => import("layouts/MasterLayout.vue"),
    children: [
      { path: "", component: () => import("pages/eventList.vue") },
      { path: ":id", component: () => import("pages/eventItem.vue") },
    ],
  },

  {
    path: "/peta",
    component: () => import("layouts/MasterLayout.vue"),
    children: [{ path: "", component: () => import("pages/petaPage.vue") }],
  },
  {
    path: "/direktori",
    component: () => import("layouts/MasterLayout.vue"),
    children: [
      { path: "", component: () => import("pages/direktoriList.vue") },
      { path: ":id", component: () => import("pages/direktoriItem.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
