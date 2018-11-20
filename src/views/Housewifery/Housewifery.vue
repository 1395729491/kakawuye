<template>
  <div class="HW-bg">
      <div class="HW-nav">
          <ul>
              <li v-for="(hwNav,index) in HWNAV" :key="index" @click="HWNAVS(index)">
                  <span :class="{spanActive:hwNav.isspanActive}">{{ hwNav.spanText }}</span>
              </li>
          </ul>
      </div>
      <div class="HW-item" @click="GoHWDetail()">
          <div class="HW-item-img">
              <img src="@/assets/Other/test2.svg" alt="">
          </div>
          <div class="HW-item-info">
              <h4>张月嫂</h4>
              <div class="HW-item-info-tag">
                  <span>高级月嫂</span>
                  <span>经验丰富</span>
              </div>
              <p class="HW-item-info-money">￥1700/月</p>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      HWNAV: [
        {
          spanText: "月嫂",
          isspanActive: true
        },
        {
          spanText: "保姆",
          isspanActive: false
        },
        {
          spanText: "保洁",
          isspanActive: false
        }
      ]
    };
  },
  methods: {
    HWNAVS(index){
      console.log(index);
      for(let i=0;i<this.HWNAV.length;i++){
        this.HWNAV[i].isspanActive=false;
        this.HWNAV[index].isspanActive=true;
      }
      if(index==0){
        alert("我要去请求月嫂的数据");
      }else if(index==1){
        alert("我要去请求保姆的数据");
      }else if(index==2){
        alert("我要去请求保洁的数据");
      }
    },
    GoHWDetail(){
      this.$router.push({name:'housedetail'});
    }
  }
};
</script>
<style lang="less" scoped>
@import "./Housewifery.less";
</style>
