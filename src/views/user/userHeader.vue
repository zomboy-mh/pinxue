<template>
    <div class="header" >
      <div class="header-left" @click.stop="back">
        <img src="../../assets/images/banck.png" alt="">
      </div>
      <p class="header-title">{{title}}</p>
      <div class="header-right" v-if="title=='个人信息'">
        保存
<!--        <img src="../assets/images/more.png" alt="">-->
      </div>
      <div class="header-right" v-else>

      </div>
    </div>
</template>

<script>
export default {
  name: 'userHeader',
  data () {
    return {
      themes: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },
  methods: {
    changeTheme () {
      this.index++
      if (this.index >= this.themes.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.themes[this.index])
    },
    back () {
      window.history.back()
    }
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
  .header{
    width: 100%;
    height: 100px;
    @include bg_color();
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-left{
      width: 70px;
      height: 70px;
      line-height: 60px;
      img{
        width: 55px;
        height: 55px;
      }
    }
    .header-right{
      width: 70px;
      height: 70px;
      @include font_size($font_large);
      /*background: #000;*/
      color: #FFFFFF;
      line-height: 70px;
      margin-right: 20px;
    }
    .header-title{
      text-align: center;
      line-height: 100px;
      color: #fff;
      font-weight: bold;
      @include font_size($font_large);
      @include no-wrap()
    }
  }
</style>
