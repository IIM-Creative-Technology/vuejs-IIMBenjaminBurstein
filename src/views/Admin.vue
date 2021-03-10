<template>
    <blog-admin class="content"  />
    <blog-list class="content"  />    
    <blog-info />
    <blog-form />
     <router-view></router-view>
</template>

<script>
    import BlogAdmin from "../components/BlogAdmin"
    import BlogForm from '../components/BlogForm.vue'
    import BlogInfo from '../components/BlogInfo.vue'
    import BlogList from '../components/BlogList.vue'
    export default {
        name: "admin",
        components : {
        BlogAdmin,
        BlogList,
        BlogInfo,
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
