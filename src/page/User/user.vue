<template>
  <div>
    {{msg1}}
    <div>
      <p v-on:click="pClick">{{msg2}}</p>
      test3 test User
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg1: 'test',
      msg2: 'test2'
    }
  },
  methods: {
    pClick () {
      this.$router.push('/')
    }
  }
}
</script>
<style>


</style>
