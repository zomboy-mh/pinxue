<template>
<div class="user">
  <div class="header">
    <div class="headerBox">
      <img class="userHeaderBg" src="../../assets/images/userHeaderBg.png" alt="">
      <img class="headerImg" :src="this.userImageUrl" alt="">
      <div class="headerName">
        {{this.nickName}}
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
import {mapGetters} from "vuex";

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
  computed:{
    ...mapGetters([
      'userPhone',
      'nickName',
      'userImageUrl'
    ])
  },
  methods: {
    getBanner () {
      console.log('数组', this.banners)
    },
    userPayPath(){
      this.$router.push('/user/userPay/')
    },
    userDetailPath(index) {
      if (index === 0) {
        this.$router.push('/user/userDetail/')
      } else if(index === 1){

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
    .header{
      height:200px;
      .headerBox{
        border-radius: 5px;
        height: 100%;
        display: flex;
        position: relative;
        .userHeaderBg{
          position: absolute;
          left: 0;
          top: -10px;
          width: 100%;
          /*height: 250px;*/
        }
        .headerImg{
          margin-top: 50px;
          margin-left: 70px;
          width: 70px;
          height: 70px;
          border-radius: 35px;
          z-index: 1;
          border: 2px solid #FFFFFF;
        }
        .headerName{
          margin-top: 55px;
          margin-left: 25px;
          height: 60px;
          line-height: 60px;
          z-index: 1;
          color: #666666;
          font-size: 22px;
          //@include font_size($font_large);
        }
      }

    }
    .centre{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      height: 100px;
      padding: 20px 5% 20px 5%;
      background: #FFFFFF;
      .centreLeft{
        width: 50%;
        height: 100%;
        border: 2px solid #cccccc;
        position: relative;
        overflow: hidden;
        display: flex;
        .userCentreName{
          margin-top: 25px;
          margin-left: 15px;
          font-weight: bold;
          font-size: 20px;
          //@include font_size($font_large);
        }
        .userCentreNext{
          margin-top: 25px;
          /*margin-left: 5px;*/
          width: 30px;
          height: 30px;
        }
        .userCentreLeftImg{
          position: absolute;
          right: -20px;
          bottom: -30px;
          width: 120px;
          height: 120px;
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
          margin-top: 25px;
          margin-left: 15px;
          font-weight: bold;
          font-size: 20px;
          //@include font_size($font_large);
        }
        .userCentreNext{
          margin-top: 25px;
          /*margin-left: 5px;*/
          width: 30px;
          height: 30px;
        }
        .userCentreRightImg{
          position: absolute;
          right: -20px;
          bottom: -30px;
          width: 120px;
          height: 120px;
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
          height: 72px;
          background: #FFFFFF;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          border-bottom:1px solid #000;
          padding: 0 30px;
          .tabItemName{
            display: flex;
            text-align: center;
            align-items: center;
            .tabItemNameIcon{
              width: 40px;
              height: 40px;

              margin-right: 15px;
            }
            .tabItemNameTxt{
              font-size: 18px;
              //@include font_size($font_medium_s);
              line-height: 50px;
              height: 50px;
            }
          }
          .tabItemNext{
            width: 40px;
            height:40px;
          }
        }
      }
    }

  }

</style>
