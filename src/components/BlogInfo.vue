<template>
    <div class="row">
        <img :src="img" class="image">
        <h2>{{title}}</h2>
        <p>{{msg}}</p>
        <div class="col-lg-3">
            <p>Posté le 3 mars</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
         return{
            img : "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
            msg: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, nesciunt! Repellat modi,expedita, minima id tempora accusantium alias porro exercitationem dolores error autem assumenda! Mollitia dolorum molestias veniam? Sed, harum?",
            title: "Je suis le giga titre",
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