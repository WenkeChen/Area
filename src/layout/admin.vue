<template>
    <v-app>
      <v-main>
        <div>
          <v-navigation-drawer
              v-model="drawer"
              :mini-variant.sync="mini"
              permanent
              app
          >
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
              </v-list-item-avatar>

              <v-list-item-title>Wenke.</v-list-item-title>

              <v-btn
                  icon
                  @click.stop="mini = !mini"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>

              <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  link
                  :to="item.path"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-group
                  :value="false"
                  prepend-icon="mdi-account-circle"
              >
                <template v-slot:activator>
                  <v-list-item-title>Post</v-list-item-title>
                </template>

                <v-list-item
                    v-for="(item, i) in admins"
                    :key="i"
                    link
                    :to="item.path"
                >
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item>
              </v-list-group>

            </v-list>
          </v-navigation-drawer>
          <v-app-bar
              dense
              app
          >
          </v-app-bar>
<!--          <div class="d-flex">-->
            <v-card class="fill-height">
              <router-view />
            </v-card>
<!--          </div>-->
        </div>
      </v-main>
    </v-app>
</template>

<script>
export default {
  name: "admin",
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-home-city', path: '/admin/dashboard' },
        // { title: 'Post', icon: 'mdi-note-plus-outline', path: '/admin/post' },
        { title: 'Moment', icon: 'mdi-clock-time-nine-outline', path: '/admin/moment' },
      ],
      admins: [
        { title: 'Mangement', icon: 'mdi-home-city', path: '/admin/post/management' },
        { title: 'New', icon: 'mdi-home-city', path: '/admin/post/new' },
      ],
      mini: this.$vuetify.breakpoint.smAndDown,
    }
  },
}
</script>

<style scoped>

</style>
