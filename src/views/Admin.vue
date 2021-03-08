<template>
    <headerBlog />
    <blog-edit />
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
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    * {
        margin: 0 auto;
        padding: 0;
        font-family: Roboto;
    }
</style>
