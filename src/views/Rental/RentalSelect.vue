<template>
  <div class="RTS-bg">
      <div class="RTS-banner">

      </div>
      <div class="RTS-num">
            车位编号 :<span>A区022</span>
      </div>
      <div class="RTS-way">
            <p class="RTS-way-title">选择租用方式</p>
            <div class="RTS-way-m" @click="RTSM">
                <span class="RTS-way-m-l">月租</span>
                <span class="RTS-way-m-m">20.00/月</span>
                <span class="RTS-way-m-r" :class="{RTSSelected:mSelect}"></span>
            </div>
            <div class="RTS-way-m" @click="RTSY">
                <span class="RTS-way-m-l">年租</span>
                <span class="RTS-way-m-m">120.00/月</span>
                <span class="RTS-way-m-r" :class="{RTSSelected:ySelect}"></span>
            </div>
      </div>
      <div class="RTS-time">
          <p class="RTS-time-title">选择租用时间</p>
          <div class="RTS-time-t">
              <p>开始租用时间</p>
              <p>2018年12月10日
              </p>
          </div>
          <div class="RTS-time-n">
              <p>租用数量</p>
              <div class="num-oper">
                  <span class="num-sub"> 
                    <span>——</span>  
                  </span>
                  <span class="num-num">3</span>
                  <span class="num-add">+</span>
              </div>
          </div>
      </div>
      <fbtn @click.native="GoRTWirte">立即租用</fbtn>
  </div>
</template>
<script>
import fbtn from "@/components/fiexbtn.vue";
export default {
  components: { fbtn },
  data() {
    return {
      mSelect: true,
      ySelect: false
    };
  },
  methods: {
    RTSM() {
      this.mSelect = true;
      this.ySelect = false;
    },
    RTSY() {
      this.mSelect = false;
      this.ySelect = true;
    },
    GoRTWirte() {
      this.$router.push({name:'rentalwrite'});
    }
  }
};
</script>
<style lang="less" scoped>
@import "./Rental.less";
</style>
