<template>
  <v-app>
    <v-main id="main">
      <v-row justify="center" no-gutters class="pt-md-10 mx-5">
        <v-col cols="12" xs="12" sm="12" md="3" lg="2" xl="2">
          <left-side></left-side>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="7" lg="6" xl="6">
          <router-view/>
        </v-col>
      </v-row>
    </v-main>
    <v-footer style="z-index: 999">
      <v-container>
        <v-row
            justify="center"
            no-gutters
        >
          <v-btn
              href="https://github.com/WenkeChen"
              target="_blank"
              icon
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>

          <v-col
              class="text-center overline"
              cols="12"
          >
            鄂ICP备20013173号-1
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>
<script>
import LeftSide from "@/components/LeftSide";

export default {
  name: "index",
  components: {LeftSide},
}
</script>

<style scoped>

</style>
