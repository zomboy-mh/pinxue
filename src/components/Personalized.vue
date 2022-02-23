<template>
    <div class="personalized">
      <div class="personalized-top">
        <h3>{{title}}</h3>
        <h3 class="looknumber">查看更多》</h3>
      </div>
      <div class="personalized-list">
        <div class="item" v-for="(item,index) in Personalized" :key="index" @click="selectItem(item.id)">
          <img v-lazy="item.imgUrl" alt="">
          <p>{{item.name}}</p>
          <div v-for="(ite,inx) in item.value" :key="inx" class="jobName">{{ite}}</div>
          <div class="jobNumber">该公司共{{item.number}}个在招职位</div>
          <div class="jobBtn">
            <div class="jobJoin">立即沟通</div>
            <div class="jobDetail">查看详情</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Personalized',
  props: {
    Personalized: {
      type: Array,
      default: () => [],
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    selectItem (id) {
      console.log(id)
      this.$emit('select', id)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
  @import "../assets/css/variable";
  .personalized{
    .personalized-top{
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 84px;
      line-height: 84px;
      @include bg_sub_color();
      border-bottom: 1px solid #cccccc;
      .looknumber{
        margin-right: 20px;
      }
      h3{
        @include font_size($font_large);
        font-weight: bold;
        margin-left: 20px;
        @include font_color()
      }
    }
    .personalized-list{
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      @include bg_sub_color();
      .item{
        width: 300px;
        height: 430px;
        margin-top: 20px;
        background: #ffffff;
        padding: 10px;
        padding-left: 30px;
        img{
          width: 200px;
          height: 200px;
          margin-left: 50px;
        }
        p{
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .jobName{
          @include font_size($font_medium_s);
          color: #666666;
        }
        .jobNumber{
          @include font_size($font_medium_s);
          color: #939393;
          margin-top: 10px;
        }
        .jobBtn{
          width: 100%;
          display: flex;
          margin-top: 10px;
          margin-left: -10px;
          .jobJoin{
            width: 140px;
            height: 50px;
            border-radius: 25px;
            text-align: center;
            line-height: 50px;
            background: #cccccc;
            @include font_size($font_medium_s);
            @include font_color()
          }
          .jobDetail{
            width: 140px;
            height: 50px;
            border-radius: 25px;
            text-align: center;
            line-height: 50px;
            @include bg_color();
            margin-left: 20px;
            @include font_size($font_medium_s);
            color: #FFFFFF;
          }
        }
      }
    }
  }
</style>
