<template lang="pug">
  .main_title.main_title__content
    a(href='https://qiita.com/yoshiki-0428', target='_brank') Qiita
    |
    hr
    |
    .github_content(v-for='content in qiitaContents', v-bind:key='content.id')
      md-card.content_card
        md-card-header
          a.md-title.japanese-font(:href='content.url', target='_brank', style='font-size: 15px') {{ content.title }}
          br
          |
          span updated: {{ content.updated_at.split(&quot;T&quot;)[0] }},
          |
          span language: {{ content.language }}
        |
        md-card-content(v-if='content.tagsArray')
          multi-tag(:tags='content.tagsArray')
    |
    .main_title.main_title__content
      a(href='https://github.com/yoshiki-0428', target='_brank') GitHub
    |
    hr
    |
    .github_content(v-for='content in githubContents', v-bind:key='content.id')
      md-card.content_card
        md-card-header
          a.md-title(:href='content.html_url', target='_brank') {{ content.name }}
          br
          |
          span updated: {{ content.updated_at.split(&quot;T&quot;)[0] }},
          |
          span language: {{ content.language }}
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
          console.log('res', response)
          this.githubContents = response.data.sort((a, b) => a.updated_at < b.updated_at ? 1 : -1)
        }).catch(err => {
          console.log('err:', err)
        })
    }
  }
}
</script>

<style scoped>
.content_card {
  margin-right: 5%;
  margin-left: 5%;
  margin-bottom: 10px;
}
</style>
