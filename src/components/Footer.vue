<template>
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
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer{
    position: fixed;
    bottom: 0;
    height: 88px;
    width: 100%;
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
