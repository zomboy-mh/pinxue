<template>
<div class="user">
  <div class="header">
    <div class="headerBox">
      <img class="userHeaderBg" src="../../assets/images/userHeaderBg.png" alt="">
      <div class="headerImg">

      </div>
      <div class="headerName">
        Zomboy
      </div>
    </div>

  </div>
  <div class="centre">
      <div class="centreLeft" @click="partTimeProcessPath()">
        <div class="userCentreName">闪聘进度</div>
        <img class="userCentreNext" src="../../assets/images/userCentreNext.png" alt="">
        <img class="userCentreLeftImg" src="../../assets/images/userCentreLeft.png" alt="">
      </div>
      <div class="centreRight" @click="userPayPath()">
        <div class="userCentreName">我的钱包</div>
        <img class="userCentreNext" src="../../assets/images/userCentreNext.png" alt="">
        <img class="userCentreRightImg" src="../../assets/images/userCentreRight.png" alt="">
      </div>
  </div>
  <div class="bottom">
      <div class="tabsList" v-for="(item,index) in tabsList" :key="index">
        <div class="tabItem" @click="userDetailPath(index)">
          <div class="tabItemName">
            <img class="tabItemNameIcon" :src="item.tabItemNameIcon" alt="">
            <div class="tabItemNameTxt">{{item.tabItemNameTxt}}</div>
          </div>
          <img class="tabItemNext" src="../../assets/images/next.png" alt="">
        </div>
      </div>
  </div>
  <div class="bottoms"></div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'user',
  data: function () {
    return {
           tabsList:[
             {
               tabItemNameIcon:require('../../assets/images/tabItemUserIcon.png'),
               tabItemNameTxt:'个人资料'
             },
             {
               tabItemNameIcon:require('../../assets/images/tabItemRecordIcon.png'),
               tabItemNameTxt:'我的简历'
             },
             {
               tabItemNameIcon:require('../../assets/images/customerService.png'),
               tabItemNameTxt:'联系客服'
             },
             {
               tabItemNameIcon:require('../../assets/images/setup.png'),
               tabItemNameTxt:'设置'
             },
           ]
    }
  },
  methods: {
    getBanner () {
      console.log('数组', this.banners)
    },
    userPayPath(){
      this.$router.push('/user/userPay/')
    },
    userDetailPath(index) {
      if (index == 0) {
        this.$router.push('/user/userDetail/')
      } else if(index == 1)
      {

      }
    },
    partTimeProcessPath () {
      this.$router.push('/user/partTimeProcess/')
    }

  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
  .user{
    margin: 0;
    padding: 0;
    background: #f4f4f4;
    box-sizing: border-box;
    /*border-top: 1px solid #2cb4fc;*/
    .header{
      height:310px;
      /*padding: 50px 20px 0px 20px;*/
      /*margin-top: 50px;*/
      /*background: url("../assets/images/userHeaderBg.png") no-repeat;*/
      /*background:#2cb4fc;*/
      /*background:linear-gradient(180deg, #ffff, #2cb3fb);*/
      /*background-size: 100% 100%;*/
      /*box-sizing: border-box;*/
      .headerBox{
        /*background:linear-gradient(180deg, #2cb4fc, #ffffff);*/
        border-radius: 5px;
        /*background: url("../assets/images/userHeaderBg.png") no-repeat;*/
        /*background-size: 100% 100%;*/
        height: 100%;
        display: flex;
        position: relative;
        .userHeaderBg{
          position: absolute;
          left: 0;
          top: -20px;
          width: 100%;
          height: 360px;
        }
        .headerImg{
          margin-top: 80px;
          margin-left: 115px;
          width: 120px;
          height: 120px;
          border-radius: 60px;
          background: url("../../assets/images/04.jpg") no-repeat;
          background-size: 100% 100%;
          z-index: 1;
          border: 2px solid #FFFFFF;
        }
        .headerName{
          margin-top: 100px;
          margin-left: 30px;
          height: 60px;
          line-height: 60px;
          z-index: 1;
          color: #666666;
          @include font_size($font_large);
        }
      }

    }
    .centre{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      height: 130px;
      padding: 30px 5% 30px 5%;
      background: #FFFFFF;
      .centreLeft{
        width: 50%;
        height: 100%;
        border: 2px solid #cccccc;
        position: relative;
        overflow: hidden;
        display: flex;
        .userCentreName{
          margin-top: 40px;
          margin-left: 20px;
          font-weight: bold;
          @include font_size($font_large);
        }
        .userCentreNext{
          margin-top: 40px;
          margin-left: 3px;
          width: 40px;
          height: 40px;
        }
        .userCentreLeftImg{
          position: absolute;
          right: -18px;
          bottom: -40px;
          width: 160px;
          height: 160px;
          transform:rotate(20deg);
        }
      }
      .centreRight{
        width: 50%;
        height: 100%;
        border: 2px solid #cccccc;
        border-left-color: #FFFFFF;
        position: relative;
        overflow: hidden;
        display: flex;
        .userCentreName{
          margin-top: 40px;
          margin-left: 20px;
          font-weight: bold;
          @include font_size($font_large);
        }
        .userCentreNext{
          margin-top: 40px;
          margin-left: 3px;
          width: 40px;
          height: 40px;
        }
        .userCentreRightImg{
          position: absolute;
          right: -18px;
          bottom: -40px;
          width: 160px;
          height: 160px;
          transform:rotate(20deg);
        }
      }
      /*background: blue;*/

    }
    .bottom{
      margin-top: 20px;
      width: 100%;
      .tabsList{
        .tabItem{
          height: 100px;
          background: #FFFFFF;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom:1px solid #000;
          padding: 0 30px;
          .tabItemName{
            display: flex;
            .tabItemNameIcon{
              width: 50px;
              height: 50px;
              margin-right: 20px;
            }
            .tabItemNameTxt{
              @include font_size($font_medium_s);
              line-height: 50px;
              height: 50px;
            }
          }
          .tabItemNext{
            width: 50px;
            height: 50px;
          }
        }
      }
    }

  }

</style>
