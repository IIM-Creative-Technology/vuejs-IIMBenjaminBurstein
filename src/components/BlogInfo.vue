<template>
    <div class="row">
        <img :src="$store.state.posts[$route.params.id].img" class="image">
        <h2> {{$store.state.posts[$route.params.id].title}}</h2>
        <p>.{{$store.state.posts[$route.params.id].content}}</p>
        <div class="col-lg-3">
            <p>{{$store.state.posts[$route.params.id].date}}</p>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        posts(){
             return this.$store.state.posts;
        }
       
    }
}
</script>
<style scoped>
.image{
    width: 25%;
    height: auto;
    margin: auto;
}
</style>