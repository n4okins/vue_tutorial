<template>
  <div>
    <!--    template タグ内に複数のタグを作ることはできないので そういうときはdivで囲う-->
    <h1>Home Page Template</h1>
    <v-container>
      <p>パラグラフはここ</p>
    </v-container>
    <!-- コンポーネントは htmlタグみたいに入れられる -->
    <BottomNavigationButton/>

  </div>
</template>

<script>
import BottomNavigationButton from "@/components/BottomNavigationButton";

export default {
  name: "HomePage",
  components: {
    BottomNavigationButton
  }
}
</script>

<style scoped>

</style>