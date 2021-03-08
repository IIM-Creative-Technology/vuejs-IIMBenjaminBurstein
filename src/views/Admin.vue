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

</style>
