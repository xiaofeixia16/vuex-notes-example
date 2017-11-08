<template lang="html">
  <div class="ui form">
      <div class="field">
        <textarea rows="5"
          v-model="entity.body"
          v-on:input="update(entity)"
          placeholder="写点东西..."></textarea>
      </div>
    </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    created () {
      // console.log(this.entity)
      // this.update(this.entity)
    },
    props: [
      'entity'
    ],
    methods: {
      ...mapActions(['update'])
    }
  }
</script>
<style lang="css">

</style>
