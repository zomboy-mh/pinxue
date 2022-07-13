<template>
  <div class="detail">
    <userHeader :title="headerName"></userHeader>
    <div class="detailBox">
      <div class="headPortrait">
        <div>个人头像</div>
        <el-upload
          class="avatar-uploader"
          action="http://pinxue.ngrok.24k.fun/system/file/singleUp"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :headers="config"
        >
          <img v-if="detailFrom.headerImg.userImageUrl" :src="detailFrom.headerImg.userImageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <!--          <img class="headPortraitImg" src="../../assets/images/04.jpg" alt="">-->
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">昵称</div>
        <!--        <div class="detailItemValue">王强</div>-->
        <div class="detailItemSelect1">
          <el-input v-model="detailFrom.niceName" placeholder="请输入昵称"></el-input>
        </div>
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">性别</div>
        <div class="detailItemValue">男</div>

        <!--        <div class="detailItemSelect1">-->
        <!--          <el-select  :popper-append-to-body="false" v-model="value" placeholder="请选择">-->
        <!--            <el-option-->
        <!--              v-for="item in options"-->
        <!--              :key="item.value"-->
        <!--              :label="item.label"-->
        <!--              :value="item.value">-->
        <!--            </el-option>-->
        <!--          </el-select>-->
        <!--        </div>-->
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">出生日期</div>
        <div class="detailItemValue">2022-06-21</div>
        <!--        <div class="detailItemSelect2">-->
        <!--          <el-date-picker-->
        <!--            v-model="value1"-->
        <!--            type="date"-->
        <!--            placeholder="选择日期">-->
        <!--          </el-date-picker>-->
        <!--        </div>-->
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
          <el-input v-model="detailFrom.height" placeholder="请输入身高"></el-input>
          cm
        </div>
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">体重</div>
        <div class="detailItemSelect3">
          <el-input v-model="detailFrom.weight" placeholder="请输入体重"></el-input>
          kg
        </div>
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">居住地点</div>
        <div class="detailItemSelect4">
          <el-input v-model="detailFrom.live" placeholder="请输入居住地点"></el-input>
        </div>
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">微信</div>
        <div class="detailItemSelect4">
          <el-input v-model="detailFrom.weChat" placeholder="请输入微信号"></el-input>
        </div>
      </div>
      <div class="detailItem">
        <div class="detailItemTxt">QQ</div>
        <div class="detailItemSelect4">
          <el-input v-model="detailFrom.qq" placeholder="请输入QQ号"></el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import userHeader from './userHeader'
  import {getSingleUp} from '../../api/index'

  export default {
    name: "userDetail",
    components: {
      userHeader,
    },
    data: function () {
      return {
        headerName: '个人信息',
        // options: [{
        //   value: '选项1',
        //   label: '男'
        // }, {
        //   value: '选项2',
        //   label: '女'
        // }],
        identityList: [{
          value: '选项1',
          label: '在校'
        }, {
          value: '选项2',
          label: '毕业'
        }],
        identityValue: '',
        detailFrom: {
          niceName: '',
          qq: '',
          weChat: '',
          live: '',
          height: '',
          weight: '',
          headerImg: {
            userImageUrl: ''
          }
        },
        token: '',
        filelist:[]
      }
    },
    mounted() {
      this.token = localStorage.getItem('token')

    },
    computed:{
      config() {
        return { token: this.token,
            // contentType: 'application/json; charset=utf-8'
            };
      },
    },
    methods: {
      getSingleUp(item){
        console.log(item.file)
        this.file = new FormData()
        this.file.append('file', item.file)
        console.log(fd)
        getSingleUp({
          file:item.file
        }).then((res)=>{
          console.log(res);
        })
      },
      handleAvatarSuccess(res, file) {
        this.detailFrom.userImageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/main";
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";

  .detailBox {
    width: 96%;
    margin: 10px 3% 100px 3%;
    background: #FFFFFF;
    border-radius: 5px;

    .headPortrait {
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

      .headPortraitImg {
        width: 90px;
        height: 90px;
        border-radius: 45px;
        margin-right: 10px;
      }

      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }

      .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
      }

      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }

      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }

    .detailItem {
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

      .detailItemValue {
        color: #959595;
      }

      .detailItemSelect1 {
        ::v-deep .el-input__inner {
          height: 60px;
          width: 150px;
          @include font_size($font_medium);
          line-height: 60px;

        }

        ::v-deep .el-input__suffix {
          line-height: 50px;
          height: 65px;
        }

        ::v-deep .el-select-dropdown__item {
          @include font_size($font_medium);
          height: 50px;
          line-height: 50px;
        }

      }

      .detailItemSelect2 {
        align-items: center;
        text-align: center;
        display: flex;

        ::v-deep .el-input__inner {
          height: 60px;
          width: 220px;
          @include font_size($font_medium);
          line-height: 60px;
        }
      }

      .detailItemSelect3 {
        align-items: center;
        text-align: center;
        display: flex;

        ::v-deep .el-input__inner {
          height: 100px;
          width: 180px;
          @include font_size($font_medium);
          line-height: 100px;
          border: 1px solid #FFFFFF;
        }
      }

      .detailItemSelect1 {
        ::v-deep .el-input__inner {
          height: 80px;
          width: 180px;
          @include font_size($font_medium);
          line-height: 60px;
          border: 1px solid #FFFFFF;
        }
      }

      .detailItemSelect4 {
        ::v-deep .el-input__inner {
          height: 80px;
          width: 500px;
          @include font_size($font_medium);
          line-height: 60px;
          border: 1px solid #FFFFFF;
        }
      }
    }
  }
</style>
