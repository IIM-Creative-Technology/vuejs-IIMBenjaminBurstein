<template>
    <blog-form id="editblog"/>
</template>
<script>
import BlogForm from '../components/BlogForm.vue'
export default {
  components: { BlogForm },
}
</script>
<style scoped>
  #editblog {
   width: 60%;
   border: solid 1px black;
   margin-right: 25px;
  }
  
</style>