<template>
<div>
  <router-link to="/show">
        <blog-list />
  </router-link>

</div>

</template>

<script>
import BlogList from '../components/BlogList.vue'
export default {
  name: 'Home',
  components: {
    BlogList
  }
}
</script>
