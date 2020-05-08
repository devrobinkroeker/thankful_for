<template>
  <div id="app">
    <v-btn v-if="!$store.state.new_post" @click="showDialog=true">Wofür bist du heute dankbar?</v-btn>
    <v-dialog width="500" v-model="showDialog">
      <NewPost @hide-dialog="showDialog=false"></NewPost>
    </v-dialog>

    <v-snackbar v-model="$store.state.showSnackbar">
      <span class="msg">{{ $store.state.snackbarMessage }}</span>
      <v-btn @click="$store.state.showSnackbar=false">Schließen</v-btn>
    </v-snackbar>
    <router-view/>
  </div>
</template>

<script>
import NewPost from '@/components/NewPost'

export default {
  name: 'App',
  components: {

    NewPost
  },
  data() {
    return {

      showDialog: false
    }
  },
  created() {

    document.title = 'Dankbar für ...'
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.msg {

  margin-right: 10px;
}
</style>