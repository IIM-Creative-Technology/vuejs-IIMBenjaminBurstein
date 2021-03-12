<template>
<h1>Admin</h1>
    <button class="add"><router-link to="/create">Ajouter un produit</router-link></button>
    <div v-for="content in contents" :key="content.blog">
    <div class="row content" >
        <div class="col-lg-10 row">
            <div class="col-lg-4    "> 
                <img v-bind:src="content.img" class="image">
            </div>
            <div class="col-lg-8">
                 <p>{{content.metaDesc}}</p>
            </div>  
        </div>
        <div class="col-lg-2" style="display: flex;">
            <button class="edit"><router-link to="/admin/edit">Edit</router-link></button>
            <button class="del">supprimer</button>
        </div>
    </div>
    </div>
</template> 
<script>
export default {

    computed : {
        contents() {
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