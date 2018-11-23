<template>
  <div>
      <div class="SHS-sucicon-fu">
         <div class="SHS-sucicon">

         </div>
        <P class="SHS-tips">下单成功,请耐心等待工作人员上门取件</P>
      </div>
      <div class="SHS-quote">
          <input type="text" placeholder="输入快递员报价">
      </div>
      <div class="SHS-paybtn" @click="GoPaySuc()">
          支付
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
        mestip:'订单提交成功,请耐心等待快递员上门取件',
        mesNum:' ',
    }
  },
   methods:{
      GoPaySuc(){
          this.$router.push({name:'paysuc',params:{mestip:this.mestip,mesNum:this.mesNum}});
      }
  }
}
</script>
<style lang="less" scoped>
@import "./Ship.less";
</style>
