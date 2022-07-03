<template>
  <div class="detail">
    <userHeader :title="jobList[0].name"></userHeader>
    <div class="detailBox">
        <div class="headPortrait">
          <div>个人头像</div>
          <img class="headPortraitImg" src="../../assets/images/04.jpg" alt="">
        </div>
      <div class="detailItem">
        <div class="detailItemTxt">昵称</div>
        <div class="detailItemValue">王强</div>
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">性别</div>
        <div class="detailItemSelect1">
          <el-select  :popper-append-to-body="false" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">出生日期</div>
        <div class="detailItemSelect2">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">身份</div>
        <div class="detailItemSelect1">
          <el-select :popper-append-to-body="false" v-model="identityValue" placeholder="请选择">
            <el-option
              v-for="item in identityList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">身高</div>
        <div class="detailItemSelect3">
          <el-input v-model="height" placeholder="请输入身高"></el-input>
          cm
        </div>
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">体重</div>
        <div class="detailItemSelect3">
          <el-input v-model="weight" placeholder="请输入体重"></el-input>
          kg
        </div>
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">居住地点</div>
        <div class="detailItemSelect4">
          <el-input v-model="live" placeholder="请输入居住地点"></el-input>
        </div>
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">微信</div>
        <div class="detailItemSelect4">
          <el-input v-model="wechat" placeholder="请输入微信号"></el-input>
        </div>
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">QQ</div>
        <div class="detailItemSelect4">
          <el-input v-model="qq" placeholder="请输入QQ号"></el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import userHeader from './userHeader'

    export default {
        name: "userDetail",
        components: {
        userHeader,
      },
      data: function () {
        return {
          jobList: [{
            name: '个人信息'
          }],
          options: [{
            value: '选项1',
            label: '男'
          }, {
            value: '选项2',
            label: '女'
          }],
          identityList: [{
            value: '选项1',
            label: '在校'
          }, {
            value: '选项2',
            label: '毕业'
          }],
          value: '',
          identityValue: '',
          value1: '',
          value2: '',
          height: '',
          weight:'',
          live:'',
          wechat:'',
          qq:''
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
        border-bottom: 1px solid #bdb2b2;
        @include font_size($font_large);
        .detailItemSelect1{
          ::v-deep .el-input__inner{
            height: 60px;
            width: 150px;
            @include font_size($font_medium);
            line-height: 60px;

          }
          ::v-deep .el-input__suffix{
            line-height: 50px;
            height: 65px;
          }
          ::v-deep .el-select-dropdown__item{
            @include font_size($font_medium);
            height: 50px;
            line-height: 50px;
          }

        }
        .detailItemSelect2{
          align-items: center;
          text-align: center;
          display: flex;
          ::v-deep .el-input__inner{
            height: 60px;
            width: 220px;
            @include font_size($font_medium);
            line-height: 60px;
          }
        }
        .detailItemSelect3{
          align-items: center;
          text-align: center;
          display: flex;
          ::v-deep .el-input__inner{
            height: 100px;
            width: 180px;
            @include font_size($font_medium);
            line-height: 100px;
            border: 1px solid #FFFFFF;
          }
        }
        .detailItemSelect4{
          ::v-deep .el-input__inner{
            height: 80px;
            width: 500px;
            @include font_size($font_medium);
            line-height: 60px;
            border: 1px solid #FFFFFF;
          }
        }
      }
    }
  }
</style>
