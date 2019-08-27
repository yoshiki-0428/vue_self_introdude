<template lang="pug">
  .footer
    h2 My Social Links
      ul
        li
          md-icon public
          a(href='https://twitter.com/yoshiki__0428', target='_blank')
            | Twitter
        |
        li
          md-icon camera_alt
          a(href='https://www.instagram.com/yoshiki_04_28/', target='_blank')
            | Instagram
        |
        li
          md-icon face
          a(href='https://www.facebook.com/profile.php?id=100005275263520', target='_blank')
            | Facebook
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>

<style scoped lang="sass">
  .footer
    position: fixed
    bottom: 0
    height: 120px
    width: 100%

  ul
    list-style-type: none
    padding: 0

  li
    display: inline-block
    margin: 0 10px

  a
    color: #42b983
</style>
