<template>
  <div class="top">
    <v-ons-toolbar>
      <div class="center">
        Top Header
      </div>
    </v-ons-toolbar>
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
      msg: "Welcome to My self introducing site!! I'm yoshiki"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
