<template>
  <div class="detail">
    <userHeader :title="headerName" :detailFrom="detailFrom"></userHeader>
    <div class="Real">
      <div class="detailItem">
        <div class="detailItemTxt">姓名</div>
        <div class="detailItemSelect1">
          <el-input v-model="detailFrom.fullName" placeholder="请输入姓名"></el-input>
        </div>
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">手机号</div>
        <div class="detailItemSelect4">
          <el-input v-model="detailFrom.wechatNum" placeholder="请输入手机号"></el-input>
        </div>
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">身份号</div>
        <div class="detailItemSelect2">
          <el-input v-model="detailFrom.idNumber" placeholder="请输入完整身份证号"></el-input>
        </div>
      </div>
      <div class="detailItem1">
        <div class="detailItemTxt">身份证照片</div>
        <div class="detailItemTap">
          <div class="">1.身份证照片不得有遮挡，保证字迹清晰</div>
          <div class="">2.请在白色背景下拍摄，保证身份证边缘清晰</div>
          <div class="">3.请从证件的正上方拍摄，防止画面变形</div>
        </div>
        <div class="detailIdImg">
          <div class="idImgUp">
            <van-uploader v-model="fileList" :deletable="false"  />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json 文件，图片文件等等）
  import userHeader from './userHeader'
  import {getSingleUp} from "../../api";
  import {mapActions, mapGetters} from "vuex";

  export default {
    // import 引入的组件需要注入到对象中才能使用
    components: {
      userHeader
    },
    props: {},
    name: "userReal",
    data: function () {
      return {
        headerName: '实名认证',
        detailFrom: {},
        headerImg:{
          userImageUrl:''
        },
        frontFileList: [
          { url: '../../assets/images/realIdUp.png' },
        ],
        fileList:[

        ]
      }
    },

    // 监控 data 中的数据变化
    watch: {},
    // 计算属性 类似于 data 概念
    computed: {
      ...mapGetters([
        'token',
        'userId',
        'userImageUrl'
      ])
    },
    methods: {
      ...mapActions([
        'setUserImageUrl'
      ]),
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
      },
      uploadIDcardFront(){

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
<style>

</style>
<style scoped lang="scss">
  @import "../../assets/css/main";
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";

  .Real {
    width: 96%;
    margin: 10px 2% 100px 2%;
    background: #FFFFFF;
    border-radius: 5px;

    .detailItem {
      padding: 12px 0 12px 12px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      text-align: center;
      align-items: center;
      line-height: 50px;
      border-bottom: 1px solid #bdb2b2;
      font-size: 20px;
      .detailItemValue {
        color: #959595;
      }
      .detailItemSelect1 {
        ::v-deep .el-input__inner {
          height: 55px;
          width: 200px;
          text-align: right;
          font-size: 20px;
          line-height: 55px;
          border: 1px solid #FFFFFF;
        }
        ::v-deep .el-input__suffix {
          line-height: 55px;
          height: 55px;
        }

        ::v-deep .el-select-dropdown__item {
          font-size: 20px;
          height: 40px;
          line-height: 40px;
        }

        ::v-deep .popper__arrow, .popper__arrow::after {
          margin-left: 120px;
        }

      }
      .detailItemSelect3 {
        align-items: center;
        text-align: center;
        display: flex;

        ::v-deep .el-input__inner {
          height: 55px;
          width: 200px;
          text-align: right;
          font-size: 20px;
          line-height: 55px;
          border: 1px solid #FFFFFF;
        }
      }
      .detailItemSelect2 {
        ::v-deep .el-input__inner {
          height: 55px;
          width: 240px;
          font-size: 20px;
          line-height: 55px;
          text-align: right;
          border: 1px solid #FFFFFF;
        }
      }

      .detailItemSelect4 {
        ::v-deep .el-input__inner {
          height: 55px;
          width: 200px;
          text-align: right;
          font-size: 20px;
          line-height: 55px;
          border: 1px solid #FFFFFF;
        }
      }
    }
    .detailItem1{
      padding: 12px 0 12px 12px;
      line-height: 50px;
      border-bottom: 1px solid #bdb2b2;
      font-size: 20px;
      .idImgUp{
        width: 120px;
        height: 120px;
        background: pink;
        .preview-cover {
          position: absolute;
          bottom: 0;
          box-sizing: border-box;
          width: 100%;
          padding: 4px;
          color: #fff;
          font-size: 12px;
          text-align: center;
          background: rgba(0, 0, 0, 0.3);
        }
      }

    }
  }
</style>
