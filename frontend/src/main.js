
import "./assets/css/tailwind.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { DefaultLayout } from "./layouts";
import fontAwesome from "@/plugins/font-awesome";
/*import { createPinia } from "pinia";
import { createPersistedStatePlugin } from "pinia-plugin-persistedstate-2";

// Get persistent storage
//const pinia = createPinia();
// 
pinia.use(
  createPersistedStatePlugin({
    serialize: (value) => stringify(value),
    storage: {
      getItem: (key) => {
        return Cookies.get(key);
      },
      setItem: (key, value) => {
        Cookies.set(key, value, { expires: 365, secure: false });
      },
      removeItem: (key) => Cookies.remove(key),
    },
  })
);*/


export const app = createApp(App);

// Font awesome
app.use(fontAwesome);

// Router
app.use(router);

// Layouts
app.component("default-layout", DefaultLayout);

// State Management
//app.use(pinia);

app.mount("#app");
