<template>
  <v-footer>
    <v-bottom-navigation color="primary" v-model="isActive" absolute>
      <v-btn value="home" to="/">
        <span>home</span>
      </v-btn>
      <v-btn value="second" to="/second">
        <span>second</span>
      </v-btn>
      <v-btn value="third" to="/third">
        <span>third</span>
      </v-btn>
    </v-bottom-navigation>
  </v-footer>
</template>

<script>
export default {
  name: "BottomNavigationButton",
  data() {
    // data()が関数であればいいのでアロー関数でも可
    return {
      isActive: 'home'
    }
  }
}
</script>

<style scoped>

</style>