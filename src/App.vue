<template>
  <div id="app">
    <md-tabs md-alignment="centered">
      <md-tab id="tab-home" md-icon="home" md-label="top" to="/top"></md-tab>
      <md-tab id="tab-pages" md-icon="play_arrow" md-label="story" to="/story"></md-tab>
      <md-tab id="tab-posts" md-icon="pages" md-label="Posts" to="/post"></md-tab>
      <md-tab id="tab-favorites" md-icon="contacts" md-label="Contact"></md-tab>
    </md-tabs>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      url: 'https://lh3.googleusercontent.com/tKmPxrd93nnXLd0GFwZIvEAmrGgHz0QFP4CGNW0z_bGXCFXQVxg3-sZk5mqT5DmwKIG3IbNitlISgS-DCpMItuyGX21G7fhr8ccNLX_9pN8zi0VaTHx8jKrQ7MT8Hd_NinV-XXAQRJJhlAUClRCgvJBZSLcpo700djTFuKJEyCFpTJ8EQBBE2yd_tuEimthxaBlqRniXe6TDzolhJTdzbmj6TavnQ0EuBPtqb1uSvcCbtj1KJvVwTs69lOu3EdcVcHLTyUYsDjarKCXJ3lco6-v8SH0kr3q82evnziYppkgnPsJNyItwVh3jUBgsrdFP08IyIRoGE2j6tmwRzjLJTnyJ32PRKKHbBKRgBE7KXM2UPc2fhv8O__Opum6dGYK02_IYdloeqkfmBb4vqN8LSZcsxzansIEeGt7iVH7jPeLiHDttpB1LHmSthSMkHS-Mef13Tyfh8TXR-Yc1rhtVydPXZqTvA7utBa3pPaGXtjghwi3IXqIsykwA934ZuDH7HC60V-YwgG_6kehm56YJxXaugFcS0kmcQPZ5_9O61AyHTCdbIBsHvktbNxM2gv8sgeUi5PBNYAfbssmJAnQOb01OQjtZfynGpKC1nKIcUX-4czcwaZigfERz05SliLGkVhgUJ1F_5gLkbcc28btVh_eRAOwVV3eq=w1311-h983-no'
    }
  }
}
</script>

<style>
.top_picture {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
