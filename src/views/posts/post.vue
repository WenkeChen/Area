<template>
  <v-card outlined>
    <v-img
        v-if="post.cover"
        class="out-of-card"
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="300"
        :src="post.cover"
    ></v-img>
    <h1>{{post.title}}</h1>
    <article v-highlight v-html="post.html"></article>

  </v-card>
</template>

<script>
import {fetchPostDetails} from '@/api/post'

export default {
  name: "post",
  data() {
    return {
      post: {
        cover: '',
        title: '',
        html: '',
      }
    }
  },
  created() {
    const slug = this.$route.params.slug
    fetchPostDetails({slug: slug}).then(res => {
      this.post = res.data
    })
  }
}
</script>

<style scoped>

</style>