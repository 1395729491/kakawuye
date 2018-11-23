<template>
  <div class="MRH-bg">
      <div class="MRH-content" @click="MyRenHistoryDetail()">
          <p class="MRH-content-time">2018年7月3日</p>
          <div class="MRH-item">
                <div class="MRH-item-area">
                    <i></i>
                    <p>A区002</p>
                </div>
                <div class="MRH-item-way">
                    季租
                </div>
                <div class="MRH-item-money">
                    -200
                </div>
          </div>
      </div>
       <div class="MRH-content" @click="MyRenHistoryDetail()">
          <p class="MRH-content-time">2018年7月3日</p>
          <div class="MRH-item">
                <div class="MRH-item-area">
                    <i></i>
                    <p>A区002</p>
                </div>
                <div class="MRH-item-way">
                    季租
                </div>
                <div class="MRH-item-money">
                    -200
                </div>
          </div>
      </div>
       <div class="MRH-content" @click="MyRenHistoryDetail()">
          <p class="MRH-content-time">2018年7月3日</p>
          <div class="MRH-item">
                <div class="MRH-item-area">
                    <i></i>
                    <p>A区002</p>
                </div>
                <div class="MRH-item-way">
                    季租
                </div>
                <div class="MRH-item-money">
                    -200
                </div>
          </div>
      </div>
      <fbtn @click.native="Returns">返回</fbtn>
  </div>
</template>
<script>
import fbtn from "@/components/fiexbtn";
export default {
  components: { fbtn },
  data(){
    return{

    }
  },
  methods:{
      Returns(){
          this.$router.go(-1);
      },
      MyRenHistoryDetail(){
          this.$router.push({name:'myRentHistoryDetail'});
      }
  }
}
</script>
<style lang="less" scoped>
@import "./MyCarport.less";
</style>

