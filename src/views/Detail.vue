<template>
    <div class="detail">
      <SubHeader :title="jobList[0].name"></SubHeader>
    </div>
</template>

<script>
import SubHeader from '../components/SubHeader'
// import { getJobList } from '../api/index'

export default {
  name: 'Detail',
  components: {
    SubHeader
  },
  data: function () {
    return {
      jobList: [{
        name: '职位推荐'
      }]
    }
  },
  created () {
    // getJobList({ id: this.$route.params.id })
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }
}
</script>

<style scoped lang="scss">
.detail{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f00;

}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
