<template>
  <div class="detail">
    <SubHeader :title="jobList[0].name"></SubHeader>
    <div class="detailBox">
      <div class="head">
        <div class="jobName">范恩无任务话务员2.25</div>
        <div class="jobPay">
          <div>120</div>
          <h3>元/天</h3>
        </div>
        <div class="publish">
          <div class="publishPlace">
            <img class="placeIcon" src="../assets/images/didian.png" alt="">
            <p>太原</p>
          </div>
          <div class="publishTime">
            <img class="placeTimeIcon" src="../assets/images/placeTimeIcon.png" alt="">
            <p>17小时前</p>
          </div>
        </div>
        <div class="jobInvite">
          <div class="jobInviteLeft">邀请好友做兼职</div>
          <div class="jobInviteRight">
            <img src="../assets/images/yaoqing.png" alt="">
            <div>邀请</div>
          </div>
        </div>
        <div class="jobDetail">
          <div class="jobType">
            <div class="jobTypeName">工作类型：</div>
            <div class="jobValue">其他</div>
          </div>
          <div class="jobType">
            <div class="jobTypeName">需求人数：</div>
            <div class="jobValue">30人，男女不限</div>
          </div>
          <div class="jobType">
            <div class="jobTypeName">报名人数：</div>
            <div class="jobValue">30人</div>
            <div class="jobTypeName">录用人数：</div>
            <div class="jobValue">28人</div>
          </div>
          <div class="jobType">
            <div class="jobTypeName">工作日期：</div>
            <div class="jobValue">05-30~06-02，共3天，不可连做</div>
          </div>
          <div class="jobType">
            <div class="jobTypeName">工作时间：</div>
            <div class="jobValue">08:00-19:00</div>
          </div>
          <div class="jobType">
            <div class="jobTypeName"> 时间备注：</div>
            <div class="jobValue">休息一小时</div>
          </div>
          <div class="jobType">
            <div class="jobTypeName">工作薪资：</div>
            <div class="jobValue">完工结</div>
          </div>
          <div class="jobPlace">
            <div class="jobPlaceName">工作地址：浦沿街道-观邸国际</div>
            <img class="jobPlaceIcon" src="../assets/images/jobPlaceIcon.png" alt="">
          </div>
        </div>
      </div>
      <div class="center">
        <div class="jobDetailTitle">
          <img class="jobDetailImg" src="../assets/images/jobDetail.png" alt="">
          <div class="">职位详情</div>
        </div>
        <div class="jobDetailBody">
          <div class="jobDetailType">岗位职责</div>
          <div class="jobDetailType">花艺师助理：帮忙包花，可以教5人</div>
          <div class="jobDetailType">人员要求：身份不限</div>
          <div class="jobDetailType">薪资福利：111111</div>
          <div class="jobDetailType">工作内容：888888</div>
          <div class="jobDetailType">工作地点：山西太原杏花岭</div>
          <div class="jobDetailType">工作地点：山西太原杏花岭</div>
          <div class="jobDetailType">工作地点：山西太原杏花岭</div>
        </div>
      </div>
      <div class="center">
        <div class="businessTitle">
          <div class="businessTitleLift">
            <img class="businessImg" src="../assets/images/businessIcon.png" alt="">
            <div class="">商家信息</div>
          </div>
          <div class="businessTitleRight">
            <img class="businessStarImg" src="../assets/images/businessStar.png" alt="">
            <img class="businessStarImg" src="../assets/images/businessStar.png" alt="">
            <img class="businessStarImg" src="../assets/images/businessStar.png" alt="">
            <img class="businessStarImg" src="../assets/images/businessStar.png" alt="">

          </div>
        </div>
        <div class="businessDetail">
          <img class="businessLogo" src="../assets/images/schoolIcon.png" alt="">
          <div class="businessName">太原万柏林区太原理工大学</div>
        </div>

      </div>
      <div class="center">
        防骗提醒“本公司承诺所有职位均不收费，如有收费情况，请及时联系客服微信：xxxxxxx”
      </div>
      <div class="center">
        <div class="businessTitle">
          <div class="businessTitleLift">
            <img class="businessImg" src="../assets/images/compAssess.png" alt="">
            <div class="">综合评价</div>
          </div>
          <div class="businessTitleRight">
            <img class="businessStarImg" src="../assets/images/businessStar.png" alt="">
            <img class="businessStarImg" src="../assets/images/businessStar.png" alt="">
            <img class="businessStarImg" src="../assets/images/businessStar.png" alt="">
            <img class="businessStarImg" src="../assets/images/businessStar.png" alt="">

          </div>
        </div>
        <div class="businessDetail">
          <div class="businessName">暂时还没有评价</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SubHeader from '../components/SubHeader'
  // import { getJobList } from '../api/index'

  export default {
    name: 'Detail',
    components: {
      SubHeader
    },
    data: function () {
      return {
        jobList: [{
          name: '职位推荐'
        }]
      }
    },
    created() {
      // getJobList({ id: this.$route.params.id })
      //   .then((data) => {
      //     console.log(data)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
  .detail {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fcf6ee;
    .detailBox{
      position: fixed;
      top: 100px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: auto;
      margin-bottom: 90px;
      .head{
        width: 94%;
        padding: 3%;
        background: #FFFFFF;
        .jobName{
          @include font_size($font_large);
          font-weight: bold;
          height: 60px;
          line-height: 60px;
        }
        .jobPay{
          display: flex;
          align-items: center;
          font-weight: bold;
          color: red;
          @include font_size($font_medium);
          h3{
            @include font_size($font_medium_s);
          }
        }
        .publish{
          margin-top: 10px;
          display: flex;
          align-items: center;
          img{
            width: 30px;
            height: 30px;
          }
          .publishPlace{
            display: flex;
            align-items: center;
            p{
              margin-left: 5px;
            }
          }
          .publishTime{
            margin-left: 40px;
            display: flex;
            align-items: center;
            p{
              margin-left: 5px;
            }
          }
        }
        .jobInvite{
          width: 94%;
          height: 80px;
          margin-left: 3%;
          margin-top: 10px;
          background: #f1f1f1;
          display: flex;
          justify-content: space-between;
          text-align: center;
          line-height: 80px;
          border-radius: 5px;
          .jobInviteLeft{
            margin-left: 15px;
            color: #ae4638;
          }
          .jobInviteRight{
            display: flex;
            text-align: center;
            justify-content: center;
            line-height: 80px;
            color: #8a8a8a;
            margin-right: 15px;
            img{
              width: 50px;
              height: 50px;
              margin-top: 10px;
            }
          }
        }
        .jobDetail{

          .jobType{
            display: flex;
            margin-top: 15px;
            .jobTypeName{
              color: #8a8a8a;
              margin-right: 10px;
            }
            .jobValue{
              margin-right: 20px;
            }
          }
          .jobPlace{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            margin-top: 20px;
            border-top: #666666 1px solid;
            padding-top: 20px;
            .jobPlaceName{

            }
            .jobPlaceIcon{
              width: 40px;
              height: 40px;
            }
          }
        }
      }
      .center{
        width: 94%;
        padding: 3%;
        margin-top: 15px;
        background: #FFFFFF;
        /*padding: 30px;*/
        .jobDetailTitle{
          display: flex;
          border-bottom: #666666 1px solid;
          padding-bottom: 20px;
          .jobDetailImg{
            width: 40px;
            height: 40px;
            margin-right: 10px;
          }

        }
        .jobDetailBody{
          color: #8a8a8a;
          .jobDetailType{
            @include font_size($font_medium);
            height: 40px;
            line-height: 40px;
            margin-top: 10px;
          }
        }
        .businessTitle{
          display: flex;
          justify-content: space-between;
          border-bottom: #666666 1px solid;
          padding-bottom: 20px;
          .businessTitleLift{
            display: flex;
            .businessImg{
              width: 40px;
              height: 40px;
              margin-right: 10px;
            }
          }
          .businessTitleRight{
            display: flex;
            .businessStarImg{
              width: 40px;
              height: 40px;
            }
          }
        }
        .businessDetail{
          display: flex;
          margin-top: 20px;
          height: 50px;
          .businessLogo{
            width: 40px;
            height: 40px;
            margin-right: 20px;
          }
          .businessName{
            @include font_size($font_medium);
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }

  }


</style>
