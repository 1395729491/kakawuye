<template>
  <div>
      <div class="MBD-content">
          <div class="MBD-content-item" v-for="(MBDitem,index) in MBDItemList" :key="index">
              <span>{{ MBDitem.spanText }}</span>
              <p>{{ MBDitem.pText }}</p>
          </div>
      </div>
      <btn @click.native="returns">返回</btn>
  </div>
</template>
<script>
import btn from "@/components/button.vue";
export default {
  components: { btn },
  data() {
    return {
      MBDItemList: [
        {
          spanText: "缴费单位",
          pText: "贵州省南方电网有限公司"
        },
        {
          spanText: "缴费用户",
          pText: "XX小区XX栋XX单元XX号"
        },
        {
          spanText: "用电量",
          pText: "300W"
        },
        {
          spanText: "单价",
          pText: "W/0.5元"
        },
        {
          spanText: "缴费金额",
          pText: "200.00元"
        },
        {
          spanText: "缴费时间",
          pText: "2018-07-12 14:00"
        },
        {
          spanText: "订单编号",
          pText: "1234567987345"
        }
      ]
    };
  },
  methods:{
    returns(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
@import "./MineBills.less";
</style>
