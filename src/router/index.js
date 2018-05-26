import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Layout from '@/components/Layout'
import Latest from '@/components/Latest'
import Clients from '@/components/Clients'
import Dashboard from '@/components/Dashboard'
import CasesArchive from '@/components/CasesArchive'
import ClientContract from '@/components/ClientContract'
import CaseTrial from '@/components/CaseTrial'
import CaseUnlock from '@/components/CaseUnlock'
import CaseVerdict from '@/components/CaseVerdict'
import CaseVote from '@/components/CaseVote'
import Case from '@/components/Case'
import Gravatar from 'vue-gravatar'
import colors from 'vuetify/es5/util/colors'
import VueMoment from 'vue-moment'
import ActivityMonitor from '@/components/ActivityMonitor'
import Trend from 'vuetrend'
import VueCharts from 'vue-chartjs'
import { default as Web3} from 'web3'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify, {
  theme: {
    primary: '#4527a0',
  }
})
Vue.use(VueMoment)
Vue.use(Trend)



//Global Components
Vue.component('Welcome', Welcome);
Vue.component('Layout', Layout);
Vue.component('Latest', Latest);
Vue.component('Clients', Clients);
Vue.component('Dashboard', Dashboard);
Vue.component('CasesArchive', CasesArchive);
Vue.component('v-gravatar', Gravatar);
Vue.component('ClientContract', ClientContract);
Vue.component('Case', Case);
Vue.component('CaseVote', CaseVote);
Vue.component('CaseTrial', CaseTrial);
Vue.component('CaseUnlock', CaseUnlock);
Vue.component('CaseVerdict', CaseVerdict);
Vue.component('ActivityMonitor', ActivityMonitor);


export default new Router({
  routes: [
    {path: '/', component: Dashboard},
    {path: '/latest', component: Latest},
    {path: '/clients', component: Clients},
    {path: '/dashboard', component: Dashboard},
    {path: '/welcome', component: Welcome},
    {path: '/cases-archive', component: CasesArchive},
    {path: '/client-contract', component: ClientContract},
    {path: '/case', component: Case}
  ]
})




