<template>
  <div class="home">
    <ScrollView>
      <div>
        <Banner :banners="banners"></Banner>
        <ContentTabber></ContentTabber>
        <Personalized :Personalized="Personalized" :title="'日结推荐'" @select="fatherSelectItem"></Personalized>
        <Personalized :Personalized="partTime" :title="'全职推荐'"></Personalized>
        <JobList :jobList="jobList"></JobList>
      </div>
    </ScrollView>
    <router-view></router-view>
  </div>
</template>

<script>
  import Banner from '../components/Banner'
  import Personalized from '../components/Personalized'
  import JobList from '../components/JobList'
  import ScrollView from '../components/ScrollView'
  import ContentTabber from '../components/ContentTabber'

  export default {
    name: 'home',
    components: {
      Banner,
      Personalized,
      JobList,
      ScrollView,
      ContentTabber
    },
    data() {
      return {
        banners: [{
          id: 1,
          path: 'https://www.baidu.com/',
          imgUrl: 'https://image.meiye.art/pic_cA5mV4rNxbPSXaQffgFje'
        }, {
          id: 2,
          path: 'https://www.jd.com/',
          imgUrl: 'https://image.meiye.art/pic_yhY9ngQy35nofQeY2gn0-'
        }, {
          id: 3,
          path: 'https://www.taobao.com/',
          imgUrl: 'https://image.meiye.art/pic_kSj7jgdAsyoWgiQSyfO7i'
        }, {
          id: 4,
          path: 'https://blog.csdn.net/',
          imgUrl: 'https://image.meiye.art/pic_CiH2hJX6ztrRkD6E00JTX'
        }
        ],
        Personalized: [
          {
            id: 1,
            name: '宝龙城',
            value: ['行政主管（5000-7000）', '实习生（3000-5000）'],
            number: 6,
            path: 'https://www.baidu.com/',
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F07%2F57%2F16%2F075716aa6b6789a525601109f1c4e0d1.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588721&t=a16e00fd47105e259663f322b970aabd'
          }, {
            id: 2,
            name: '万象城',
            value: ['行政主管（5000-7000）', '实习生（3000-5000）'],
            number: 6,
            path: 'https://www.jd.com/',
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F6e%2F0d%2F97%2F6e0d97948a0007f5e0d6e9a1c7059c61.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588722&t=ba788dd7a8ee5ae6f2d5ba1c26ff108a'
          }, {
            id: 3,
            name: '银泰',
            value: ['行政主管（5000-7000）', '实习生（3000-5000）'],
            number: 6,
            path: 'https://www.taobao.com/',
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fa7%2F57%2F85%2Fa757850a29db44013a12ae694c12490f.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588722&t=cfe7fbea0214d7ef594f84e9760176cd'
          }, {
            id: 4,
            name: '共联cc',
            value: ['行政主管（5000-7000）', '实习生（3000-5000）'],
            number: 6,
            path: 'https://blog.csdn.net/',
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc0%2F8e%2F28%2Fc08e28eb52da5a2b5b451ad6272a8197.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588722&t=9a5344aa0a1491172868bcbf70c271c8'
          },
          {
            id: 5,
            path: '',
            name: '天街',
            value: ['行政主管（5000-7000）', '实习生（3000-5000）'],
            number: 6,
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F19%2F20210819092723_812e1.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588722&t=9dbadff163798b64655a4020ab7b3798'
          },
          {
            id: 6,
            path: '',
            name: '北美新天地',
            value: ['行政主管（5000-7000）', '实习生（3000-5000）'],
            number: 6,
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588894&t=6fdb5e7049c1c4316f14cfbc08a2d119'
          }
        ],
        partTime: [
          {
            id: 1,
            name: '宝龙城',
            value: ['行政主管（5000-7000）', '实习生（3000-5000）'],
            number: 6,
            path: 'https://www.baidu.com/',
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F07%2F57%2F16%2F075716aa6b6789a525601109f1c4e0d1.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588721&t=a16e00fd47105e259663f322b970aabd'
          }, {
            id: 2,
            name: '万象城',
            value: ['行政主管（5000-7000）', '实习生（3000-5000）'],
            number: 6,
            path: 'https://www.jd.com/',
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F6e%2F0d%2F97%2F6e0d97948a0007f5e0d6e9a1c7059c61.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588722&t=ba788dd7a8ee5ae6f2d5ba1c26ff108a'
          }, {
            id: 3,
            name: '银泰',
            value: ['行政主管（5000-7000）', '实习生（3000-5000）'],
            number: 6,
            path: 'https://www.taobao.com/',
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fa7%2F57%2F85%2Fa757850a29db44013a12ae694c12490f.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588722&t=cfe7fbea0214d7ef594f84e9760176cd'
          }, {
            id: 4,
            name: '共联cc',
            value: ['行政主管（5000-7000）', '实习生（3000-5000）'],
            number: 6,
            path: 'https://blog.csdn.net/',
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc0%2F8e%2F28%2Fc08e28eb52da5a2b5b451ad6272a8197.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588722&t=9a5344aa0a1491172868bcbf70c271c8'
          },
          {
            id: 5,
            path: '',
            name: '天街',
            value: ['行政主管（5000-7000）', '实习生（3000-5000）'],
            number: 6,
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F19%2F20210819092723_812e1.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588722&t=9dbadff163798b64655a4020ab7b3798'
          },
          {
            id: 6,
            path: '',
            name: '北美新天地',
            value: ['行政主管（5000-7000）', '实习生（3000-5000）'],
            number: 6,
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588894&t=6fdb5e7049c1c4316f14cfbc08a2d119'
          }
        ],
        jobList: [
          {
            id: 1,
            name: '宝龙城',
            value: '行政主管（5000-7000）',
            number: 6,
            time: '2022.02.16~2022.02.28',
            wages: 120,
            path: 'https://www.baidu.com/',
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F07%2F57%2F16%2F075716aa6b6789a525601109f1c4e0d1.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588721&t=a16e00fd47105e259663f322b970aabd'
          }, {
            id: 2,
            name: '万象城',
            value: '行政主管（5000-7000）',
            number: 6,
            time: '2022.02.16~2022.02.28',
            wages: 120,
            path: 'https://www.jd.com/',
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F6e%2F0d%2F97%2F6e0d97948a0007f5e0d6e9a1c7059c61.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588722&t=ba788dd7a8ee5ae6f2d5ba1c26ff108a'
          }, {
            id: 3,
            name: '银泰',
            value: '行政主管（5000-7000）',
            number: 6,
            time: '2022.02.16~2022.02.28',
            wages: 120,
            path: 'https://www.taobao.com/',
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fa7%2F57%2F85%2Fa757850a29db44013a12ae694c12490f.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588722&t=cfe7fbea0214d7ef594f84e9760176cd'
          }, {
            id: 4,
            name: '共联cc',
            value: '行政主管（5000-7000）',
            number: 6,
            time: '2022.02.16~2022.02.28',
            wages: 120,
            path: 'https://blog.csdn.net/',
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc0%2F8e%2F28%2Fc08e28eb52da5a2b5b451ad6272a8197.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588722&t=9a5344aa0a1491172868bcbf70c271c8'
          },
          {
            id: 5,
            path: '',
            name: '天街',
            value: '行政主管（5000-7000）',
            number: 6,
            time: '2022.02.16~2022.02.28',
            wages: 120,
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F19%2F20210819092723_812e1.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588722&t=9dbadff163798b64655a4020ab7b3798'
          },
          {
            id: 6,
            path: '',
            name: '北美新天地',
            value: '行政主管（5000-7000）',
            number: 6,
            time: '2022.02.16~2022.02.28',
            wages: 120,
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647588894&t=6fdb5e7049c1c4316f14cfbc08a2d119'
          }
        ]

      }
    },
    created() {
      // getBanner{
      //   console.log("数组",banners);
      // }
      this.getBanner()
    },
    methods: {
      getBanner() {
        console.log('数组', this.banners)
      },
      fatherSelectItem(id) {
        this.$router.push('/home/detail/' + id)
      }

    }
  }
</script>

<style scoped lang="scss">
  .home {
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
</style>
