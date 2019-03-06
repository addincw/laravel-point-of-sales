import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    itemCategories: []
  },
  getters: {
    findItemCategory: (state) => (id) => {
      return state.itemCategories.find((category) => category.id == id)
    }
  },
  mutations: {
    retrieveItemCategories(state, payload)
    {
      state.itemCategories = payload
    }
  },
  actions: {
    loadItemCategories(context)
    {
      axios.get('/master/items/categories')
           .then(response => context.commit('retrieveItemCategories', response.data))
           .catch(error => console.log(error))
    },
    deleteItemCategories(context, id)
    {
      axios.delete(`/master/items/categories/${id}`)
           .then(() => {
             context.dispatch('loadItemCategories')
             resolve()
           })
           .catch(error => console.log(error))
    },
    storeItemCategories(context, request)
    {
      return new Promise((resolve, reject) => {
        axios({ url: request.url, method: request.method, data: request.data })
             .then(() => {
               context.dispatch('loadItemCategories')
               resolve()
             })
             .catch(error => {
               console.log(error)
               reject()
             })
      })
    }
  }
})

export default store
