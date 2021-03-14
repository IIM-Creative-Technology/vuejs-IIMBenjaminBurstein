<template>
    <div>
        <blog-add />
        <div id="edit">
            <div>
            <blog-admin />
            </div>
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    import BlogAdmin from "../components/BlogAdmin"
    import BlogAdd from '@/components/BlogAdd'
    export default {
        name: "admin",
        components: {
            BlogAdmin,
            BlogAdd
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
    #edit{
        display: flex;
    }
</style>