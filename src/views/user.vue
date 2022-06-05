<template>
<div class="user">
  <div class="header">
    <div class="headerImg">

    </div>
    <div class="headerName">
      Zomboy
    </div>
  </div>
  <div >

  </div>
</div>
</template>

<script>
export default {
  name: 'user'
}
</script>

<style scoped lang="scss">
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
.header{
  width: 100%;
  height:260px;
  background: url("../assets/images/02.jpg") no-repeat;
  background-size: 100% 80%;
  display: flex;
  .headerImg{
    margin-top: 30px;
    margin-left: 50px;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background: url("../assets/images/04.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .headerName{
    margin-top: 60px;
    margin-left: 30px;
    height: 60px;
    line-height: 60px;
    @include font_size($font_large);
  }
}
</style>
