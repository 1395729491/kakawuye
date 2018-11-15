<template>
  <div>
        <div class="RTV-npc">
            <div class="RTV-npc-item">
                <span>姓名</span>
                <p>胡曦格</p>
            </div>
            <div class="RTV-npc-item">
                <span>电话</span>
                <p>129434747569</p>
            </div>
             <div class="RTV-npc-item">
                <span>车牌</span>
                <p>贵A8888</p>
            </div>
        </div>
        <div class="RTV-info">
            <p class="RTV-info-title">订单信息</p>
            <div class="RTV-info-content" v-for="(rtvinfolist,index) in RTVInfoList" :key="index">
                <span>{{ rtvinfolist.spanText }}</span>
                <p>{{ rtvinfolist.PText }}</p>
            </div>
        </div>
        <div class="RTV-way">
            <span>
                支付方式
            </span>
            <div class="RTV-way-wx">
                <p>微信支付</p>
                <i></i>
            </div>
        </div>
        <ftbtn>
            <div slot="left">
                总价:20.00元
            </div>
            <div slot="right">
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
        RTVInfoList:[
          {
            spanText:'租用车位',
            PText:'A区22',
          },
            {
            spanText:'租用方式',
            PText:'月租',
          },
            {
            spanText:'租用费用',
            PText:'20.00元',
          },
            {
            spanText:'租用时间',
            PText:'3个月',
          },
            {
            spanText:'开始租用时间',
            PText:'2018年12月10号',
          },
            {
            spanText:'结束租用时间',
            PText:'2019年2月10号',
          },
        ]
    };
  },
  methods:{

  }
};
</script>
<style lang="less" scoped>
@import "./Rental.less";
</style>

