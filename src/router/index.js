// import Vue from 'vue'
// import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Actions from '@/components/Actions'
import NewAction from '@/components/NewAction'
import EditAction from '@/components/EditAction'

// Vue.use(Router)

export const routes =[
  {

      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/actions',
      name: 'Actions',
      component: Actions
    },
    {
      path: '/actions/new',
      name: 'NewAction',
      component: NewAction
    },
    {
      path: '/actions/:id',
      name: 'EditAction',
      component: EditAction
    }
  ]