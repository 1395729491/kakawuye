<template>
  <div >
      <div class="PayInfo-top">
          <p class="PayInfo-top-tip">本季度应缴纳费用<span>(m2/0.5元+3个月)</span></p> 
          <p class="PayInfo-top-money">200.00元</p>
      </div>
      <div class="PayInfo-infoList">
        <ul>
            <li>
                <span>缴费单位</span>
                <p>咔咔物业</p>
            </li>
            <li>
                <span>缴费户数</span>
                <p>XX小区XX栋XX单元XX号</p>
            </li>
            <li>
                <span>用电量</span>
                <p>150m2</p>
            </li>
            <li>
                <span>单价</span>
                <p>m2/0.5元</p>
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
      <btn>立即支付</btn>
  </div>
</template>
<script>
import btn from "@/components/button.vue"
export default {
  components:{btn},
  data(){
    return {

    }
  }
}
</script>
<style lang="less" scoped>
@import "../../style/PublicPay.less";
</style>
