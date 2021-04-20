<template>
  <v-timeline
      align-top
      dense
  >
    <v-timeline-item
        small
        v-for="(moment, index) in moments" :key="index"
    >
      <v-row no-gutters class="pt-1">
        <v-col cols="2" v-if="$vuetify.breakpoint.lgAndUp">
          <strong>{{ moment.created_at|timelineDate }}</strong>
        </v-col>
        <v-col sm="12" md="12" lg="10">
          <strong class="text-body-1">{{moment.text}}</strong>

          <v-row no-gutters>
            <v-col :cols="moment.images.length === 1 ? 12 : (moment.images.length === 2 ? 6 : 4)" v-for="(image, imageIndex) in moment.images" :key="imageIndex">
              <v-img
                  :src="image"
                  :lazy-src="`https://picsum.photos/10/6?image=${imageIndex * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                  >
                    <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>

          <v-row v-if="moment.video">
            <v-responsive :aspect-ratio="16/10">

            <v-col style="height: 100%" v-html="moment.video">
            </v-col>
            </v-responsive>

          </v-row>

          <div class="caption" align="right">{{moment.created_at|timelineTime}}</div>
        </v-col>
      </v-row>
    </v-timeline-item>

  </v-timeline>
</template>

<script>

export default {
  name: "moment",
  data() {
    return {
      moments: [
        {
          text: 'HelloWorld 今天是个好日子 心想的事儿都能成',
          images: [
              'https://blog.jimmycai.com/p/2020-04-08/Lantern_hu149f0b9172a2787bf99026702b0e2052_190818_1600x0_resize_q75_box.jpg',
              'https://blog.ji.jimmycai.com/p/2020-04-08/Lantern_hu149f0b9172a2787bf99026702b0e2052_190818_1600x0_resize_q75_box.jpg',
              'https://blog.ji.jimmycai.com/p/2020-04-08/Lantern_hu149f0b9172a2787bf99026702b0e2052_190818_1600x0_resize_q75_box.jpg',
              'https://blog.ji.jimmycai.com/p/2020-04-08/Lantern_hu149f0b9172a2787bf99026702b0e2052_190818_1600x0_resize_q75_box.jpg',
              'https://blog.ji.jimmycai.com/p/2020-04-08/Lantern_hu149f0b9172a2787bf99026702b0e2052_190818_1600x0_resize_q75_box.jpg',
              'https://blog.ji.jimmycai.com/p/2020-04-08/Lantern_hu149f0b9172a2787bf99026702b0e2052_190818_1600x0_resize_q75_box.jpg',
              'https://blog.ji.jimmycai.com/p/2020-04-08/Lantern_hu149f0b9172a2787bf99026702b0e2052_190818_1600x0_resize_q75_box.jpg',
              'https://blog.jimmycai.immycai.com/p/2020-04-08/Lantern_hu149f0b9172a2787bf99026702b0e2052_190818_1600x0_resize_q75_box.jpg',
              'https://blog.ji.jimmycai.com/p/2020-04-08/Lantern_hu149f0b9172a2787bf99026702b0e2052_190818_1600x0_resize_q75_box.jpg',
          ],
          music: {},
          video: '<iframe width="100%" height="100%" src="//player.bilibili.com/player.html?aid=58592001&bvid=BV13x411f7Hn&cid=102182051&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>',
          created_at: '2021-04-18 12:54'
        },
        {
          text: '',
          images: [
              'https://blog.jimmycai.com/p/2020-04-08/Lantern_hu149f0b9172a2787bf99026702b0e2052_190818_1600x0_resize_q75_box.jpg',
              'https://blog.jimmycai.com/p/new-theme-stack/cover_hu960fdfa8afc1f156b4ec3ad486ba63e1_65549_800x0_resize_q75_box.jpg'
          ],
          music: {},
          video: '',
          created_at: '2021-04-18 12:54'
        },
        {
          text: '今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成',
          images: [],
          music: {},
          video: '<iframe width="100%" height="100%" src="//player.bilibili.com/player.html?aid=928125956&bvid=BV1BT4y1M738&cid=267375182&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>',
          created_at: '2021-04-18 12:54'
        },
        {
          text: '今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成',
          images: [],
          music: {},
          video: '',
          created_at: '2021-04-18 12:54'
        },
        {
          text: '今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成今天是个好日子 心想的事儿都能成',
          images: [],
          music: {},
          video: '',
          created_at: '2021-04-18 12:54'
        },
      ]
    }
  },
  filters: {
    timelineDate(val) {
      const date = new Date(val.replace(/-/g, "/"))
      return date.toLocaleDateString();
    },
    timelineTime(val) {
      const date = new Date(val.replace(/-/g, "/"))

      return date.toLocaleString();
    }
  }
}
</script>

<style scoped>
</style>