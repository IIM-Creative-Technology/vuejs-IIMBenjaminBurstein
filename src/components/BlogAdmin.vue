<template>
<h1>Admin</h1>
    <button class="add"><router-link to="/create">Ajouter un produit</router-link></button>
    <div v-for="(post, index) in posts" :key="(post, index)">
        <div class="row content" >
            <div class="col-lg-10 row">
                <div class="col-lg-4    "> 
                    <img v-bind:src="post.img" class="image">
                </div>
                <div class="col-lg-8">
                    <p>{{post.metaDesc}}</p>
                </div>  
            </div>
            <div class="col-lg-2" style="display: flex;">
                <button class="edit"><router-link :to="'/admin/edit/'+index">Edit</router-link></button>
                <button class="del">supprimer</button>
            </div>
        </div>
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