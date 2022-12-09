<template>
  <v-app>
    <v-main>
      <!-- 基本は v-main の中に記述するはず     -->
      <HomePage/>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './views/HomePage';

export default {
  name: 'App',
  components: { // App.vue（ここ）のtemplateタグ内で使うコンポーネントを指定する
    HomePage,
  },

  data: () => ({
    //
  }),
};
</script>
