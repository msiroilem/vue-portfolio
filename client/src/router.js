import VueRouter from 'vue-router'
import Home from './views/Home'
import About from './views/About'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' }
]

export default new VueRouter({ routes, mode: 'history' })
