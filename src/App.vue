<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

var Child = {
  template: '<div>A custom component!</div>'
}
export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem,
    'my-component': Child
  }
}
console.log(this.$store)
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
