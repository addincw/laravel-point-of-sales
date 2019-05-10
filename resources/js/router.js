import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import MasterItemIndex from './views/master/item/Index.vue'
import MasterItemCategories from './views/master/item/ItemCategories.vue'
import MasterItemCategoriesForm from './components/master/item/ItemCategoriesForm.vue'
import MasterItemCategoriesList from './components/master/item/ItemCategoriesList.vue'
import MasterItemUnits from './views/master/item/ItemUnits.vue'
import MasterItemUnitsForm from './components/master/item/ItemUnitsForm.vue'
import MasterItemUnitsList from './components/master/item/ItemUnitsList.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/master/item/categories',
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
              { name: 'Item Category', path: '/master/item/categories' },
              { name: 'Create' }
            ]
          },
        },
        {
          path: ':id/edit',
          component: MasterItemCategoriesForm,
          meta: {
            breadscrumbs: [
              { name: 'Item Category', path: '/master/item/categories' },
              { name: 'edit' }
            ]
          },
        },
      ]
    },
    {
      path: '/master/item/units',
      component: MasterItemUnits,
      meta: {
        breadscrumbs: [
          { name: 'Item Unit' }
        ]
      },
      children: [
        {
          path: '/',
          component: MasterItemUnitsList,
          meta: {
            breadscrumbs: [
              { name: 'Item Unit' }
            ]
          },
        },
        {
          path: 'create',
          component: MasterItemUnitsForm,
          meta: {
            breadscrumbs: [
              { name: 'Item Unit', path: '/master/item/units' },
              { name: 'Create' }
            ]
          },
        },
        {
          path: ':id/edit',
          component: MasterItemUnitsForm,
          meta: {
            breadscrumbs: [
              { name: 'Item Unit', path: '/master/item/units' },
              { name: 'edit' }
            ]
          },
        },
      ]
    },
  ]
})

export default router
