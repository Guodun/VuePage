<template>
  <div>
    <top></top>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>11</h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
    <div style="padding:15px;">
      <x-button @click.native="showLoading()" type="primary">显示loading</x-button>
      <x-button @click.native="showPosition('middle')" type="primary">Middle</x-button>
      <x-button @click.native="showPosition('bottom')" type="primary">Bottom</x-button>
      <x-button @click.native="clickLass()" type="primary">Default</x-button>
    </div>
    <!--<div class="middle-icon" @click:="clickLass()">-->
      <!--<img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_msg.png">-->
      <!--<span slot="label">Explore</span>-->
    <!--</div>-->
    <!--<toast v-model="showPositionValue" type="text" :time="800"  text="Hello World" :position="position"></toast>-->
    <!--<actionsheet v-model="showPositionValue" show-cancel cancel-text="Sure？"></actionsheet>-->
    <actionsheet v-model="showPositionValue" theme="android" :menus="menu" ></actionsheet>
    <div  v-transfer-dom>
      <loading :show="show1" :text="text1"></loading>
    </div>
    <Loading :show="show1" :text="text1"></Loading>
    <LoadMore tip="as"></LoadMore>
    <Bottom></Bottom>
  </div>
</template>

<script>
import { LoadMore, Group, Cell, XButton, Toast, Actionsheet, Tabbar, TabbarItem, Loading, TransferDomDirective as TransferDom } from 'vux'
import Bottom from '../layouts/bottom.vue'
import Top from '../layouts/top.vue'

export default {
  directives: {
    TransferDom
  },
  components: {
    Group,
    Cell,
    XButton,
    Toast,
    Actionsheet,
    Tabbar,
    TabbarItem,
    Bottom,
    Top,
    Loading,
    LoadMore
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      position: 'default',
      showPositionValue: false,
      menu: {
        menu1: '北京烤鸭',
        menu2: '陕西油泼面',
        menu3: '西安肉夹馍'
      },
      show1: true,
      text1: 'Processing'
    }
  },
  methods: {
    showPosition: function (position) {
      this.position = position
      this.showPositionValue = true
    },
    clickLass: function (event) {
      alert('Hello ')
      if (event) {
        alert(event.target.tagName)
      }
    },
    showLoading: function () {
      this.$vux.loading.show({
        text: 'Loading'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
      }, 2000)
    },
    goIcon: function () {
//      alert('12311')
      this.$router.push('first')
      console.log(this.$router)
    }
  },
  computed: {
//      count () {
//          return store.state.count
//      }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
  .btn{
    margin-top: 10px;
  }
  .icontext{
    color: red;
  }
  .middle-icon{
    width: 70px;
    height: 70px;
    left:50%;
    bottom: 20px;
    position: fixed;
    z-index: 999;
    margin-left: -35px;
    margin-top: 270px;
    /*background-image: url('https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_msg.png');*/
    /*background-repeat: no-repeat;*/
  }
</style>
