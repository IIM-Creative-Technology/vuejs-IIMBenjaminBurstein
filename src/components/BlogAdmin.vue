<template>
    <button class="add"><router-link to="/create">Ajouter un produit</router-link></button>
    <div class="row content">
        <div class="col-lg-10 row">
            <div class="col-lg-4    "> 
                <img v-bind:src="img" class="image">
            </div>
            <div class="col-lg-8">
                 <p>{{msg}}</p>
            </div>  
        </div>
        <div class="col-lg-2" style="display: flex;">
            <button class="edit"><router-link to="/admin/edit">Edit</router-link></button>
            <button class="del">supprimer</button>
        </div>
    </div>
</template> 
<script>
export default {
     data() {
         return{
            img : "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
            msg: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, nesciunt! Repellat modi,expedita, minima id tempora accusantium alias porro exercitationem dolores error autem assumenda! Mollitia dolorum molestias veniam? Sed, harum?"
         }
       
    },
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