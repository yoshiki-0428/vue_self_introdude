<template lang="pug">
  #app
    main-header
    router-view
</template>

<script>
import MainHeader from './components/MainHeader'

export default {
  name: 'App',
  components: { MainHeader }
}

</script>

<style>

#app {
  font-family: Orbitron;
  font-family: M PLUS 1p;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* フォントドラッグ時カラー指定 */
.md-theme-default :not(input):not(textarea)::selection {
  background-color: #080808;
  color: #ffffff;
}

h1, h2 {
  font-family: Coda;
  font-weight: bold;
  line-height: 30px;
  margin-top: 5px;
}

</style>
