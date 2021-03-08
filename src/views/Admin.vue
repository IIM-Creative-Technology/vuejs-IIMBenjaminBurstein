<template>
    <headerBlog />
    <blog-edit class="content" />
</template>
<script>
    import BlogEdit from "../components/BlogEdit"
    import headerBlog from '../components/Header.vue'
    export default {
        components : {
        BlogEdit,
        headerBlog,
        }
    }
    
</script>
<style scoped>
    .content{
        border: solid black 1px;
        max-width: 75%;
        margin: auto;
    }   
</style>
