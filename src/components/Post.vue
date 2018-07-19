<template>
  <div class="post">
    <h1>Qiita</h1>
    <hr />
    <md-content v-for="content in contents" v-bind:key="content.id" >
      <a
        :href="content.url"
        target="_blank">
        {{ content.title }}
      </a>
      <!-- TODO 無理矢理実装 -->
      <span class="md-subhead">{{ content.updated_at.split("T")[0] }}</span>
      <multi-tag :tags="content.tagsArray"/>
    </md-content><br />

    <h1>GitHub</h1>
    <hr />
  </div>
</template>

<script>
import MultiTag from './MultiTag'

export default {
  name: 'Post',
  data () {
    return {
      contents: []
    }
  },
  components: {
    'multi-tag': MultiTag
  },
  created () {
    var Qiita = require('qiita-js')

    // readonly access token
    Qiita.setToken('a2754f30de7226fd5fd9ae521d02e802546df263')
    Qiita.setEndpoint('https://qiita.com')

    Qiita.Resources.Item.list_user_items('yoshiki-0428', {per_page: 100}).then((item) => {
      item.forEach(content => {
        console.log(content)
        this.contents.push(content)
        content['tagsArray'] = content.tags.map(tag => tag.name)
      })
    })
  }
}
</script>
