<template>
    <Header />
    <blog-edit />
</template>
<script>
    import BlogEdit from "../components/BlogEdit"
    import Header from '../components/Header.vue'
    export default {
        components : {
        BlogEdit,
        Header,
        }
    }
    
</script>
<style scoped>

</style>
