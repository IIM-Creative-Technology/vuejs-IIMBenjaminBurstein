<template>
<div>
    <blog-admin class="content"  />
    <router-view></router-view>
   
</div>
    
</template>

<script>
    import BlogAdmin from "../components/BlogAdmin"
    export default {
        name: "admin",
        components : {
        BlogAdmin,
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
