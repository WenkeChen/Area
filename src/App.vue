<template>
  <div id="app">
    <v-app>
      <v-main id="main">
        <router-view/>
      </v-main>
      <v-footer class="mt-5">
        <v-container>
          <v-row
              justify="center"
              no-gutters
          >
            <v-btn
                href="https://github.com/WenkeChen"
                target="_blank"
                icon
            ><v-icon>mdi-github</v-icon></v-btn>

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
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>
#main {
  margin: 0 20px;
}
</style>