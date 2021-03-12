import Vuex from 'vuex'

export default new Vuex.Store({
  state: { //data
    posts : [],
  },
  mutations: { //
    addPost(state, payload){
        state.posts.push(payload);
    }
  },
  actions: { //methods
    verifyPost(context, payload) {
      console.log(payload.title);
      if(payload.title){
        context.commit('addPost', payload);
      }
    }
  },
  modules: { 
  }
})
