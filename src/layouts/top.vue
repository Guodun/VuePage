<template>
  <div class="top">
    <span @click="goBack()"><  返回</span>
  </div>
</template>

<script type="text/javascript">
  export default{
    methods: {
      goBack: function () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  .top{
    background-color: rgb(50,72,94);
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: white;
  }
  .top span{
    display: block;
    height: 100%;
    width: 15%;
  }
</style>
