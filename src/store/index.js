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
    var ok;
     if(payload.img === undefined){
       payload.img = 'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg';
     }
      for ( var item in payload){
        console.log(item + '=' + payload[item]);
        if(payload[item] != undefined){
          ok = 1
        }else{
          ok = 0
          break;
        }
      }

      if(ok === 1){
        context.commit('addPost', payload);
      }
    }
  },
  modules: { 
  }
})
