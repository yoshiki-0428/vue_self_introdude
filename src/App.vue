<template lang="pug">
  #app
    main-header
    router-view
    back-ground
</template>

<script>
import MainHeader from './components/MainHeader'
import BackGround from './components/BackGround'

export default {
  name: 'App',
  components: {
    MainHeader,
    BackGround
  }
}

</script>

<style lang="sass">
  $english: Coda, serif
  $japanese: Sawarabi Gothic, serif

  #app
    font-family: $japanese, $english
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50

  .english-font
    font-family: $english

  .japanese-font
    font-family: $japanese

  .main_title
    text-align: center
    &__content
      padding: 2%
      font-weight: bold
      font-size: 1.5rem

  /* フォントドラッグ時カラー指定 */
  .md-theme-default :not(input):not(textarea)::selection
    background-color: #080808
    color: #ffffff
</style>
