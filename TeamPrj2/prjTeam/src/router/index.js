import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Profile from '../pages/profile'
import Team from '../pages/team'
import Response from '../pages/response'
import Ask from '../pages/ask'
import Journal from '../pages/journal'
import Mobile from '../pages/mobile'
// import Record from '../pages/record'
import Assembly from '../pages/assembly'
import Show from '../pages/show'
import Showht from '../pages/showht'
import Business from '../pages/business'
import Pccase from '../pages/pccase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/ask',
      name: 'Ask',
      component: Ask
    },
    {
      path: '/response',
      name: 'Response',
      component: Response
    },
    {
      path: '/journal',
      name: 'Journal',
      component: Journal
    },
    {
      path: '/mobile',
      name: 'Mobile',
      component: Mobile
    },
    {
      path: '/record',
      name: 'Record',
      // component: Record
      component: resolve=>require(['../pages/record'],resolve)
    },
    {
      path: '/assembly',
      name: 'Assembly',
      component: Assembly
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/showht',
      name: 'Showht',
      component: Showht
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    },
    {
      path: '/pccase',
      name: 'Pccase',
      component: Pccase
    }

  ]
})
