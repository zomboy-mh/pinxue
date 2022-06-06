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
        <img class="userCentreRightImg" src="../assets/images/userCentreRight.png" alt="">
      </div>
      <div class="centreRight"></div>
  </div>
  <div class="bottom">

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
    height: 150px;
    padding: 30px 5% 30px 5%;
    background: #FFFFFF;
    .centreLeft{
      width: 50%;
      height: 100%;
      border: 1px solid #000;
      position: relative;
      overflow: hidden;
      .userCentreRightImg{
        position: absolute;
        right: -20px;
        bottom: -30px;
        width: 160px;
        height: 160px;
        transform:rotate(20deg);
      }
    }
    .centreRight{
      width: 50%;
      height: 100%;
      border: 1px solid #000;
      border-left-color: #FFFFFF;
    }
    /*background: blue;*/

  }
  .bottom{
    margin-top: 20px;
    width: 100%;
    height: 200px;
    background: #ffff;
  }
</style>
