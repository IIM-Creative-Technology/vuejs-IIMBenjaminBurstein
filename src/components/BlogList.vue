<template>
<h1>salut</h1>
<div v-for="content in contents" :key="content.blog">
    <div class="row content">
            <div class="col-lg-4 "> 
                <img :src="content.img" class="image">
            </div>
            <h2>{{content.title}}</h2>
            <div class="col-lg-8">
                 <p>{{msg}}</p>
            </div>
          
    </div>
</div>
</template>
<script>
export default {
    
    computed : {
        contents() {
            return this.$store.state.contents
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