<template>
  <div class="detail">
    <SubHeader :title="jobList[0].name"></SubHeader>
    <div class="detailBox">
        <div class="headPortrait">
          <div>个人头像</div>
          <img class="headPortraitImg" src="../../assets/images/04.jpg" alt="">
        </div>
      <div class="detailItem">
        <div class="detailItemTxt">昵称</div>
        <div class="detailItemValue">王强</div>
      </div>
    </div>
  </div>
</template>

<script>
  import SubHeader from '../../components/SubHeader'
    export default {
        name: "userDetail",
      components: {
        SubHeader
      },
      data: function () {
        return {
          jobList: [{
            name: '个人信息'
          }]
        }
      },
  methods: {
   }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
  .detail {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background: #f3f3f3;
    .detailBox{
      width: 96%;
      margin: 10px 3% 100px 3%;
      background: #FFFFFF;
      border-radius: 5px;
      .headPortrait{
        width: 96%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        line-height: 100px;
        padding: 12px;
        @include font_size($font_large);
        border-bottom: 1px solid #bdb2b2;
        .headPortraitImg{
          width: 90px;
          height: 90px;
          border-radius: 45px;
          margin-right: 10px;
        }
      }
      .detailItem{
        width: 96%;
        padding: 12px;
        height: 80px;
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        line-height: 80px;
        @include font_size($font_large);
      }
    }
  }
</style>
