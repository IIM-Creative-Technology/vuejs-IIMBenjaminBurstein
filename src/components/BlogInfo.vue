<template>
  <div v-if=" typeof(index) === 'string'" class="row" >
      <h1>{{index}}</h1>
  </div>
  <div v-else  class="row">
    <img :src="$store.state.posts[index].img" class="image" />
    <h2>{{ $store.state.posts[index].title }}</h2>
    <p>{{ $store.state.posts[index].content }}</p>
    <div class="col-lg-3">
      <p>Posté le 3 mars</p>
    </div>
  </div>
</template>
<script>
export default {
 

  computed: {
    posts() {
      return this.$store.state.posts;
    },  
    index() {
      
        for( var index = 0;this.$store.state.posts.length > index; index++ ){
            if (this.$store.state.posts[index].title === this.$route.params.title) {
            return index;
            }
            index++; 
        }
        return 'error';
    }
  },
};
</script>
<style scoped>
.image {
  width: 25%;
  height: auto;
  margin: auto;
}
</style>
