<template>
    <headerBlog />
    <blog-admin class="content"  />
    <blog-list class="content"  />    
</template>

<script>
    import BlogAdmin from "../components/BlogAdmin"
    import BlogList from '../components/BlogList.vue'
    import headerBlog from '../components/Header.vue'
    export default {
        components : {
        BlogAdmin,
        headerBlog,
        BlogList,
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
