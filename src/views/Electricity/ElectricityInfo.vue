<template>
  <div >
      <div class="PayInfo-top">
          <p class="PayInfo-top-tip">本月应缴纳费用<span>(度/0.5元)</span></p> 
          <p class="PayInfo-top-money">200元</p>
      </div>
      <div class="PayInfo-infoList">
        <ul>
            <li>
                <span>缴费单位</span>
                <p>贵州省南方电网有限公司</p>
            </li>
            <li>
                <span>缴费户数</span>
                <p>XX小区XX栋</p>
            </li>
            <li>
                <span>用电量</span>
                <p>300w</p>
            </li>
            <li>
                <span>单价</span>
                <p>w/0.5元</p>
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
      <btn @click.native="GoPaySuc()">立即支付</btn>
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
      GoPaySuc(){
          
      }
  }
}
</script>
<style lang="less" scoped>
@import "../../style/PublicPay.less";
</style>
