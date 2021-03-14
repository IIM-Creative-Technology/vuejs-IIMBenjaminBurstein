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
    }, 
    delete(state,payload){
      state.posts.splice(payload, 1)
    }
  },
  actions: { //methods
    verifyPost( { commit, state },payload) {
     var ok;
     if(payload.img === undefined || payload.img === ''){
       payload.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pas_d%27image_disponible.svg/1200px-Pas_d%27image_disponible.svg.png';
     }
    
      for(var item in payload){
        var error1 = '';
        var error2 = '';
       
        if(payload[item] != undefined && payload[item] != '' && payload[item] != null){
          ok = 1;
         
          console.log(ok);
        }else{
            ok = 0;
           error1 = 'veuillez remplir tous les champs';
            console.log(ok);
            break;
          }
        }

        for( var index = 0; state.posts.length > index; index++ ){
          if (payload.title === state.posts[index].title) {
            ok = 0;
           error2 = 'Le titre existe déjà pour un autre article';
            break;
          }else{
            ok =1;
         
          }
         
        }
        if(ok === 1){
          commit('addPost', payload);
        }else{
          document.getElementById('error').innerHTML = error1 + error2;
          document.getElementById('error').style.display = "block";
          console.log('non')
        }
    },
    verifyModifPost(context, payload) {
      var ok;
      var error = '';
      if(payload[0].img === undefined || payload[0].img === ''){
        payload[0].img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pas_d%27image_disponible.svg/1200px-Pas_d%27image_disponible.svg.png';
      }
       for (var item in payload[0]){
         console.log(item + '=' + payload[0][item]);
         if( payload[0][item] != '' && payload[0][item] != undefined && payload[0][item] != null  ){
           ok = 1
           console.log(ok)
         }else{
            ok = 0
            error = 'veuillez remplir tous les champs';
            console.log(ok)
            break;
           }
         }
      
         if(ok === 1){
           context.commit('modifPost',payload);
         }else{
            document.getElementById('error').innerHTML = error;
           document.getElementById('error').style.display = "block";
           console.log('non')
         }
    }
    
  },
  modules: { 
  }
})
