import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Layout from '@/components/Layout'
import Latest from '@/components/Latest'
import Clients from '@/components/Clients'
import Dashboard from '@/components/Dashboard'
import CasesExplorer from '@/components/CasesExplorer'
import Metamask from '@/components/Metamask'


import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)


//Global Components
Vue.component('Welcome', Welcome);
Vue.component('Layout', Layout);
Vue.component('Latest', Latest);
Vue.component('Clients', Clients);
Vue.component('Dashboard', Dashboard);
Vue.component('CasesExplorer', CasesExplorer);
Vue.component('Metamask', Metamask);


export default new Router({
  routes: [
    {path: '/', component: Metamask},
    {path: '/latest', component: Latest},
    {path: '/clients', component: Clients},
    {path: '/dashboard', component: Dashboard},
    {path: '/welcome', component: Welcome},
    {path: '/cases-explorer', component: CasesExplorer}
  ]
})


