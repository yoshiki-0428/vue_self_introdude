<template>
  <div class="top">
    <div class="top-content">
      <img class="logo" src="../assets/logo.png"/>
      <h1 class="name">
        <a href="https://github.com/yoshiki-0428">Yoshiki-0428</a>
      </h1>
      <h1>I'm a developer / Web Programmer</h1>
      <h1>Welcome my web page</h1>
    </div>
    <back-ground/>
    <y-footer/>
  </div>

</template>

<script>
import backGround from './BackGround'
import footer from './Footer'

export default {
  name: 'Top',
  components: {
    'back-ground': backGround,
    'y-footer': footer
  }
}
</script>

<style scoped>
.top {
  margin-bottom: 5%;
  alignment: center;
}

.top-content {
  width: 100%;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  position: fixed;
}

.logo {
  width: 100px;
  height: 100px;
}

.name {
  font-size: 40px;
  margin-top: 10px;
}

.name:hover {
  text-decoration: underline;
}
</style>
