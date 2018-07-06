<template>
  <div class="top">
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

    <h1>Welcome to My self introducing site!! I'm yoshiki</h1>
    <h2>I am Web Engineer in Japan. My main language is Java because I spent a devlopment time at 2 years...</h2>
    <h2>Essential My Social Links</h2>
    <ul>
      <li>
        <a
          href="https://twitter.com/yoshiki_pg0428"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/yoshiki_04_28/"
          target="_blank"
        >
          Instagram
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/profile.php?id=100005275263520"
          target="_blank"
        >
          Facebook
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      url: 'https://lh3.googleusercontent.com/tKmPxrd93nnXLd0GFwZIvEAmrGgHz0QFP4CGNW0z_bGXCFXQVxg3-sZk5mqT5DmwKIG3IbNitlISgS-DCpMItuyGX21G7fhr8ccNLX_9pN8zi0VaTHx8jKrQ7MT8Hd_NinV-XXAQRJJhlAUClRCgvJBZSLcpo700djTFuKJEyCFpTJ8EQBBE2yd_tuEimthxaBlqRniXe6TDzolhJTdzbmj6TavnQ0EuBPtqb1uSvcCbtj1KJvVwTs69lOu3EdcVcHLTyUYsDjarKCXJ3lco6-v8SH0kr3q82evnziYppkgnPsJNyItwVh3jUBgsrdFP08IyIRoGE2j6tmwRzjLJTnyJ32PRKKHbBKRgBE7KXM2UPc2fhv8O__Opum6dGYK02_IYdloeqkfmBb4vqN8LSZcsxzansIEeGt7iVH7jPeLiHDttpB1LHmSthSMkHS-Mef13Tyfh8TXR-Yc1rhtVydPXZqTvA7utBa3pPaGXtjghwi3IXqIsykwA934ZuDH7HC60V-YwgG_6kehm56YJxXaugFcS0kmcQPZ5_9O61AyHTCdbIBsHvktbNxM2gv8sgeUi5PBNYAfbssmJAnQOb01OQjtZfynGpKC1nKIcUX-4czcwaZigfERz05SliLGkVhgUJ1F_5gLkbcc28btVh_eRAOwVV3eq=w1311-h983-no'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
