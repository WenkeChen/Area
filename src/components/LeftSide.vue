<template>
    <v-row no-gutters>
      <v-col cols="12">
        <v-row no-gutters justify="center" class="pt-1">
          <v-col cols="12">
            <v-img
                class="rounded-circle"
                v-if="$vuetify.breakpoint.mdAndUp"
                lazy-src="https://picsum.photos/id/11/10/6"
                height="100"
                width="100"
                src="https://blog.jimmycai.com/p/2020-04-08/Lantern_hu149f0b9172a2787bf99026702b0e2052_190818_1600x0_resize_q75_box.jpg"
            ></v-img>
          </v-col>

          <v-col cols="12" class="my-2">
            <v-row no-gutters justify="space-between">
              <v-col class="my-2">
                <router-link to="/home" class="text-decoration-none"><div class="text-h5">Wenke.</div></router-link>
                <div class="body-1">Le vent se lève, il faut tenter de vivre.</div>
              </v-col>
              <v-col cols="1" class="text-end" v-if="$vuetify.breakpoint.smAndDown">
                <v-icon v-if="!expand" @click="expand = true">mdi-menu</v-icon>
                <v-icon v-else @click="expand = false">mdi-menu-open</v-icon>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row no-gutters justify="start">
          <v-col cols="12">
            <v-expand-transition>
              <v-list flat v-show="expand">
                <v-list-item-group color="primary">
                  <v-list-item to="/home">
                    <v-list-item-icon>
                      <v-icon>mdi-home-outline</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Home</v-list-item-title>
                  </v-list-item>

                  <v-list-group
                      :value="false"
                      prepend-icon="mdi-package-variant-closed"
                  >
                    <template v-slot:activator>
                      <v-list-item-title>Category</v-list-item-title>
                    </template>

                    <v-list-item
                        v-for="(category, i) in categories"
                        :key="i"
                        :to="'/archive/category/' + category.slug"
                    >
                      <v-list-item-title v-text="category.name"></v-list-item-title>
                    </v-list-item>
                  </v-list-group>

                  <v-list-item to="/moment">
                    <v-list-item-icon>
                      <v-icon>mdi-clock-outline</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Moment</v-list-item-title>
                  </v-list-item>

                  <v-list-item to="/about">
                    <v-list-item-icon>
                      <v-icon>mdi-account-outline</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>About</v-list-item-title>
                  </v-list-item>

                </v-list-item-group>
              </v-list>
            </v-expand-transition>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
</template>

<script>
import {fetchCategoryList} from "@/api/post";

export default {
  name: "LeftSide",
  data() {
    return {
      categories: [],
      expand: true,
      selectedItem: 1,
    }
  },
  watch: {
    '$vuetify.breakpoint.name'() {
      this.handleBreakpointChange()
    },
    '$route.path'() {
      if (this.$vuetify.breakpoint.smAndDown) {
        this.expand = false;
      }
    }
  },
  created() {
    this.handleBreakpointChange()

    fetchCategoryList({}).then(res => {
      this.categories = res.data.category
    })
  },
  methods: {
    handleHamburgerClick() {
      this.expand = !this.expand;
    },
    handleBreakpointChange() {
      this.expand = this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

<style scoped>

.hamburger {
  float: right;
}
</style>