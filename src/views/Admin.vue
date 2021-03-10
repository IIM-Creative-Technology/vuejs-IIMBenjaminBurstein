<template>
    <headerBlog />
    <blog-edit class="content" />
    <blog-form />
</template>

<script>
    import BlogEdit from "../components/BlogEdit"
import BlogForm from '../components/BlogForm.vue'
    import headerBlog from '../components/Header.vue'
    export default {
        components : {
        BlogEdit,
        headerBlog,
         BlogForm,
        }
    }
    
</script>
<style scoped>
    .content{
        border: solid black 1px;
        max-width: 75%;
        margin: auto;
    }   
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    * {
        margin: 0 auto;
        padding: 0;
        font-family: Roboto;
    }
</style>
