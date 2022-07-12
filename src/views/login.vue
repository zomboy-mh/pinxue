<template>
  <div class="detail">
    <i class="el-icon-arrow-left loginClose"></i>
    <div v-show="!register" class="registerInlet" @click="register=true">注册</div>
    <div v-show="register" class="registerInlet" @click="register=false,ifCode=false">登录</div>
    <div class="detailBox">
      <h1 v-show="!register">登录</h1>
      <h1 v-show="register">注册用户</h1>
      <div class="phoneBox">
        <el-form :model="dynamicValidateForm" :rules="rules" ref="dynamicValidateForm" label-width="0px"
                 class="demo-dynamic">
          <el-form-item prop="phone" label="">
            <el-row>
              <el-col :span="4">
                <div class="phoneLeft">+86</div>
              </el-col>
              <el-col :span="20">
                <el-input v-model="dynamicValidateForm.phone" placeholder="请输入手机号">
                </el-input>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item prop="code">
            <el-row>
              <el-col :span="16">
                <el-input v-show="ifCode||register" v-model="dynamicValidateForm.code" placeholder="请输入验证码">
                </el-input>
                <el-input v-show="!ifCode&&!register" show-password v-model="dynamicValidateForm.password"
                          placeholder="请输入密码">
                </el-input>
              </el-col>
              <el-col :span="8">
                <div v-show="ifCode||register" class="phoneLeft">验证码登录</div>
                <div v-show="!ifCode&&!register" class="phoneLeft">忘记密码</div>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item prop="pass" v-show="register">
            <el-row>
              <el-col :span="24">
                <el-input type="password" v-model="dynamicValidateForm.pass" show-password placeholder="请输入密码">
                </el-input>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item prop="checkPass" v-show="register">
            <el-row>
              <el-col :span="24">
                <el-input type="password" v-model="dynamicValidateForm.checkPass" show-password
                          placeholder="密码为8-16位，含字母">
                </el-input>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="loginBottom">
      <div class="loginBtn" @click="submitLogin">确定</div>
      <div @click="ifCode = false,register = false" v-show="ifCode" class="accountsLogin">帐号密码登录</div>
      <div @click="ifCode = true,register = false" v-show="!ifCode" class="accountsLogin">手机验证码登录</div>
      <div class="loginTxt">点击确定即代表同意用户协议和隐私政策</div>
    </div>
  </div>
</template>

<script>
  import {getRegister} from '../api/index'
  import 'axios'
import axios from 'axios';
  export default {
    name: "login",
    data: function () {
      var cheackMobile = (rule, value, cb) => {
        // 手机号一般最小以“13”开头
        const regMobile = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        if (regMobile.test(value)) {
          return cb()
        }
        cb(new Error('请输入合法的手机号!'))
      };
      var validatePass = (rule, value, cb) => {
        if (value === '') {
          cb(new Error('请输入密码'));
        } else {
          if (this.dynamicValidateForm.checkPass !== '') {
            this.$refs.dynamicValidateForm.validateField('checkPass');
          } else {
            return cb()
          }
        }
      };
      var validatePass2 = (rule, value, cb) => {
        if (value === '') {
          cb(new Error('请再次输入密码'));
        } else if (value !== this.dynamicValidateForm.pass) {
          cb(new Error('两次输入密码不一致!'));
        } else {
          return cb()
        }
      };
      return {
        data: '',
        dynamicValidateForm: {
          phone: '',
          code: '',
          pass: '',
          checkPass: ''
        },
        rules: {
          email: [
            {required: true, message: '请输入邮箱', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}],
          phone: [
            {required: true, message: '请输入手机号', trigger: 'blur'},
            {validator: cheackMobile, trigger: 'blur'}],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
        },
        ifCode: true,
        register: false
      }
    },
    methods: {
      submitLogin() {
        if(this.register){
          this.getRegister()
        }
        // let userName = this.dynamicValidateForm.phone;
        // let password = this.dynamicValidateForm.password;
        // if (userName === 'admin' && password === '123456') {
        //   localStorage.setItem('token', '123');
        //   this.$router.push({
        //     path: '/home'
        //   })
        // } else {
        //   return
        // }

      },
      getRegister(){
        getRegister({
          phone:this.dynamicValidateForm.phone,
          code:123456,
          password:this.dynamicValidateForm.checkPass,
        }).then((res)=>{
          console.log("注册",res)
        })
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
    background: url("../assets/images/loginbg.png") no-repeat;
    background-size: 100%, 100%;
    z-index: 999;

    .loginClose {
      position: absolute;
      left: 20px;
      top: 30px;
      font-size: 50px;
      color: #FFFFFF;
    }

    .registerInlet {
      position: absolute;
      right: 20px;
      top: 30px;
      font-size: 40px;
      color: #FFFFFF;
    }

    .detailBox {
      width: 100%;
      /*background: red;*/
      height: 750px;
      position: relative;
      left: 0;
      top: 150px;
      /*background: rgba(255,255,255,0.6);*/
      h1 {
        width: 300px;
        height: 80px;
        line-height: 80px;
        font-size: 60px;
        color: #FFFFFF;
        margin-left: 40px;
      }

      .phoneBox {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        text-align: center;
        margin-top: 50px;
        width: 100%;
        /*padding: 0 50px 0 50px;*/
        ::v-deep .el-row {
          display: flex;
          text-align: center;
          align-items: center;
          width: 600px;
          height: 100px;
          line-height: 100px;
          background: rgba(255, 255, 255, 0.6);
          /*color: #000000;*/
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0 20px 0 20px;
          margin-top: 20px;
        }

        .phoneLeft {
          height: 100px;
          line-height: 100px;
          /*width: 50px;*/
          @include font_size($font_medium);
          text-align: center;
          color: #000000;
        }

        ::v-deep .el-input {
          height: 100%;
          line-height: 100%;
          padding: 0;
        }

        ::v-deep input::-webkit-input-placeholder {
          color: #6d6c6c;
        }

        ::v-deep .el-input__inner {
          padding: 0;
          margin: 0;
          height: 80px;
          line-height: 80px;
          @include font_size($font_medium);
          background: rgba(255, 255, 255, 0.01);
          /*color: #000000;*/
          border: none;
        }

        ::v-deep .el-input__icon {
          font-size: 40px;
          margin-right: 20px;
          line-height: 90px;
        }

        ::v-deep .el-form-item__content {
          @include font_size($font_medium);
        }

        ::v-deep .el-form-item__error {
          @include font_size($font_medium);
          color: #fd2c2c;
        }
      }
    }

    .loginBottom {
      margin-top: 350px;
      /*position: absolute;*/
      /*bottom: 60px;*/
      /*left: 0;*/
      width: 100%;
      /*padding: 0 50px 0 50px;*/
      .loginTxt {
        width: 80%;
        margin-left: 10%;
        font-size: 25px;
        color: #cccccc;
        margin-top: 30px;
        text-align: center;
      }

      .accountsLogin {
        width: 50%;
        margin-left: 25%;
        font-size: 40px;
        color: #cccccc;
        text-align: center;
        margin-top: 15px;
      }

      .loginBtn {
        width: 80%;
        margin-left: 10%;
        height: 80px;
        line-height: 80px;
        border-radius: 40px;
        background: linear-gradient(to right, #eccc88, #cf98ec, #63c2f1);
        color: #000000;
        font-size: 40px;
        text-align: center;
      }
    }
  }
</style>
