<template>
  <div id="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe'
export default {
  name: 'ScrollView',
  mounted () {
    this.iscroll = new IScroll(this.$refs.wrapper, {
      moiseWheel: true,
      scrollbars: false,
      // 解决卡顿
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true
    })
    // setTimeout(() => {
    //   console.log(this.iscroll.maxScrollY)
    //   this.iscroll.refresh()
    //   console.log(this.iscroll.maxScrollY)
    // }, 5000)
    // 创建一个观察者对象
    // MutationObserver构造函数只要监听到了指定内容发生了变化就会执行传入的回调函数
    // motationlist：发生变化的数组
    // observer:观察者
    const observer = new MutationObserver((motationList, observer) => {
      console.log('sss', motationList)
      console.log(this.iscroll.maxScrollY)
      this.iscroll.refresh()
      console.log(this.iscroll.maxScrollY)
    })
    // // 2.告诉观察这对象外卖需要观察什么内容
    const config = {
      childList: true, // 观察目标子节点的变化，是否有添加或者删除
      subtree: true, // 观察后代节点，默认为 false
      attributeFilter: ['height', 'offsetHeight']// 观察特定属性
    }
    // // 3.告诉观察者对象，外卖需要观察谁，需要观察什么内容
    // /*
    // 第一个参数：告诉观察者外卖需要观察谁
    // 第二个参数：告诉观察者对象外卖需要观察什么内容
    // * */
    observer.observe(this.$refs.wrapper, config)
  }
}
</script>

<style scoped>
#wrapper{
  width: 100%;
  height: 100%;
}
</style>
