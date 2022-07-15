<template>
    <div class="tabbar">
      <router-link tag="div" class="item" to="/home">
        <img src="../assets/images/home.png" alt="">
        <span>首页</span>
      </router-link>
      <router-link tag="div" class="item" to="/fullTime">
        <img src="../assets/images/fulltime.png" alt="">
        <span>兼职</span>
      </router-link>
      <router-link tag="div" class="item" to="/partTime">
        <img src="../assets/images/parttime.png" alt="">
        <span>全职</span>
      </router-link>
      <router-link tag="div" class="item" to="/user">
        <img src="../assets/images/user.png" alt="">
        <span>个人中心</span>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style scoped lang="scss">
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
.tabbar{
  width: 100%;
  height: 62px;
  @include bg_sub_color();
  display: flex;
  justify-content: space-around;
  position: fixed;
  /*position: relative;*/
  z-index: 999;
  left: 0;
  bottom: 0;
  .item{
    position: relative;
    span{
      line-height: 96px;
      font-size: 18px;
      //@include font_size($font_medium_s);
      @include font_color()
    }
    &.router-link-active{
      span{
        @include font_active_color();
      }

      border-bottom: 5px solid #000;
      /*border-top: 5px solid #000;*/
      @include border_color()
    }
    img{
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -15px;
      margin-top: -20px;
      width: 30px;
      height: 30px;
      //@include bg_color()
    }
  }
}
</style>
