import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import timeEntries from '@/components/timeEntries'
import LogTime from '@/components/LogTime'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/Home',
      name:'Home',
      component:Home
    },
    {
      path:'/time-entries',
      name:'timeEntries',
      component:timeEntries,
      children:[
        {
          path:'Log-time',
          name:LogTime,
          component:LogTime
        }
      ]
    },
    
  ]
})
