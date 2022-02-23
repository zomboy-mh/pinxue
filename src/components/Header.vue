<template>
    <div class="header" @click="changeTheme">
      <div class="header-left">
<!--        <img src="../assets/images/logo.png" alt="">-->
      </div>
      <p class="header-title">品学兼优</p>
      <div class="header-right">
        <img src="../assets/images/user.png" alt="">
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      themes: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },
  methods: {
    changeTheme () {
      this.index++
      if (this.index >= this.themes.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.themes[this.index])
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
  .header{
    width: 100%;
    height: 100px;
    @include bg_color();
    display: flex;
    justify-content: space-between;
    .header-left,.header-right{
      width: 70px;
      height: 70px;
      /*background: #000;*/
      margin-top: 18px;
      img{
        width: 60px;
        height: 60px;
      }
    }
    .header-title{
      text-align: center;
      line-height: 100px;
      color: #fff;
      font-weight: bold;
      @include font_size($font_medium)
    }
  }
</style>
