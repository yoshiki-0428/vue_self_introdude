<template lang="pug">
  .top
    .content
      img.logo(src='../assets/logo.png')
      |
      h1.name
        a(href='https://github.com/yoshiki-0428') Yoshiki-0428
      |
      h1 I'm a developer / Web Programmer
      |
      h1 Welcome my web page
      // TODO スクロール部分の実装
      // <h1 class="scroll">
      // <md-icon class="md-size-2x">keyboard_arrow_down</md-icon>
      // Scroll Down
      // <md-icon class="md-size-2x">keyboard_arrow_down</md-icon>
      // </h1>
    |
    back-ground
    main-footer
</template>

<script>
import BackGround from './BackGround'
import MainFooter from './MainFooter'

export default {
  name: 'Top',
  components: {
    BackGround,
    MainFooter
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

</style>
