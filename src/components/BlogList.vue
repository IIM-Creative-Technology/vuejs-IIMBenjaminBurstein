<template>
<h1>Blog</h1>
<div v-for="(post, index) in posts" :key="(post, index)">
    <router-link :to=" '/blog/'+index" >
        <div class="row content">
            <div class="col-lg-4 "> 
                <img :src="post.img" class="image">
            </div>
            <h2>{{post.title}}</h2>
            <div class="col-lg-8">
                 <p>{{post.content}}</p>
            </div>   
        </div>
    </router-link>
</div>
</template>
<script>
export default {
    computed : {
        posts() {
            return this.$store.state.posts
        }
    }
}
   
</script>
<style scoped>
    .image{
        width: 90%;
        height: auto;
    }
     .content{
        border: solid black 1px;
        max-width: 75%;
        margin: auto;
    }   
</style>