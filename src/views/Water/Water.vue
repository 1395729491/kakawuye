<template>
  <div class="bg">
    <div class="Banner-El">
        <div class="banner wa">
              <p class="local"><i></i> 当前房产:XX小区XX栋XX单元XX号</p>
              <p class="moeny">200.00元</p>
              <p class="consume">本月用水:30吨</p>
        </div>
    </div>
    <div class="Payment">
        <ul>
          <li>
              <span>缴费单位</span>
              <p>南方电网有限责任公司</p>
          </li>
          <li>
              <span>缴费户数</span>
              <p>XX小区XX栋XX单元XX号</p>
          </li>
        </ul>
        <div class="Payment-btn">
            <btn @click.native="GOELINFO">
              立即缴费
           </btn>
        </div>
    </div>
    <div class="PayHistroy">
        <p class="PayHistroy-title">缴费记录</p>
        <p class="PayHistroy-SelectTime">2018<i></i></p>
        <ul>
            <li v-for="(item,index) in HistroyMoth" :key="index">
                <span :class="{ colorgry:item.status }">{{ item.month }}</span>
                <p class="stateone" v-if="item.status">({{ item.status }})</p>
                <!-- <p class="stattwo">{{ item.statusT }}</p> -->
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import btn from "@/components/button.vue";
export default {
  components:{btn},
  data(){
    return{
        HistroyMoth:[
            {
                month:"1月",
                status:"已缴清",
                statusT:""
            },
            {
                month:"2月",
                status:"已缴清",
                statusT:""
            },
            {
                month:"3月",
                status:"已缴清",
                statusT:""
            },
            {
                month:"4月",
                status:"已缴清",
                statusT:"当月欠费"
            },
            {
                month:"5月",
                status:"已缴清",
                statusT:""
            },
            {
                month:"6月",
                status:"已缴清",
                statusT:""
            },
            {
                month:"7月",
                status:"",
                statusT:""
            },
            {
                month:"8月",
                status:"",
                statusT:""
            },
            {
                month:"9月",
                status:"",
                statusT:""
            },
            {
                month:"10月",
                status:"",
                statusT:""
            },
            {
                month:"11月",
                status:"",
                statusT:""
            },
            {
                month:"12月",
                status:"",
                statusT:""
            },

        ]  
    }
  },
  computed:{
      
  },
  methods:{
      GOELINFO(){
          this.$router.push({name:"waterinfo"});
      }
  }
}
</script>
<style lang="less" scoped>
@import "../../style/PublicPay.less";
</style>
