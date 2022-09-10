import { createSSRApp } from 'vue'
import uView from 'uview-plus'
import App from './App.vue'

// modules
import { setupPinia } from '~/modules/pinia'

import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)

  app.use(uView)
  // Configure store
  // https://pinia.vuejs.org/
  setupPinia(app)

  return {
    app,
  }
}
