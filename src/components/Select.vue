<template>
    <div class="select">
      <ul class="select_tabbed" >
        <li v-for="(item,index) in taberList" :key="index" @click="changeTaber(item,index)">
          <span>{{item.name}}</span>
          <div class="icon" :class="item.style?'iconStyle':'iconStyle1'"></div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Select",
      data () {
        return {
          taberList: [{
            name:'兼职类型',
            style:false
          }, {
            name:'全城',
            style:false
          }, {
            name:'推荐排序',
            style:false
          },{
            name:'筛选',
            style:false
          }],
          index: 0
        }
      },
      methods:{
        changeTaber(item,index){
          this.taberList.map((itm,idx)=>{
            if(index == idx){
              itm.style = !itm.style
            }else {
              itm.style = false
            }
          })


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
    height: 80px;
    /*background: skyblue;*/
    li{
      text-align: center;
      line-height: 80px;
      display: flex;
      @include font_size($font_medium_s);
      @include font_color();
      .icon{
        width: 0;                           /*设置宽高为0，所以div的内容为空，从才能形成三角形尖角*/
        height: 0;
        margin-top: 32px;
        margin-left: 20px;
        border-top: 13px solid #cccccc;
        border-left: 13px solid transparent;    /*transparent 表示透明*/
        border-right: 13px solid transparent;
      }
      .iconStyle{
        border-top: 13px solid red;
        transform: rotate(180deg);
        transition: 0.5s;
      }
      .iconStyle1{
        border-top: 13px solid #cccccc;
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
</style>
