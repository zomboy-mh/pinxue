<template>
    <div class="detail">
      <SubHeader :title="jobList[0].name"></SubHeader>
      <el-tabs v-model="activeName" :stretch="true" @tab-click="handleClick">
        <el-tab-pane label="已报名" name="first">已录用</el-tab-pane>
        <el-tab-pane label="待面试" name="second">待面试</el-tab-pane>
        <el-tab-pane label="已录用" name="third">已录用</el-tab-pane>
        <el-tab-pane label="已完工" name="fourth">已完工</el-tab-pane>
        <el-tab-pane label="已拒绝" name="f">已拒绝</el-tab-pane>
        <el-tab-pane label="放鸽子" name="sixth">放鸽子</el-tab-pane>
        <el-tab-pane label="被解雇" name="seventh">被解雇</el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import SubHeader from '../../components/SubHeader'
    export default {
        name: "partTimeProcess",
      components: {
        SubHeader
      },
      data: function () {
        return {
          jobList: [{
            name: '兼职进度'
          }],
         activeName: 'second'
        }
      },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
    }
</script>

<style scoped lang="scss">
  @import "../../assets/css/main";
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
.detail{
  ::v-deep .el-tabs__nav-scroll{
    margin-left: 20px;
    margin-right: 20px;
  }
  ::v-deep .el-tabs__nav{
    /*padding-left: 20px;*/
    padding-right: 10px;
  }
  ::v-deep .el-tabs__item{
    height: 60px;
    font-size: 16px;
    //@include font_size($font_large);
    line-height: 60px;
  }
  ::v-deep .el-tabs__nav-prev{
    font-size: 30px;
    line-height: 60px;
    height: 60px;
  }
  ::v-deep .el-tabs__nav-next{
    font-size: 30px;
    line-height: 60px;
    height: 60px;
    /*margin-top: 10px;*/
  }
}

</style>
