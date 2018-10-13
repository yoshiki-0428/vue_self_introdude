<template>
  <div class="top">
    <three/>
    <!--<md-card class="top_picture">-->
      <!--<md-card-media md-ratio="16:9">-->
        <!--<img :src="url" alt="Skyscraper">-->
      <!--</md-card-media>-->

      <!--<md-card-area>-->
        <!--<md-card-header>-->
          <!--<span class="md-title">Welcome my page !!</span><br />-->
          <!--&lt;!&ndash; ゆっくりしていってね！ &ndash;&gt;-->
          <!--<span class="md-subhead">Make yourself at home.</span>-->
        <!--</md-card-header>-->

        <!--<md-card-content>-->
          <!--<p class="md-title">-->
            <!--Welcome to My self introducing site!! I'm yoshiki.-->
          <!--</p>-->
          <!--<span class="md-subhead">-->
            <!--I am Web Engineer in Japan. My main language is Java because I spent a devlopment time at 2 years.-->
          <!--</span>-->
        <!--</md-card-content>-->
      <!--</md-card-area>-->
    <!--</md-card>-->
    <div class="footer">
      <h2>My Social Links</h2>
      <ul>
        <li>
          <a
            href="https://twitter.com/yoshiki_pg0428"
            target="_blank"
          >
            <md-icon>public</md-icon>
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/yoshiki_04_28/"
            target="_blank"
          >
            <md-icon>camera_alt</md-icon>
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100005275263520"
            target="_blank"
          >
            <md-icon>face</md-icon>
            Facebook
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Three from './Three'

export default {
  name: 'Top',
  data () {
    return {
      url: 'https://lh3.googleusercontent.com/tKmPxrd93nnXLd0GFwZIvEAmrGgHz0QFP4CGNW0z_bGXCFXQVxg3-sZk5mqT5DmwKIG3IbNitlISgS-DCpMItuyGX21G7fhr8ccNLX_9pN8zi0VaTHx8jKrQ7MT8Hd_NinV-XXAQRJJhlAUClRCgvJBZSLcpo700djTFuKJEyCFpTJ8EQBBE2yd_tuEimthxaBlqRniXe6TDzolhJTdzbmj6TavnQ0EuBPtqb1uSvcCbtj1KJvVwTs69lOu3EdcVcHLTyUYsDjarKCXJ3lco6-v8SH0kr3q82evnziYppkgnPsJNyItwVh3jUBgsrdFP08IyIRoGE2j6tmwRzjLJTnyJ32PRKKHbBKRgBE7KXM2UPc2fhv8O__Opum6dGYK02_IYdloeqkfmBb4vqN8LSZcsxzansIEeGt7iVH7jPeLiHDttpB1LHmSthSMkHS-Mef13Tyfh8TXR-Yc1rhtVydPXZqTvA7utBa3pPaGXtjghwi3IXqIsykwA934ZuDH7HC60V-YwgG_6kehm56YJxXaugFcS0kmcQPZ5_9O61AyHTCdbIBsHvktbNxM2gv8sgeUi5PBNYAfbssmJAnQOb01OQjtZfynGpKC1nKIcUX-4czcwaZigfERz05SliLGkVhgUJ1F_5gLkbcc28btVh_eRAOwVV3eq=w1311-h983-no'
    }
  },
  components: {
    'three': Three
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  margin-bottom: 5%;
}

.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
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
