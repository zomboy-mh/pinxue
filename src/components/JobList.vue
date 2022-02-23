<template>
  <div class="Job">
    <div class="job-top">
      <h3>最新职位</h3>
    </div>
    <ul class="job-list">
      <li v-for="(item,index) in jobList" :key="index" class="item">
        <img v-lazy="item.imgUrl" alt="">
        <div class="jobText">
          <div class="jobTop">
            <h3>{{item.value}}</h3>
            <img src="../assets/images/Ongoing.png" alt="" class="Ongoing">
          </div>
          <div class="jobDetails">
            <p>{{item.name}}</p>
            <p>{{item.time}}</p>
          </div>
          <div class="jobWages">
            <h3>{{item.wages}}</h3>
            <div>元/天</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'JobList',
  props: {
    jobList: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  @import "../assets/css/variable";
.Job{
  width: 100%;
  .job-top{
    display: flex;
    justify-content: space-between;
    height: 84px;
    width: 100%;
    line-height: 84px;
    @include bg_sub_color();
    border-bottom: 1px solid #cccccc;
    /*padding: 0 20px;*/
    /*padding-left: 20px;*/
    h3{
      @include font_size($font_large);
      font-weight: bold;
      margin-left: 20px;
      @include font_color()
    }
  }
  .job-list{
    width: 100%;
    .item{
      display: flex;
      align-items: center;
      border-bottom: 1px solid #000;
      padding-left: 20px;
      img{
        width: 150px;
        height: 150px;
        border-radius: 20px;
        margin-right: 20px;
      }
      .jobText{
        width: 100%;
        .jobTop{
          display: flex;
          justify-content: space-between;
          width: 100%;
          h3{
           text-align: center;
            line-height: 80px;
          }
          .Ongoing{
            width: 80px;
            height: 80px;
            margin: 0;
            border-radius: 0;
          }
        }
        .jobDetails{
          display: flex;
          align-items: center;
          @include font_size($font_medium_s);
          @include font_color();
         margin-bottom: 10px;
        }
        .jobWages{
          display: flex;
          align-items: center;
          color: red;
        }
      }
      h3{
        font-weight: bold;
        @include font_size($font_large);
        //@include font_color()
      }

    }
  }
}
</style>
