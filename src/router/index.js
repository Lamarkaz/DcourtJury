import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Layout from '@/components/Layout'
import Latest from '@/components/Latest'
import Clients from '@/components/Clients'
import Dashboard from '@/components/Dashboard'
import CasesArchive from '@/components/CasesArchive'
import Metamask from '@/components/Metamask'
import ClientContract from '@/components/ClientContract'
import Gravatar from 'vue-gravatar';

import { default as Web3} from 'web3';



import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)


//Global Components
Vue.component('Welcome', Welcome);
Vue.component('Layout', Layout);
Vue.component('Latest', Latest);
Vue.component('Clients', Clients);
Vue.component('Dashboard', Dashboard);
Vue.component('CasesArchive', CasesArchive);
Vue.component('Metamask', Metamask);
Vue.component('v-gravatar', Gravatar);
Vue.component('ClientContract', ClientContract);


export default new Router({
  routes: [
    {path: '/', component: Metamask},
    {path: '/latest', component: Latest},
    {path: '/clients', component: Clients},
    {path: '/dashboard', component: Dashboard},
    {path: '/welcome', component: Welcome},
    {path: '/cases-archive', component: CasesArchive},
    {path: '/client-contract', component: ClientContract}
  ]
})


