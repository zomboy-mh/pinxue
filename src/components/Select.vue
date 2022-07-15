<template>
    <div class="select">
      <ul class="select_tabbed" >
        <li v-for="(item,index) in taberList" :key="index" @click="changeTaber(item,index)">
          <span>{{item.name}}</span>
          <div class="icon" :class="item.style?'iconStyle':'iconStyle1'"></div>
        </li>
      </ul>
      <div class="tabbed_detail" v-show="showDetail">
          <div class="detail_body1" v-show="currentType === 1">
            <div class="detail_button"   v-for="(item,index) in buttonCurrentList" :key="index" @click="choiceType(item)" :class="item.currentStyle?'detail_button_active':''">{{item.name}}</div>
          </div>
        <div class="detail_body2"  v-show="currentType === 2">
          <div  class="detail_button" v-for="(item,index) in buttonCurrentList" :key="index" @click="choiceType(item)" :class="item.currentStyle?'detail_button_active':''">{{item.name}}</div>
        </div>
        <div v-show="currentType === 3">
          <div class="detail_body1">
            <div class="detail_button" v-for="(item,index) in buttonCurrentList" :key="index" @click="choiceType(item)" :class="item.currentStyle?'detail_button_active':''">{{item.name}}</div>
          </div>
          <div  class="detail_body2">
            <div  class="detail_button" v-for="(item,index) in buttonCurrentList" :key="index" @click="choiceType(item)" :class="item.currentStyle?'detail_button_active':''">{{item.name}}</div>
          </div>
          <div class="button_bottom">
              <div class="bottom_reset">确认</div>
              <div class="bottom_reset">重置</div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Select",
      data () {
        return {
          index: 0,
          showDetail:false,
          buttonCurrentList:[],
          currentType:0
        }
      },
      props: {
        taberList: {
          type: Array,
          default: () => [],
          required: true
        }
      },
      methods:{
        changeTaber(item,index){
          if(item.style === false) {
            this.showDetail = true
          }else {
            this.showDetail = false
          }
          this.taberList.map((itm,idx)=>{
            if(index === idx){
              itm.style = !itm.style
            }else {
              itm.style = false
            }
          })
          this.buttonCurrentList = item.buttonList;
          this.buttonCurrentList.map((item,index)=>{
            item.currentStyle = false
          })
          this.currentType = item.type
        },
        choiceType(item){
          item.currentStyle = true;
          this.$emit('select-id',item.id)
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
  .select_tabbed{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height:60px;
    /*background: skyblue;*/
    li{
      text-align: center;
      line-height: 60px;
      display: flex;
      font-size: 18px;
      //@include font_size($font_medium_s);
      @include font_color();
      .icon{
        width: 0;                           /*设置宽高为0，所以div的内容为空，从才能形成三角形尖角*/
        height: 0;
        margin-top: 25px;
        margin-left: 20px;
        border-top: 8px solid #cccccc;
        border-left: 8px solid transparent;    /*transparent 表示透明*/
        border-right: 8px solid transparent;
      }
      .iconStyle{
        border-top: 8px solid red;
        transform: rotate(180deg);
        transition: 0.5s;
      }
      .iconStyle1{
        border-top: 8px solid #cccccc;
        transform: rotate(360deg);
        transition: 0.5s;
      }
      /*@keyframes mymove {*/
      /*  from {*/
      /*    transform: rotate(0deg);*/
      /*  }*/
      /*  to {*/
      /*    */
      /*  }*/
      /*}*/
    }
    border-bottom: 1px #000000 solid;

  }
  .tabbed_detail{
    position: fixed;
    top: 135px;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.4);
    .detail_body1{
      width: 96%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      background: #f5f5f5;
      padding: 2%;
      border-bottom:1px solid #000;
        .detail_button{
          width: 80px;
          height: 30px;
          margin: 10px;
          border-radius: 5px;
          text-align: center;
          line-height: 30px;
          border: 1px solid #000;
          font-size: 18px;
          //@include font_size($font_medium_s);
          @include font_color();
        }
      .detail_button_active{
        background: #f9ab61;
      }

    }
    .detail_body2{
      width: 100%;
      background: #f5f5f5;
      .detail_button{
        width: 100%;
        height: 30px;
        /*text-align: center;*/
        padding: 10px;
        line-height: 30px;
        font-size: 20px;
        //@include font_size($font_medium);
        @include font_color();
        border-bottom:1px solid #000;
      }
      .detail_button_active{
        background: #f9ab61;
      }

    }
    .button_bottom{
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      /*justify-content: space-between;*/
      background: #f5f5f5;
      .bottom_reset{
        width: 80px;
        height: 30px;
        margin: 10px;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #000;
        font-size: 18px;
        //@include font_size($font_medium_s);
        @include font_color();
      }
      .bottom_confirm{
        width: 80px;
        height: 30px;
        margin: 10px;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #000;
        font-size: 18px;
        //@include font_size($font_medium_s);
        @include font_color();
      }
    }
  }
</style>
