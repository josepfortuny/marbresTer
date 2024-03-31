import { createRouter, createWebHistory } from "vue-router";
import IndexView from "@/views/index.vue";
import ServiciosView from "@/views/services.vue";
import ContactoView from "@/views/contact.vue";
import PoliticasPrivacidadView from "@/views/privacyPolitics.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: IndexView,
    },
    {
      path: "/cat",
      name: "casa",
      component: IndexView,
    },
    {
      path: "/servicios",
      name: "servicios",
      component: ServiciosView,
    },
    {
      path: "/cat/servicios",
      name: "serveis",
      component: ServiciosView,
    },
    {
      path: "/contactar",
      name: "contacto",
      component: ContactoView,
    },
    {
      path: "/cat/contactar",
      name: "contactar",
      component: ContactoView,
    },
    {
      path: "/politicadeprivacidad",
      name: "politicadeprivacidad",
      component: PoliticasPrivacidadView,
    }
  ],
});

export default router;
