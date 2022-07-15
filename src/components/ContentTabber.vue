<template>
    <div class="contentTabber">
      <router-link tag="div" class="item" to="/home">
        <div class="div_box">
          <img src="../assets/images/day.png" alt="">
        </div>
        <div class="title">日结兼职</div>
      </router-link>
      <router-link tag="div" class="item" to="/fullTime">
        <div class="div_box">
          <img src="../assets/images/internship.png" alt="">
        </div>
        <div class="title">实习全职</div>
      </router-link>
      <router-link tag="div" class="item" to="/partTime">
        <div class="div_box">
          <img src="../assets/images/vacation.png" alt="">
        </div>
        <div class="title">寒假兼职</div>
      </router-link>
      <router-link tag="div" class="item" to="/user">
        <div class="div_box">
          <img src="../assets/images/vip.png" alt="">
        </div>
        <div class="title">会员用户</div>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "ContentTabber"
    }
</script>

<style scoped lang="scss">
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
  .contentTabber{
    width: 100%;
    height: 120px;
    @include bg_sub_color();
    display: flex;
    justify-content: space-around;
    /*position: fixed;*/
    /*position: relative;*/
    .item{
      margin: auto;
      .title{
        text-align: center;
        /*line-height: 160px;*/
        font-size: 15px;
        //@include font_size($font_medium_s);
        @include font_color()
      }
      &.router-link-active{
        title{
          @include font_active_color();
        }
      }
      .div_box{
        position: relative;
        margin: auto;
        width: 60px;
        height: 60px;
        border-radius: 30px;
        text-align: center;
        img{
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -15px;
          margin-top: -15px;
          width: 30px;
          height: 30px;
          //@include bg_color()
        }

      }
      &:nth-of-type(1){
        .div_box{
          background: #8750f9;
        }
      }
      &:nth-of-type(2){
        .div_box{
          background: #fa6380;
        }
      }
      &:nth-of-type(3){
        .div_box{
          background: #05cddd;
        }
      }
      &:nth-of-type(4){
        .div_box{
          background: #fcc728;
        }
      }

    }

  }
</style>
