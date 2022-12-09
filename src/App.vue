<template>
  <v-app>
    <v-main>
      <!-- 基本は v-main の中に記述するはず     -->
      <!-- コンポーネントは htmlタグみたいに入れられる -->

      <AppBar/>
      <v-container>
        <router-view/>
      </v-container>
      <BottomNavigationButton/>

    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
import BottomNavigationButton from "@/components/BottomNavigationButton";


export default {
  name: 'App',
  components: { // App.vue（ここ）のtemplateタグ内で使うコンポーネントを指定する
    AppBar, BottomNavigationButton
  },

  data: () => ({
    //
  }),
};
</script>
