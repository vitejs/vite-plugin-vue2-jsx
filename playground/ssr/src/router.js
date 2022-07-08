import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./pages/*.vue')

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
  return {
    path: name === '/home' ? '/' : name,
    component: pages[path] // () => import('./pages/*.vue')
  }
})

export function createRouter () {
  return new Router({
    mode: 'history',
    routes
  })
}
