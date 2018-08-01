<template>
  <div class="post">
    <h1>
      <a href="https://qiita.com/yoshiki-0428" target="_brank">Qiita</a>
    </h1>
    <hr />
    <md-content v-for="content in qiitaContents" v-bind:key="content.id" >
      <a
        :href="content.url"
        target="_blank">
        {{ content.title }}
      </a>
      <span class="md-subhead">{{ content.updated_at.split("T")[0] }}</span>
      <multi-tag :tags="content.tagsArray"/>
    </md-content><br />

    <h1>
      <a href="https://github.com/yoshiki-0428" target="_brank">GitHub</a>
    </h1>
    <hr />

    <div class="github_content" v-for="content in githubContents" v-bind:key="content.id" >
      <md-card class="content_card">
        <md-card-header>
          <a class="md-title" :href="content.html_url" target="_brank">{{ content.name }}</a><br />
          <span>updated: {{ content.updated_at.split("T")[0] }}, </span>
          <span>language: {{ content.language }}</span>
        </md-card-header>
        <md-card-content v-if="content.description">
          <span class="md-subhead">{{ content.description }}</span>
        </md-card-content>
      </md-card>
    </div>
  </div>
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
    console.log(this.githubContents)
    this.getQiita()
    console.log(this.qiitaContents)

  },
  methods: {
    getGithubRepos () {
      const axios = require('axios')
      axios.get('https://api.github.com/users/yoshiki-0428/repos')
        .then(response => {
          console.log('res', response)
          this.githubContents = response.data.sort((a, b) => a.updated_at < b.updated_at ? 1 : -1)

        }).catch(err => {
          console.log('err:', err)
      })
    },
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
