<template>
  <div class="detail">
    <userHeader :title="headerName"></userHeader>
  </div>
</template>

<script>
  // 这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json 文件，图片文件等等）
  import userHeader from 'user/userHeader'

  export default {
    // import 引入的组件需要注入到对象中才能使用
    components: {
      userHeader
    },
    props: {},
    name: "Business",
    data: function () {
      return {
        headerName: '商家详情'
      }
    },
    // 计算属性 类似于 data 概念
    computed: {},
    // 监控 data 中的数据变化
    watch: {},
    // 方法集合
    methods: {},
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {

    },
    beforeCreate() {
    },
    beforeMount() {
    }, // 生命周期 - 挂载之前
    beforeUpdate() {
    }, // 生命周期 - 更新之前
    updated() {
    }, // 生命周期 - 更新之后
    beforeDestroy() {
    }, // 生命周期 - 销毁之前
    destroyed() {
    }, // 生命周期 - 销毁完成
    activated() {
    } // 如果页面有 keep-alive 缓存功能,这个函数会触发
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/main";
  @import "../assets/css/variable";
  @import "../assets/css/mixin";

</style>
