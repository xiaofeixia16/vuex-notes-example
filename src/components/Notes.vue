<template lang="html">
  <div class="ui container notes">
      <h4 class="ui horizontal divider header">
        <i class="paw icon"></i>
        Ninghao Notes App _ Vue.js
      </h4>
      <a class="ui right floated basic violet button"
      @click="created">添加笔记</a>
      <div class="ui divided items mrg">
          <Note
            v-for="entity in entities"
            v-bind:entity="entity">
            </Note>
        <span class="ui small disabled header"
        v-if="!this.entities.length">
        还没有笔记，请按下 '添加笔记' 按钮。
        </span>
      </div>
    </div>
</template>
<script>
    import Note from './Note'
    import { mapGetters, mapActions } from 'vuex'
    export default {
      data () {
        return {
          open: false
        }
      },
      created () {
        // console.log(this.entities)
        this.initial()
      },
      methods: {
        create () {
          // this.created()
        },
        ...mapActions([
          'initial', 'created'
        ])
      },
      computed: {
        ...mapGetters([
          'entities'
        ])
      },
      components: {
        Note
      }
    }
</script>
<style lang="css">
.notes {
  margin-top: 32px;
}

.notes .ui textarea {
  border: none;
  font-size: 16px;
  padding: 0;
  margin: 32px 0;
}

.ui.items > .item > .content > .header {
  display: block;
  cursor: pointer;
}

.mrg {
  margin-top: 20px;
}
</style>
