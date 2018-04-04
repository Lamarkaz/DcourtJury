import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import '../../node_modules/vuetify/dist/vuetify.min.css'
import Layout from '@/components/Layout'


import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    }
  ]
})


