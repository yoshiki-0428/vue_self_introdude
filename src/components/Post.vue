<template lang="pug">
  div
    .main_title.main_title__content(v-if=qiitaContents)
      | Qiita
    .md-card__list
      md-card.content_card(
        v-for='content in qiitaContents'
        v-bind:key='content.id'
      )
        md-card-header-text
          a.md-title.japanese-font(
            :href='content.url'
            target='_brank'
            style='font-size: 15px'
          ) {{ content.title }}
        md-card-content(v-if='content.tagsArray')
          multi-tag(:tags='content.tagsArray')
        .like-qiita
          md-icon thumb_up
          .like-qiita__count {{ content.likes_count }}
    .main_title.main_title__content(v-if=githubContents)
      | GitHub
    .md-card__list
      md-card.content_card(
        v-for='content in githubContents'
        v-bind:key='content.id'
      )
        md-card-header-text
          a.md-title(:href='content.html_url', target='_brank') {{ content.name }}
          |
          p
          | Updated:
          b {{ content.updated_at.split(&quot;T&quot;)[0] }}
          |
          p(v-if="content.language")
          | Language:
          b {{ content.language }}
        |
        md-card-content(v-if='content.description')
          span.md-subhead {{ content.description }}
</template>

<script>
import MultiTag from './MultiTag'

export default {
  name: 'Post',
  data () {
    return {
      qiitaContents: [],
      githubContents: []
    }
  },
  components: {
    'multi-tag': MultiTag
  },
  created () {
    this.$eventHub.$emit('change-select-tab', 'tab-post')
    this.getGithubRepos()
    this.getQiita()
  },
  methods: {
    getQiita () {
      const Qiita = require('qiita-js')

      // readonly access token
      Qiita.setToken('a2754f30de7226fd5fd9ae521d02e802546df263')
      Qiita.setEndpoint('https://qiita.com')

      Qiita.Resources.Item.list_user_items('yoshiki-0428', {per_page: 100}).then((item) => {
        item.forEach(content => {
          this.qiitaContents.push(content)
          content['tagsArray'] = content.tags.map(tag => tag.name)
        })
      })
    },
    getGithubRepos () {
      const axios = require('axios')
      axios.get('https://api.github.com/users/yoshiki-0428/repos')
        .then(response => {
          this.githubContents = response.data.sort((a, b) => a.updated_at < b.updated_at ? 1 : -1)
        }).catch(err => {
          console.log('err:', err)
        })
    }
  }
}
</script>

<style scoped lang="sass">
.md-card-header-text
  margin: 5px

a.md-title
  text-decoration: underline

.like-qiita
  display: flex
  float: right
  margin: 10px
  &__count
    margin-left: 5px

.content_card
  margin-right: 5%
  margin-left: 5%
  margin-bottom: 10px

.md-card__list
  padding: 0

span
  display: flex
  flex-wrap: wrap

.md-card
  display: inline-block
  vertical-align: top
  border-radius: 10px

@media screen and (min-width: 961px)
  .md-card
    margin: 0 1% 2% 1%
    width: 31%
    min-height: 150px

@media screen and (max-width: 960px)
  .md-card
    margin: 0 2% 2% 2%
    width: 46%

@media screen and (max-width: 400px)
  .md-card
    margin: 0 5% 3% 5%
    width: 90%

</style>
