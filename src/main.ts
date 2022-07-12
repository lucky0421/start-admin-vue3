import { createApp } from "vue";
import App from "./App.vue";

function startApp() {
  const app = createApp(App);

  app.mount("#app");
}

startApp();
