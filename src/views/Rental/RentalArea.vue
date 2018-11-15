<template>
  <div class="RTA-bg">
        <div class="RTA-box">
            <div class="RTA-title">
                车位剩余<span>11</span>
            </div>
            <div class="RTA-list">
                <ul>    
                    <li 
                      v-for="(retalist,index) in ReatalAList"
                      :key="index"
                      :class="{isused:retalist.isUsed}"
                      @click="GoRTSelect(retalist.isUsed)"
                    >
                        <div class="RTA-list-top">
                            {{ retalist .areaText}} : {{ retalist.numText }}
                            <p v-if="retalist.isUsed"> · 使用中 </p>
                        </div>
                        <div class="RTA-list-bottom">
                            租用
                        </div>
                    </li>
                </ul>
            </div>
        </div>
         <div class="RTMyRental">
            <fbtn>
                <i></i>
                我的车位
            </fbtn>
        </div>
  </div>
</template>
<script>
import fbtn from "@/components/fiexbtn.vue";
export default {
  components: { fbtn },
  data() {
    return {
      ReatalAList: [
        {
          areaText: "A区",
          numText: "022",
          isUsed: false
        },
        {
          areaText: "B区",
          numText: "011",
          isUsed: false
        },
        {
          areaText: "C区",
          numText: "001",
          isUsed: false
        },
        {
          areaText: "D区",
          numText: "235",
          isUsed: false
        },
        {
          areaText: "E区",
          numText: "041",
          isUsed: false
        },
        {
          areaText: "F区",
          numText: "004",
          isUsed: false
        },
        {
          areaText: "G区",
          numText: "001",
          isUsed: true
        }
      ]
    };
  },
  methods: {
      GoRTSelect(_isUsed){
        if(_isUsed==false){
          this.$router.push({name:'rentalselect'});
        }else{
          return false;
        }
      }
  }
};
</script>
<style lang="less" scoped>
@import "./Rental.less";
</style>
