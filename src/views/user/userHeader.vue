<template>
    <div class="header" >
      <div class="header-left" @click.stop="back">
        <img src="../../assets/images/banck.png" alt="">
      </div>
      <p class="header-title">{{title}}</p>
      <div class="header-right" v-if="title=='个人信息'" @click="setUserDetail()">
        保存
<!--        <img src="../assets/images/more.png" alt="">-->
      </div>
      <div class="header-right" v-else>

      </div>
    </div>
</template>

<script>
  import {getSingleUp,setUserDetail} from '../../api/index'
  import {mapActions} from "vuex";
export default {
  name: 'userHeader',
  data () {
    return {
      themes: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },
  computed:{
  },
  methods: {
    ...mapActions([
      'setNickName',
    ]),
    changeTheme () {
      this.index++
      if (this.index >= this.themes.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.themes[this.index])
    },
    back () {
      window.history.back()
    },
    setUserDetail(){
      console.log("123",this.detailFrom.identity);
      this.$toast({
        message: "保存成功",
        type:"success",
        iconSize:'100px'
      })

      this.setNickName(this.detailFrom.nickName)
      // setUserDetail(this.detailFrom).then((res)=>{
      //   console.log("保存",res)
      //   if(res.code === 1000){
      //     this.$toast({
      //       message: "保存成功",
      //       type:"success",
      //       iconSize:'100px'
      //     })
      //   }
      //
      //
      // })
    }
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    detailFrom: {
      type: Object,
      default: ()=>({}),
      required: true
    }

  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
  .van-toast{
    width: 200px;
    font-size: 50px;
    color:red
  }
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
