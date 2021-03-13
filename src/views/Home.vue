<template>
<div>
    <blog-list />
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
