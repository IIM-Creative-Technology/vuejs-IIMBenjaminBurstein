<template>
<h1>Blog</h1>
<div v-for="(post, index) in posts" :key="(post, index)">
    <router-link :to=" '/blog/'+ post.title" >
        <div class="list">
            <div class="col-lg-4 "> 
                <img :src="post.img" class="image">
            </div>
            
            <div class="col-lg-8" id="contentlist">
                <h2>{{post.title}}</h2>
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
*{
    text-decoration: none;
    color: black;
}
    .image{
        width: 90%;
        height: auto;
    }
     .list{
        border: solid black 1px;
        max-width: 75%;
        margin: 25px auto;
        display: flex;
        align-items: center;
    }   
    #contentlist h2{
        font-size: 34px;
        font-weight: bold;
    }
    #contentlist p {
        font-size: 16px;
        font-weight: 400;
    }
</style>