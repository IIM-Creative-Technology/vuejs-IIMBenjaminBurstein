import Vuex from 'vuex'

export default new Vuex.Store({
<<<<<<< HEAD
  state: { 
     contents : [{
       'title':  'titre de la page',
       'metaTitle': 'meta title',
       'metaDes': 'meta title',
       'post': 'meta title',
       'img': 'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg',
     }],
=======
  state: { //data
    posts : [],
>>>>>>> 98b5e32f0718a9247f25b316017b118f85cfd08e
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
