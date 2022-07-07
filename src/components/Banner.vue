<template>
  <swiper :options="swiperOption" class="banner" v-if="banners.length>0">
    <!-- slides -->
    <swiper-slide v-for="(item,key) in banners" :key="key" class="item">
      <a :href="item.path">
        <img :src="item.imgUrl" alt="">
      </a>
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Banner',
  data () {
    return {
      swiperOption: {
        loop: true, // 循环模式
        autoplay: {
          delay: 2000, // 自动切换的时间间隔
          stopOnLastSlide: false, // 当切换到最后一个slide时停止自动切换
          disableOnInteraction: false// 用户操作swiper后，是否禁止autoplay
        },
        // 是否需要分页器
        pagination: {
          el: '.swiper-pagination'
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      }
    }
  },
  props: {
    banners: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    // getBanner{
    //   console.log("数组",banners);
    // }
    this.getBanner()
  },
  methods: {
    getBanner () {
      console.log('数组11', this.banners)
    }

  }
}
</script>

<style scoped lang="scss">
  .banner{
    .item{
      img{
        width: 100%;
        }
    }
  }
</style>
<style lang="scss">
  @import "../assets/css/mixin";
  .banner{
    .swiper-pagination-bullet{
      width: 16px;
      height: 16px;
      background: #fff;
      opacity: 1;
    }
    .swiper-pagination-bullet-active{
      @include bg_color()
    }
  }
</style>
