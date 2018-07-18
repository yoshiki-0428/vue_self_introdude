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
      <!-- TODO multi-tagの引数を配列に変更 -->
      <multi-tag :tags="tagsStr"></multi-tag>
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
      contents: [],
      tagsStr: ""
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
        console.log(content.title)
        console.log(content.url)
        console.log(content.updated_at)
        console.log(content.tags)
        this.contents.push(content)
        var tagNames = []
        // TODO もっと省略できる
        content.tags.forEach(tag => tagNames.push(tag.name))
        this.tagsStr = tagNames.join('\n')
      })
    })
  }
}
</script>
