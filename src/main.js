import { createApp } from 'vue'

import App from './App.vue'
import router from "./router"

const app = createApp(App);
app.use(router);

// createApp(App).mount('#app')
router.isReady().then(() => {
  app.mount("#vue-warmup-card");
});
