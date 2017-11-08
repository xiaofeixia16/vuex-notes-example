<template lang="html">

  <div class="item">
    <div class="meta">
      {{ updated(entity) }}
    </div>
    <div class="content">
      <div class="header" @click="open = !open">{{ header(entity) || '新建笔记'}}</div>
      <div class="extra">
        <Editor v-if="open" v-bind:entity="entity"></Editor>
        {{ words(entity) + '字节' }}
        <i class="right floated trash outline icon"
          @click="destory(entity)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
    import Editor from './Editor'
    import { mapGetters, mapActions } from 'vuex'
    export default {
      data () {
        return {
          open: false
        }
      },
      props: [
        'entity'
      ],
      methods: {
        ...mapActions(['destory'])
      },
      computed: {
        ...mapGetters([
          'updated', 'words', 'header'
        ])
      },
      components: {
        Editor
      }
    }
</script>
<style lang="css">
.ui.items > .item > .meta {
  width: 88px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 0;
  margin-bottom: 16px;
}

.trash.icon {
  cursor: pointer;
}

</style>
