import { createApp } from './main'

const { app, router } = createApp()

// wait until router is ready before mounting to ensure hydration match
router.onReady(() => {
  app.$mount('#app')
})
