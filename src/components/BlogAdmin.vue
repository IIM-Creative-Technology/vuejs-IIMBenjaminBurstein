<template>
<h1>Admin</h1>
    <button class="add"><router-link to="/create">Ajouter un produit</router-link></button>
    <div v-for="(post, index) in posts" :key="(post, index)" class="blogadmin">
        <div class="row content" >
            <div class="col-lg-10 row">
                <div class="col-lg-4    "> 
                    <img v-bind:src="post.img" class="image">
                </div>
                <div class="col-lg-8" id="des">
                    <p>{{post.content}}</p>
                </div>  
            </div>
            <div class="col-lg-2" id="buttonAdmin"  style="display: flex;">
                <button class="edit"><router-link :to="'/admin/edit/'+index">Edit</router-link></button>
                <button class="del" @click="remove">supprimer</button>
            </div>
        </div>
    </div>
</template> 
<script>
export default {
    methods : {
        remove() {
            this.$store.commit("delete", this.$route.params.id)
        }
    },
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
    .blogadmin {
        margin-top: 50px;
    }
    #des {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #buttonAdmin {
        display: flex;
        align-items: center;
    }
    #buttonAdmin button {
        margin: 0 10px;
    }
</style>