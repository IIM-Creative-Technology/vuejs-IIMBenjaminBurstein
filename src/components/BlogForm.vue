<template>
        <div id="align">
            <div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Titre de la Page</label>
                    <input v-if=" $route.name != 'create'"  type="text" class="form-control" id="" value="titre"  disabled="disabled">
                    <input v-else  type="text" class="form-control" id="" v-model.trim="title">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Meta Title</label>
                    <input v-model.trim="metaTitle" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Meta Description</label>
                    <input v-model.trim="metaDesc" type="text" class="form-control">
                </div>
            </div>
            <div id="img">
                <label>Image par défault</label>
                <img  src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg"
                    alt="image blog">
                <label>Modifier l'image</label>
                <input v-model.trim="img" type="text" />
            </div>
        </div>
        <div class="mb-3" id="bottom">
            <label for="exampleInputPassword1" class="form-label">Content</label>
            <textarea v-model.trim="content" class="form-control"> </textarea>
        </div>
    
        <button @click="add" class="btn btn-primary">Valider les modifications</button>
</template>

<script>
export default {
   methods: {

       add(){
           this.$store.dispatch('verifyPost', { 
            'title' : this.title, 
            'metaTitle' : this.metaTitle, 
            'metaDesc': this.metaDesc, 
            'content' : this.content, 
            'img' : this.img,
            });
       }
   },
   computed: {
       test() {
           return this.$store.state;
       }
   }

       
   
}
</script>

<style scoped>
    form {
        width: 40%;
        border: solid 1px black;
    }

    #align {
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
    }
    #align input {
        width: 60%;
        text-align: center;
    }
    #align .mb-3 {
        display: flex;
        justify-content: space-between;
    }

    #img {
        width: 30%;
        display: grid;
    }

    #img img {
        width: 80%;
        margin: 0 auto;
        border: black 1px solid;
        height: auto;
    }
    #img a {
        text-decoration: none;
        color: black;
        font-size: 18px;
    }
    #metaDes {
        width: 80%;
        margin: 0 auto;
    }
    #bottom {
        display: flex;
        width: 90%;
        justify-content: space-between;
        margin: 0 auto;
        align-items: center;
    }
    #bottom textarea {
        width: 75%;
    }
    button {
        margin-bottom: 50px;
        margin-top: 25px;
    }
</style>