<template>
  <div>
    <v-card outlined>
      <h2>{{ $route.params.slug }}</h2>
    </v-card>

    <v-card outlined v-for="(item, index) in articles" :key="index" :to="'/p/' + item.slug">
      <v-img
          v-if="item.cover"
          class="out-of-card"
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          :src="item.cover"
      ></v-img>
      <div class="article-card">
        <h3 class="article-title">{{ item.title }}</h3>
        <p class="article-summary">{{ item.summary }}</p>
        <div class="article-data-block">
            <span class="article-data">
              <v-icon
                  small
                  color="green darken-2"
              >mdi-calendar-range</v-icon>
              <span>{{ item.created_at }}</span>
            </span>
          <!--            <span class="article-data">-->
          <!--                <v-icon-->
          <!--                    small-->
          <!--                    color="green darken-2"-->
          <!--                >mdi-comment-processing-outline</v-icon>-->
          <!--              <span>{{ item.comment_count }}</span>-->
          <!--            </span>-->
        </div>
      </div>
    </v-card>

    <div class="text-center" v-if="Math.ceil(this.count / this.pageSize) > 1">
      <v-pagination
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
      pageSize: 15,
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
.v-card {
  margin-bottom: 20px;
}
</style>
