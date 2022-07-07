<template>
  <div class="detail">
    <detailHeader :title="headerName"></detailHeader>
      <div class="detailTop">
        <div class="businessTop">
          <div class="topLeft">
            <div class="businessName">山西焦煤集团有限公司有限公司</div>
            <div class="businessTaps">30-60人  汽车，物流</div>
          </div>
          <div class="topRight">
            <img class="businessImg" src="../../assets/images/04.jpg" alt="">
          </div>
        </div>
        <div class="businessBottom">
          <div class="businessTips">餐补</div>
          <div class="businessTips">话补</div>
          <div class="businessTips">节日福利</div>
          <div class="businessTips">免费培训</div>
        </div>
      </div>
      <div class="detailBottom">
        <el-tabs v-model="activeName" :stretch="true" @tab-click="handleClick">
          <el-tab-pane label="公司信息" name="first">公司信息</el-tab-pane>
          <el-tab-pane label="在招职位" name="second">在招职位</el-tab-pane>
        </el-tabs>
      </div>

  </div>
</template>

<script>
  // 这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json 文件，图片文件等等）
  import detailHeader from './detailHeader'

  export default {
    // import 引入的组件需要注入到对象中才能使用
    components: {
      detailHeader
    },
    props: {},
    name: "Business",
    data: function () {
      return {
        headerName: '商家详情',
        activeName: 'second'
      }
    },
    // 计算属性 类似于 data 概念
    computed: {},
    // 监控 data 中的数据变化
    watch: {},
    // 方法集合
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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
.detail{
  background: #3b3c50;
  .detailTop{
    width: 100%;
    .businessTop{
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
      .topLeft{
        width: 450px;
        height: 200px;
        margin-left: 50px;
        .businessName{
          font-size: 38px;
          color: #FFFFFF;
        }
        .businessTaps{
          font-size: 25px;
          color: #cccccc;
        }
      }
      .topRight{
        width: 180px;
        height: 180px;
        margin-right: 50px;
        border-radius: 5px;

        .businessImg{
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }
    }
    .businessBottom{
      width: 100%;
      height: 80px;
      align-items: center;
      display: flex;
      padding-left: 50px;
      .businessTips{
        margin-right: 10px;
        padding: 5px 20px;
        line-height: 50px;
        font-size: 25px;
        color: #cccccc;
        background: #46475b;
        border-radius: 25px;
      }
    }
  }
  .detailBottom{
    position: absolute;
    left: 0;
    top: 450px;
    background: #FFFFFF;
    width: 100%;
    height: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    ::v-deep .el-tabs__nav-scroll{
      margin-left: 20px;
      margin-right: 20px;
    }
    ::v-deep .el-tabs__nav{
      /*padding-left: 20px;*/
      padding-right: 20px;
    }
    ::v-deep .el-tabs__item{
      height: 80px;
      @include font_size($font_large);
      line-height: 80px;
    }
    /*::v-deep .el-tabs__nav-prev{*/
    /*  font-size: 40px;*/
    /*  line-height: 40px;*/
    /*  height: 40px;*/
    /*  margin-top: 20px;*/
    /*}*/
    /*::v-deep .el-tabs__nav-next{*/
    /*  font-size: 40px;*/
    /*  line-height: 40px;*/
    /*  height: 40px;*/
    /*  margin-top: 20px;*/
    /*}*/
  }
}
</style>
