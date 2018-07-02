<template>
  <div id="app">
    <!-- とりあえず画像を配置 -->
    <md-card>
      <md-card-media-cover>
        <md-card-media md-ratio="16:9">
          <img :src="url" alt="Skyscraper">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">Welcome my page !!</span>
            <!-- ゆっくりしていってね！ -->
            <span class="md-subhead">Make yourself at home.</span>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
