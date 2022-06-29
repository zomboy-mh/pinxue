<template>
    <div class="detail">
      123
      <el-button @click="loginBtn" type="primary">主要按钮</el-button>
    </div>
</template>

<script>
    export default {
        name: "login",
        data:function(){
          return{
              data:''
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
    background: #fcf6ee;
  }
</style>
