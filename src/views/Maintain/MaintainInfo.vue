<template>
  <div>
      <div class="MTI-title">
            保修详情
      </div>
      <div class="MTI-info">
          <ul>
              <li v-for="(mitinfo,index) in MTinfoList" :key="index">
                  <span>{{ mitinfo.spanText }} :</span>
                  <p>{{ mitinfo.pText }}</p>
              </li>
          </ul>
      </div>
      <div class="MTI-img">
            <p class="MTI-img-title">图片信息:</p>
            <div>
                <img src="@/assets/Other/test1.svg" alt="">
                <img src="@/assets/Other/test1.svg" alt="">
                <img src="@/assets/Other/test1.svg" alt="">
                <img src="@/assets/Other/test1.svg" alt="">
            </div>
      </div>
      <fbtn @click.native="GoPaySuc()">确认提交</fbtn>
  </div>
</template>
<script>
import fbtn from "@/components/fiexbtn.vue";
export default {
  components: { fbtn },
  data() {
    return {
      mestip:'报修成功,请耐心等待工作人员前去维修',
      mesNum:' ',
      MTinfoList: [
        {
          spanText: "报修地址",
          pText: "XXX小区12栋3单元4号电梯"
        },
        {
          spanText: "报修设备",
          pText: "电梯"
        },
        {
          spanText: "预约时间",
          pText: "无"
        },
        {
          spanText: "备注描述",
          pText:
            "xxx小区12栋3单元的4号电梯坏几天了,非常影响出行,请尽快派人维修。"
        }
      ]
    };
  },
  methods:{
    GoPaySuc(){
      this.$router.push({name:'paysuc',params:{mestip:this.mestip,mesNum:this.mesNum}});
    }
  }
};
</script>
<style lang="less" scoped>
@import "./Maintain.less";
</style>
