<template>
  <div >
      <div class="PayInfo-top">
          <p class="PayInfo-top-tip">本月应缴纳费用<span>(吨/0.5元)</span></p> 
          <p class="PayInfo-top-money">200元</p>
      </div>
      <div class="PayInfo-infoList">
        <ul>
            <li>
                <span>缴费单位</span>
                <p>贵阳北控水务有限公司</p>
            </li>
            <li>
                <span>缴费户数</span>
                <p>XX小区XX栋XX单元XX号</p>
            </li>
            <li>
                <span>用电量</span>
                <p>30吨</p>
            </li>
            <li>
                <span>单价</span>
                <p>吨/0.5元</p>
            </li>
            <li>
                <span>缴费金额</span>
                <p>200.00元</p>
            </li>
        </ul>
      </div>
      <div class="PayInfo-way">
            <p>支付方式</p>
            <p>微信支付<i></i></p>
      </div>
      <btn  @click.native="GoPayScu()">立即支付</btn>
  </div>
</template>
<script>
import btn from "@/components/button.vue"
export default {
  components:{btn},
  data(){
    return {

    }
  },
   methods:{
      GoPayScu(){
          this.$router.push({name:'paysuc'});
      }
  }
}
</script>
<style lang="less" scoped>
@import "../../style/PublicPay.less";
</style>
