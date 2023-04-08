<template>
  <div class="container">
    <Posts :posts="posts"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts.vue'
import axios from 'axios';
export default {
  name: 'HomeView',
  data: () => ({
    posts: []
  }),
  components: {
    Posts
  },
  created() {
    axios.get('http://localhost:3000/posts').then(response => {
      this.posts = response.data;

    });
  }
}
</script>
<style>
.container{
max-width: 600px;
margin: 0 auto;
}
</style>