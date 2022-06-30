<template>
    <div class="detail">
      <i class="el-icon-arrow-left loginClose"></i>
      <div class="detailBox">
          <h1>登录/注册</h1>
        <div class="phoneBox">
          <div class="phoneLeft">+86</div>
          <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="0px" class="demo-dynamic">
            <el-form-item prop="phone" label="" :rules="rules.phone">
              <el-input v-model="dynamicValidateForm.phone">
              </el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-row>
                <el-col :span="16">
                  <el-input v-model="dynamicValidateForm.code">
                  </el-input>
                </el-col>
                <el-col :span="8">
                 <div class=""></div>
                </el-col>
              </el-row>

            </el-form-item>
          </el-form>
<!--          <i class="el-icon-close phoneRight"></i>-->
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data:function(){
          var cheackMobile = (rule, value, cb) => {
            // 手机号一般最小以“13”开头
            const regMobile = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
            if (regMobile.test(value)) {
              return cb()
            }
            cb(new Error('请输入合法的手机号!'))
          }
          return{
              data:'',
              dynamicValidateForm: {
                domains: [{
                     value: ''
                }],
                email: '',
                phone:'',
                code:''
              },
             rules: {
                email: [
                  { required: true, message: '请输入邮箱', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }],
                phone: [
                  { required: true, message: '请输入手机号', trigger: 'blur' },
                  { validator: cheackMobile, trigger: 'blur' }]
              },

          }
        },
       methods:{
         loginBtn(){
           console.log("ssss")
           // sessionStorage.token = '123';
           // sessionStorage.role = '321';
           // this.$router.push({
           //   path: '/home'
           // })
         },
         addDomain() {
           this.dynamicValidateForm.domains.push({
             value: '',
             key: Date.now()
           });
         },
         submitForm(formName) {
           this.$refs[formName].validate((valid) => {
             if (valid) {
               alert('submit!');
             } else {
               console.log('error submit!!');
               return false;
             }
           });
         },
         resetForm(formName) {
           this.$refs[formName].resetFields();
         },
         removeDomain(item) {
           var index = this.dynamicValidateForm.domains.indexOf(item)
           if (index !== -1) {
             this.dynamicValidateForm.domains.splice(index, 1)
           }
         }
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
    background: #3f2096;
    z-index: 999;
    .loginClose{
      position: absolute;
      left: 20px;
      top: 30px;
      font-size: 50px;
      color: #FFFFFF;
    }
    .detailBox{
      width: 100%;
      height: 480px;
      /*background: red;*/
      position: absolute;
      left: 0;
      top: 150px;
      h1{
        width: 300px;
        height: 80px;
        line-height: 80px;
        font-size: 60px;
        color: #FFFFFF;
        margin-left: 20px;
      }
      .phoneBox{
        display:flex;
        justify-content:center;
        align-items: center;
        position: relative;
        text-align: center;
        margin-top: 50px;
        .phoneLeft{
          position: absolute;
          left: 80px;
          z-index: 999;
          line-height: 80px;
          height: 100%;
          width: 50px;
          font-size: 30px;
          color: #FFFFFF;
          margin-top: 40px;
        }
        /*.phoneRight{*/
        /*  position: absolute;*/
        /*  right: 70px;*/
        /*  z-index: 999;*/
        /*  line-height: 80px;*/
        /*  height: 100%;*/
        /*  width: 50px;*/
        /*  font-size: 30px;*/
        /*}*/
        ::v-deep .el-input__inner{
          height: 80px;
          line-height: 80px;
          font-size: 40px;
          width: 100%;
          padding-left: 90px;
          padding-right: 80px;
          /*margin-left: 30px;*/
          border-radius: 40px;
          background: #5033a0;
          color: #abadaf;
          border: 1px solid #3f2096;
          margin-top: 20px;
        }
        ::v-deep .el-form-item__error{
          font-size: 30px;
          /*margin-left: 30px;*/
        }
      }

    }
  }
</style>
