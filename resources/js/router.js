import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import MasterItemCategories from './views/master/ItemCategories.vue'
import MasterItemCategoriesForm from './components/master/ItemCategoriesForm.vue'
import MasterItemCategoriesList from './components/master/ItemCategoriesList.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/master/item-categories',
      component: MasterItemCategories,
      meta: {
        breadscrumbs: [
          { name: 'Item Category' }
        ]
      },
      children: [
        {
          path: '/',
          component: MasterItemCategoriesList,
          meta: {
            breadscrumbs: [
              { name: 'Item Category' }
            ]
          },
        },
        {
          path: 'create',
          component: MasterItemCategoriesForm,
          meta: {
            breadscrumbs: [
              { name: 'Item Category', path: '/master/item-categories' },
              { name: 'Create' }
            ]
          },
        },
        {
          path: ':id/edit',
          component: MasterItemCategoriesForm,
          meta: {
            breadscrumbs: [
              { name: 'Item Category', path: '/master/item-categories' },
              { name: 'edit' }
            ]
          },
        },
      ]
    },
  ]
})

export default router
