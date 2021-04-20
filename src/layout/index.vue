<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12" xs="12" sm="12" md="3" lg="2" xl="2">
      <left-side id="left-aside"></left-side>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="7" lg="6" xl="6">
      <router-view />
    </v-col>
  </v-row>
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