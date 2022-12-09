<template>
  <v-card>
    <v-bottom-navigation color="primary" v-model="isActive" absolute>
      <v-btn value="menu01">
        <span>menu01</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn value="menu02">
        <span>menu02</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn value="menu03">
        <span>menu03</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-card>
</template>

<script>
export default {
  name: "BottomNavigationButton",
  data() {
    // data()が関数であればいいのでアロー関数でも可
    return {
      isActive: 'menu01'
    }
  }
}
</script>

<style scoped>

</style>