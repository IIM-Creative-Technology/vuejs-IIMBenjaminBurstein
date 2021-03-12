import Vuex from 'vuex'

export default new Vuex.Store({
  state: { 
     contents : [{
       'title':  'titre de la page',
       'metaTitle': 'meta title',
       'metaDes': 'meta title',
       'post': 'meta title',
       'img': 'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg',
     }],
  },
  mutations: { //
    // add(state, payload){
    //     state.posts.push(payload);
    // }
  },
  actions: { //methods
    // addP({commit}, payload) {
    //   if(payload.title != ''){
    //     commit('add')
    //   }
    // }
  },
  modules: { 
  }
})
