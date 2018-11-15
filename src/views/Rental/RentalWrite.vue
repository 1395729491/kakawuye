<template>
  <div class="RTW-bg">
        <div class="RTW-from">
            <div class="RTW-input" v-for="(rtffromlist,index) in RTWFromList" :key="index">
                <span>{{ rtffromlist.spanText }}</span>
                <input type="text" :placeholder="rtffromlist.placeholder" :value="rtffromlist.inputText">
            </div>
        </div>
        <div class="RTW-time">
            <p class="RTW-time-title">租用时间</p>
            <div class="RTW-time-start">
                <span>开始租用时间</span>
                <div class="RTW-time-start-right"  @click="open">
                   <yd-datetime ref="datetime" type="date" v-model="datetime4" slot="right"></yd-datetime>
                   <i></i>
                </div>
            </div>
            <div class="RTW-time-end">
                <span>结束租用时间</span>
                <div class="RTW-time-end-right">
                    2018-05-21
                   <i></i>
                </div>
            </div>
        </div>
        <div class="RTW-pay">
            <p>支付方式</p>
            <div>
                <p>微信支付</p>
                <i></i>
            </div>
        </div>
        <ftbtn>
            <div slot="left">
                总价:20.00元
            </div>
            <div slot="right" @click="GoRTVerify">
                  立即支付
            </div>
        </ftbtn>
  </div>
</template>
<script>
import ftbtn from "@/components/ftbtn.vue";
export default {
  components: { ftbtn },
  data() {
    return {
      datetime4: "2017-05-11",
      RTWFromList: [
        {
          spanText: "姓名",
          placeholder: "请输入您的姓名",
          inputText: "胡曦格"
        },
        {
          spanText: "电话",
          placeholder: "请输入您的电话",
          inputText: "12943474756"
        },
        {
          spanText: "车辆",
          placeholder: "请输入您的车牌号",
          inputText: "贵A8888"
        }
      ]
    };
  },
  methods: {
    open() {
      this.$refs.datetime.open();
    },
    GoRTVerify() {
      this.$router.push({name:'rentalverify'});
    }
  }
};
</script>
<style lang="less" scoped>
@import "./Rental.less";
</style>
