import Vue from 'vue'
import Vuex from 'vuex'

import meetups from './modules/meetups'
import threads from './modules/threads'
import categories from './modules/categories'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    meetups,
    categories,
    threads,
    auth
  },
  // In state we are keeping our data we are sharing with our components
  // state: {
  //   meetups: [],
  //   categories: [],
  //   threads: [],
  //   meetup: {}
  // },
  // Getters are like computed properties. simple funcitons to get a state
  // getters: {
  // },
  // Actions are like methods in vue component.  They should not mutate the state
  // actions: {
  //   fetchMeetups ({state, commit}) {
  //     commit('setItems', {
  //       resource: 'meetups',
  //       items: []
  //     })
  //     axios.get('/api/v1/meetups')
  //       .then(res => {
  //         const meetups = res.data
  //         commit('setItems', {
  //           resource: 'meetups', 
  //           items: meetups
  //         })
  //         return state.meetups
  //       })
  //   },
  //   fetchCategories ({state, commit}) {
  //     axios.get('/api/v1/categories')
  //       .then(res => {
  //         const categories = res.data
  //         commit('setItems', {
  //           resource: 'categories',
  //           items: categories
  //         })
  //         return state.categories
  //       })
  //   },
  //   fetchMeetupById({state,commit}, meetupId) {
  //     commit('setItem', {
  //       resource: 'meetup',
  //       item: []
  //     })
  //     axios.get(`/api/v1/meetups/${meetupId}`)
  //       .then(res => {
  //         const meetup = res.data
  //         commit('setItem', {
  //           resource: 'meetup',
  //           item: meetup
  //         })
  //         return state.meetup
  //       })
  //   },
  //   fetchThreads({state,commit}, meetupId) {
  //     commit('setItems', {
  //       resource: 'threads',
  //       items: {}
  //     })
  //     axios.get(`/api/v1/threads?meetupId=${meetupId}`)
  //       .then(res => {
  //         const threads = res.data
  //         commit('setItems', {
  //           resource: 'threads',
  //           items: threads
  //         })
  //         return state.threads
  //       })
  //   }
  // },
  // Simple functions to mutate a state.
  mutations: {
    setItems (state, {resource, items}) {
      state[resource].items = items
    },
    setItem(state, {resource,item}) {
      state[resource].item = item
    }
  }
})