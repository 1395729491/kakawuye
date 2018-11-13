<template>
  <div>
      <div class="OviStore">
          <p>商铺缴费</p>
          <ul>
            <li v-for="(ovistroelist,index) in OviStoreList" :key="index" @click="GoOvi(index)">
              <img :src="ovistroelist.imgurl" alt="">
               {{ ovistroelist.text }}
            </li>
          </ul>
      </div>

  </div>
</template>
<script>
export default {
  data(){
    return{
      OviStoreList:[
        {
          imgurl:require("@/assets/MyHome/LivePayIcon1.svg"),
          text:"水费缴纳"
        },
        {
          imgurl:require("@/assets/MyHome/LivePayIcon2.svg"),
          text:"电费缴纳"
        },
        {
          imgurl:require("@/assets/MyHome/LivePayIcon3.svg"),
          text:"燃气缴纳"
        },
      ]
    }
  },
  methods:{
    GoOvi(index){
      if(index==0){
          this.$router.push({name:'water'});
      }else if(index==1){
          this.$router.push({name:'elctr'});
      }else if(index==2){
          this.$router.push({name:'gas'});
      }else{
        return false;
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import "./OviStore.less";
</style>
