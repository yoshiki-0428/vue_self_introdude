<template lang="pug">
  .top
    .content
      img.logo(src='../assets/logo.png')
      |
      h1.name
        a(href='https://github.com/yoshiki-0428') Yoshiki-0428
      |
      vue-typer(
        text="I'm a developer / Web Programmer"
        :repeat="2"
        erase-style='select-back'
      )
      |
      h1 Welcome my web page
      // TODO スクロール部分の実装
      // <h1 class="scroll">
      // <md-icon class="md-size-2x">keyboard_arrow_down</md-icon>
      // Scroll Down
      // <md-icon class="md-size-2x">keyboard_arrow_down</md-icon>
      // </h1>
    |
    main-footer
</template>

<script>
import BackGround from './BackGround'
import MainFooter from './MainFooter'
import { VueTyper } from 'vue-typer'

export default {
  name: 'Top',
  components: {
    BackGround,
    MainFooter,
    VueTyper
  }
}
</script>

<style scoped>
.top {
  margin-bottom: 5%;
  alignment: center;
}

.top .content {
  width: 100%;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  position: fixed;
}

.top .content .logo {
  width: 100px;
  height: 100px;
}

.top .content .name {
  font-size: 40px;
  margin-top: 10px;
}

.top .content .name:hover {
  text-decoration: underline;
}

.scroll {
  padding-top: 5%;
}

.vue-typer {
  font-family: Coda, serif;
  font-weight: bold;
  font-size: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.vue-typer .custom.char.selected {
  color: #607D8B;
  background-color: transparent;
  text-decoration: line-through;
  height: 40px;
}

.vue-typer .custom.caret {
  display: none;
}

</style>
