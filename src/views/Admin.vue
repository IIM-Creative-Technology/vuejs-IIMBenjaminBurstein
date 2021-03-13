<template>
<div class="AdEd">
    <blog-admin class="blogAd"  />
    <router-view class="blogEd"></router-view>
   
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
   
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    * {
        margin: 0 auto;
        padding: 0;
        font-family: Roboto;
    }
  
</style>
