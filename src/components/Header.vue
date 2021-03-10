<template>
    <nav>
        <ul>
            <li> <router-link to="#">Gérer le Blog</router-link></li>
            <li class="barre"> <router-link to="#">Blog</router-link></li>
            <li class="barre"> <router-link to="#">Login</router-link></li>
        </ul>
    </nav>
</template>

<script>
    export default {
    }
</script>

<style scoped>
nav {
    margin: 40px 0;
    text-align: left;
}
    li a{
        font-size: 22px;
        color: black;
        text-decoration: none;
        font-weight: 500;
    }
    li {
        list-style: none;
        display: inline;
        margin-left: 10px;
    }
    .barre {
        border-left: solid 2px rgb(37, 37, 37);
        padding-left: 10px;
    }
    a:hover {
        font-weight: bold;
        color: black;
        border-bottom: 1px solid black;
        transition: 0.3s;
    }

</style>