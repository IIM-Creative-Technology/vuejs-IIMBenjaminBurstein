import Vuex from 'vuex'
import router from '../router/index.js';
export default new Vuex.Store({
  state: { //data
    posts : [],
  },
  mutations: { //
    addPost(state, payload){
        state.posts.push(payload);
        router.push('/admin');  
    },
    modifPost(state,payload) {
      state.posts[payload[1]] = payload[0];
      router.push('/');  
    } 
  },
  actions: { //methods
    verifyPost(context, payload) {
     var ok;
     if(payload.img === undefined){
       payload.img = 'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg';
     }
      for (var item in payload){
        console.log(item + '=' + payload[item]);
       
        if(payload[item] != undefined && payload[item] != '' && payload[item] != null){
          ok = 1
          console.log(ok);
        }else{
            ok = 0
            console.log(ok);
            break;
          }
        }

        if(ok === 1){
          context.commit('addPost', payload);
        }else{
          document.getElementById('error').style.display = "block";
          console.log('non')
        }
    },
    verifyModifPost(context, payload) {
      var ok;
      if(payload[0].img === undefined || payload[0].img === ''){
        payload[0].img = 'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg';
      }
       for (var item in payload[0]){
         console.log(item + '=' + payload[0][item]);
         if( payload[0][item] != '' && payload[0][item] != undefined && payload[0][item] != null  ){
           ok = 1
           console.log(ok)
         }else{
            ok = 0
            console.log(ok)
            break;
           }
         }
      
         if(ok === 1){
           context.commit('modifPost',payload);
         }else{
           document.getElementById('error').style.display = "block";
           console.log('non')
         }
    }
    
  },
  modules: { 
  }
})
