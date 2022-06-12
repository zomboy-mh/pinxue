<template>
<div class="user">
  <div class="header">
    <div class="headerImg">

    </div>
    <div class="headerName">
      Zomboy
    </div>
  </div>
  <div class="centre">
      <div class="centreLeft">
        <div class="userCentreName">闪聘进度</div>
        <img class="userCentreNext" src="../assets/images/userCentreNext.png" alt="">
        <img class="userCentreLeftImg" src="../assets/images/userCentreLeft.png" alt="">
      </div>
      <div class="centreRight">
        <div class="userCentreName">我的简历</div>
        <img class="userCentreNext" src="../assets/images/userCentreNext.png" alt="">
        <img class="userCentreRightImg" src="../assets/images/userCentreRight.png" alt="">
      </div>
  </div>
  <div class="bottom">
      <div class="tabsList">
        <div class="tabItem">
          <div class="tabItemName">
            <img class="tabItemNameIcon" src="../assets/images/tabItemUserIcon.png" alt="">
            <div class="tabItemNameTxt">个人资料</div>
          </div>
          <img class="tabItemNext" src="../assets/images/next.png" alt="">
        </div>
      </div>
    <div class="tabsList">
      <div class="tabItem">
        <div class="tabItemName">
          <img class="tabItemNameIcon" src="../assets/images/tabItemRecordIcon.png" alt="">
          <div class="tabItemNameTxt">活动记录</div>
        </div>
        <img class="tabItemNext" src="../assets/images/next.png" alt="">
      </div>
    </div>
    <div class="tabsList">
      <div class="tabItem">
        <div class="tabItemName">
          <img class="tabItemNameIcon" src="../assets/images/customerService.png" alt="">
          <div class="tabItemNameTxt">联系客服</div>
        </div>
        <img class="tabItemNext" src="../assets/images/next.png" alt="">
      </div>
    </div>
    <div class="tabsList">
      <div class="tabItem">
        <div class="tabItemName">
          <img class="tabItemNameIcon" src="../assets/images/setup.png" alt="">
          <div class="tabItemNameTxt">设置</div>
        </div>
        <img class="tabItemNext" src="../assets/images/next.png" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'user'
}
</script>

<style scoped lang="scss">
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
  .user{
    background: #f5f6f7;
  }
.header{
  width: 100%;
  height:260px;
  background: url("../assets/images/02.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  .headerImg{
    margin-top: 30px;
    margin-left: 50px;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background: url("../assets/images/04.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .headerName{
    margin-top: 60px;
    margin-left: 30px;
    height: 60px;
    line-height: 60px;
    @include font_size($font_large);
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
    height: 200px;
    background: #ffff;
    .tabsList{
      .tabItem{
        /*width: 100%;*/
        height: 120px;
        background: #FFFFFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid #000;
        padding: 0 20px;
        .tabItemName{
          display: flex;
          .tabItemNameIcon{
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }
          .tabItemNameTxt{
            @include font_size($font_medium);
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
</style>
