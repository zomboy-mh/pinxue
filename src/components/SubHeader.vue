<template>
    <div class="header">
      <div class="header-left" @click.stop="back">
        <img src="../assets/images/banck.png" alt="">
      </div>
      <p class="header-title">{{title}}</p>
      <div class="header-right">
<!--        <img src="../assets/images/more.png" alt="">-->
      </div>
    </div>
</template>

<script>
export default {
  name: 'SubHeader',
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
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
  .header{
    width: 100%;
    height: 60px;
    @include bg_color();
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-left,.header-right{
      width: 60px;
      height: 60px;
      line-height: 45px;
      margin-left: 10px;
      img{
        width: 30px;
        height: 30px;
      }
    }
    .header-title{
      text-align: center;
      line-height: 100px;
      color: #fff;
      font-weight: bold;
      font-size: 22px;
      //@include font_size($font_large);
      @include no-wrap()
    }
  }
</style>
