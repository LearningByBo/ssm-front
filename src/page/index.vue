<template>
  <div>
    {{msg1}}
    <div>
      <p v-on:click="pClick">{{msg2}}</p>
      <p v-on:click="getValueFun">test3</p>
    </div>
    {{getValue}}
  </div>
</template>
<script>
import {getUserInfo} from '../api/index.js'
export default {
  data () {
    return {
      msg1: 'test',
      msg2: 'test2',
      getValue: ''
    }
  },
  methods:{
  	pClick () {
  		this.$router.push('/user')
  	},
  	getValueFun () {
      getUserInfo({id:'1'}).then(res => {
        this.getValue = res.result
      })
  	}
  }
}
</script>
<style>


</style>
