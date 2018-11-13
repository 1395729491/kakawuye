<template>
  <div class="bg">
      <div class="NoticeBanner">
          
      </div>
      <div class="MH-Notice" @click="GoDetail">
          <div class="MH-Notice-time">
                <span class="Tian">23</span>
                <span class="Yue">5月</span>
          </div>
          <div class="MH-Notice-content">
              <h2>停水公告</h2>
              <p>今日南明区部分小区停水,具体来水时间请关注...</p>
              <span>14:00</span>
          </div>
      </div>
      <div class="MH-Notice" @click="GoDetail">
          <div class="MH-Notice-time">
                <span class="Tian">23</span>
                <span class="Yue">5月</span>
          </div>
          <div class="MH-Notice-content">
              <h2>停水公告</h2>
              <p>今日南明区部分小区停水,具体来水时间请关注...</p>
              <span>14:00</span>
          </div>
      </div>
      <div class="MH-Notice" @click="GoDetail">
          <div class="MH-Notice-time">
                <span class="Tian">23</span>
                <span class="Yue">5月</span>
          </div>
          <div class="MH-Notice-content">
              <h2>停水公告</h2>
              <p>今日南明区部分小区停水,具体来水时间请关注...</p>
              <span>14:00</span>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }  
  },
  methods:{
    GoDetail(){
      this.$router.push({name:"notdetail"});
    }
  }
}
</script>
<style lang="less" scoped>
@import "./Notice.less";
</style>
