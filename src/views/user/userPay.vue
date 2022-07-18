<template>
  <div class="detail">
    <userHeader :title="headerName" :detailFrom="detailFrom"></userHeader>
    <div class="card">
      <img class="cardImg" src="../../assets/images/userPayCardBg.png" alt="">
      <div class="payNumb">
          <div class="payText">余额</div>
          <div class="payValue">1000RMB</div>

      </div>
      <div class="userRealBtn" @click="goUserReal">已认证 ></div>
      <div class="cardBtn">
        <div class="cardBtnLeft">充值</div>
        <div class="cardBtnRight">提现</div>
      </div>
    </div>
    <div class="payHistory">
        <div class="payHistoryName">账户变动明细</div>
        <div class="payHistoryItemBox">
          <div class="payHistoryItem1">
            <div class="payHistoryItemLeft">
              <img class="itemImg" src="../../assets/images/payInLogo.png" alt="">
              <div class="ItemLeft">
                <div class="ItemLeftTxt">收入</div>
                <div class="ItemLeftTime">2022-11-30 11:20:60</div>
              </div>
            </div>
            <div class="payHistoryItemRight">
              +100元
            </div>
          </div>
          <div class="payHistoryItem">
            <div class="payHistoryItemLeft">
              <img class="itemImg" src="../../assets/images/payOutLogo.png" alt="">
              <div class="ItemLeft">
                <div class="ItemLeftTxt">提现</div>
                <div class="ItemLeftTime">2022-11-30 11:20:60</div>
              </div>
            </div>
            <div class="payHistoryItemRight">
              -100元
            </div>
          </div>
          <div class="payHistoryItem">
            <div class="payHistoryItemLeft">
              <img class="itemImg" src="../../assets/images/payOutLogo.png" alt="">
              <div class="ItemLeft">
                <div class="ItemLeftTxt">提现</div>
                <div class="ItemLeftTime">2022-11-30 11:20:60</div>
              </div>
            </div>
            <div class="payHistoryItemRight">
              -100元
            </div>
          </div>
          <div class="payHistoryItem">
            <div class="payHistoryItemLeft">
              <img class="itemImg" src="../../assets/images/payOutLogo.png" alt="">
              <div class="ItemLeft">
                <div class="ItemLeftTxt">提现</div>
                <div class="ItemLeftTime">2022-11-30 11:20:60</div>
              </div>
            </div>
            <div class="payHistoryItemRight">
              -100元
            </div>
          </div>
          <div class="payHistoryItem1">
            <div class="payHistoryItemLeft">
              <img class="itemImg" src="../../assets/images/payInLogo.png" alt="">
              <div class="ItemLeft">
                <div class="ItemLeftTxt">收入</div>
                <div class="ItemLeftTime">2022-11-30 11:20:60</div>
              </div>
            </div>
            <div class="payHistoryItemRight">
              +100元
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  // 这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json 文件，图片文件等等）
  import userHeader from './userHeader'

  export default {
    // import 引入的组件需要注入到对象中才能使用
    components: {
      userHeader
    },
    props: {},
    name: "userPay",
    data: function () {
      return {
        headerName: '我的钱包',
        detailFrom:{}
      }
    },
    // 计算属性 类似于 data 概念
    computed: {},
    // 监控 data 中的数据变化
    watch: {},
    // 方法集合
    methods: {
      goUserReal(){
        this.$router.push('/user/userReal/')
      }
    },
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {

    },
    beforeCreate() {
    },
    beforeMount() {
    }, // 生命周期 - 挂载之前
    beforeUpdate() {
    }, // 生命周期 - 更新之前
    updated() {
    }, // 生命周期 - 更新之后
    beforeDestroy() {
    }, // 生命周期 - 销毁之前
    destroyed() {
    }, // 生命周期 - 销毁完成
    activated() {
    } // 如果页面有 keep-alive 缓存功能,这个函数会触发
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/main";
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
  .card{
    width: 90%;
    margin-left: 5%;
    margin-top: 20px;
    position: relative;
    .payNumb{
      width: 50%;
      position: absolute;
      left: 20px;
      top: 20px;
      height: 200px;
      .payText{
        font-size: 20px;
      }
      .payValue{
        font-size: 30px;
        margin-top: 40px;
      }

    }
    .userRealBtn{
      position: absolute;
      right: 20px;
      top: 10px;
      padding: 0 15px;
      height: 30px;
      border-radius: 15px;
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      color: #FFFFFF;
      background: linear-gradient(90deg, #d70f7d, #2d0ac9);
    }
    .cardImg{
      width: 100%;
    }
    .cardBtn{
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .cardBtnLeft{
        width: 50%;
        height: 60px;
        background: #22d3dd;
        text-align: center;
        line-height: 60px;
        color: #ffffff;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        font-size: 20px;
        //@include font_size($font_large);
      }
      .cardBtnRight{
        width: 50%;
        height: 60px;
        background: #fb9e59;
        text-align: center;
        line-height: 60px;
        color: #ffffff;
        font-size: 20px;
        //@include font_size($font_large);
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
      }
    }
  }
  .payHistory{
    width: 90%;
    margin-left: 5%;
    margin-top: 20px;
    .payHistoryName{
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      color: #616060;
    }
    .payHistoryItemBox{
      width: 100%;
      height: 1050px;
      overflow: auto;
      .payHistoryItem1,.payHistoryItem{
        width: 100%;
        height: 66px;
        display: flex;
        justify-content: space-between;
        /*background: linear-gradient(90deg, #928d8d, #f4f4f4);*/
        background: linear-gradient(90deg, #fb9e59, #f4f4f4);
        align-items: center;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        margin-bottom: 10px;
        .payHistoryItemLeft{
          display: flex;
          color: #000000;
          .itemImg{
            width: 40px;
            height: 40px;
            /*margin-top: 5px;*/
            margin-left: 10px;
          }
          .ItemLeft{
            margin-left: 10px;
            .ItemLeftTxt{
              font-size: 16px;
              //@include font_size($font_medium);
            }
            .ItemLeftTime{
              margin-top: 10px;
              font-size: 15px;
              //@include font_size($font_medium);
            }
          }
        }
        .payHistoryItemRight{
          font-size: 20px;
          //@include font_size($font_large);
          color: #000000;
        }
      }
      .payHistoryItem1{
        background: linear-gradient(90deg,#f4f4f4 ,#22d3dd);
      }
    }

  }
</style>
