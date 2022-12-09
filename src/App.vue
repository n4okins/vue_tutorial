<template>
  <v-app>
    <v-main>
      <!-- 基本は v-main の中に記述するはず     -->
      <!-- コンポーネントは htmlタグみたいに入れられる -->

      <AppBar/>
      <HomePage/>
      <BottomNavigationButton/>

    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
import BottomNavigationButton from "@/components/BottomNavigationButton";
import HomePage from './views/HomePage';


export default {
  name: 'App',
  components: { // App.vue（ここ）のtemplateタグ内で使うコンポーネントを指定する
    AppBar, HomePage, BottomNavigationButton
  },

  data: () => ({
    //
  }),
};
</script>
