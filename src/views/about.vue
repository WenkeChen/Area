<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-card
          outlined
      >
        <div class="text-h4">Wenke.</div>
        <div class="subtitle-1 mb-6">Wubba Lubba dub-dub</div>

        <v-card
            class="mx-auto mb-4"
            outlined
        >
          <v-card-text>
            <div>#1</div>
            <p class="display-1 text--primary">
              Mime Earth
            </p>
            <p>让卫星为你拍壁纸</p>
            <div class="text--primary">
              relating to or dependent on charity; charitable.<br>
              "an eleemosynary educational institution."
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
                text
                color="teal accent-4"
                href="https://www.baidu.com"
                target="_blank"
            >
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card
            class="mx-auto mb-4"
            outlined
        >
          <v-card-text>
            <div>#2</div>
            <p class="display-1 text--primary">
              喷嚏图挂
            </p>
            <p>每天一图卦，让我们更清楚地了解这个世界</p>
            <div class="text--primary">
              relating to or dependent on charity; charitable.<br>
              "an eleemosynary educational institution."
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
                text
                color="teal accent-4"
                href="https://news.gomain.run"
                target="_blank"
            >
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "about",
}
</script>

<style scoped>
.col {
  margin-bottom: 20px;
}
</style>