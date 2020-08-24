<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/appbar';

export default {
  name: 'App',

  components: {
    AppBar
  },

  data: () => ({
    //
  }),
};
</script>
