<template>
  <div id="app">
    <a class="iconBtn" @click="goToView2()">
      <div class="weui-tabbar__icon">
        <img src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
        <p class="weui-tabbar__label">other</p>
      </div>
    </a>
    <tabbar>
      <tabbar-item @click.native="goToView1()">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot class="hide" @click.native="goToView2()">

      </tabbar-item>
      <tabbar-item selected>
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png">
        <span slot="label">Explore</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default {
//    name: 'app',
    components: {
      Tabbar,
      TabbarItem
    },
    methods: {
      goToView1: function () {
        console.log(this.$router)
        this.$router.push('/HOME')
      },
      goToView2: function () {
        console.log(this.$router)
        this.$router.push('/first')
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
  .iconBtn{
    background-color: #F7F7FA;
    width: 80px;
    height: 80px;
    position: fixed;
    margin: auto;
    left:0;
    right:0;
    bottom:0;
    z-index: 1000;
  }
</style>
