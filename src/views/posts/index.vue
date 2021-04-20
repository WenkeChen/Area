<template>
  <div>
    <v-card outlined v-for="(item, index) in articles" class="mb-10" :key="index" :to="'/p/' + item.slug">
      <v-img
          v-if="item.cover"
          class="out-of-card"
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          :src="item.cover"
      ></v-img>
      <div class="text-h5 my-3">{{ item.title }}</div>
      <div class="body-1 my-3">{{ item.summary }}</div>

      <span class="mr-3"><v-icon left>mdi-calendar-range</v-icon>{{ item.created_at }}</span>
      <span class="mr-3"><v-icon left>mdi-comment-processing-outline</v-icon>{{ item.comment_count }}</span>
    </v-card>

    <div class="text-center my-5">
      <v-pagination
          align="center"
          v-model="page"
          :length="Math.ceil(this.count / this.pageSize)"
          @input="handleCurrentChange"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import {fetchCategoryList, fetchPostList} from '@/api/post'

export default {
  name: "index",
  data() {
    return {
      categories: [],
      articles: [],
      pageSize: 10,
      count: 1,
      page: 1
    }
  },
  created() {
    fetchCategoryList({}).then(res => {
      this.categories = res.data.category
    })

    this.handleCurrentChange(1);
  },
  methods: {
    handleCurrentChange(currentPage) {
      fetchPostList({page: currentPage}).then(res => {
        this.articles = res.data.list
        this.count = res.data.count
      })
    },

  }
}
</script>

<style scoped>

</style>